import { API_URL, downloadCustomOrder } from "../NwConfig";
import axios from "axios";

export default async function DownloadCustomOrderApi(id) {
  try {
    // Build API URL
    const api = API_URL + downloadCustomOrder + id;

    // Call API and expect a BLOB (Excel file)
    const response = await axios.get(api, {
      responseType: "blob", // 👈 VERY IMPORTANT
    });

    // Create downloadable URL from blob
    const url = window.URL.createObjectURL(response.data);

    // Create temporary anchor tag
    const a = document.createElement("a");
    a.href = url;
    a.download = `order_${id}.xlsx`; // file name
    document.body.appendChild(a);

    // Trigger download
    a.click();

    // Cleanup
    a.remove();
    window.URL.revokeObjectURL(url);

  } catch (error) {
    console.error("Excel download failed:", error);
  }
}
