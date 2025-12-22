import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CreateOrderApi from "../api/AuthAPI/CreateOrderApi";
import CreateCustomizeOrderApi from "../api/AuthAPI/CreateCustomizeOrderApi";
import Swal from "sweetalert2";
import ButtonLoader from '../Component/ButtonLoader'



export default function OrderFormPg() {
     const [loading, setLoading] = useState(false);
    const navigator = useNavigate()
    const [formData, setFormData] = useState({
        Name: "",
        phone: "",
        city: "",
        transportation: "",
        gstType: "",
        address: ""
    });

    const [FinalOrder, setFinalOrder] = useState({
        firmName: "",
        phoneNo: "",
        city: "",
        transportation: "",
        GST: "",
        address: "",
        productOrders: [],
        totalProductAmount: ""
    })
    const [localData, setLocalData] = useState(null); // Store all Order product

    //get total bill 
    const location = useLocation()
    const TotalBill = location.state?.TotalBill;
    const { TextOrder, Ordertype } = location.state;
    // console.log("order text:",TextOrder);
    // console.log("order type:",Ordertype);

    const [AllTextOrder, setAllTextOrder] = useState([]) // Store All text order


    // Fetch data from localStorage
    useEffect(() => {
        window.scrollTo(0, 0)
        const savedData = JSON.parse(localStorage.getItem("cartList"));
        console.log(savedData);

        if (savedData) {
            setLocalData(savedData);
        }
        setAllTextOrder(TextOrder?.map((item) => item.text))
    }, []);

    // Handle Change (all input updates)
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle Submit
    const handleSubmit = async (e) => {
        // if(loading) return;
        e.preventDefault();
        setLoading(true)
        console.log("local data :", localData);
        console.log("form data :", formData);
        console.log("Total bill :", TotalBill);

        const lastbill = {
            firmName: formData.Name,
            phoneNo: formData.phone,
            city: formData.city,
            transportation: formData.transportation,
            GST: formData.gstType,
            address: formData.address,
            productOrders: localData,
            totalBill: TotalBill
        };
        console.log("last bill", lastbill);

        const resp = await CreateOrderApi(lastbill);
        console.log("responce :", resp);

        if (!resp.data) {
            return Swal.fire({
                icon: "error",
                title: "Network error",
                text: "Something went wrong!",
            });
        }

        setLoading(false)
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Order Placed Successfully!",
            showConfirmButton: false,
            timer: 2000,
            width: "450px"
        }).then(() => {
            navigator("/")
        })
    };

    // Customize Order Handle Submit
    const customizeHandleSubmit = async (e) => {
        // if(loading) return;
        e.preventDefault();
        setLoading(true)
        console.log("form data :", formData);
        console.log("text Order :", AllTextOrder);

        const lastbill = {
            firmName: formData.Name,
            phoneNo: formData.phone,
            city: formData.city,
            transportation: formData.transportation,
            GST: formData.gstType,
            address: formData.address,
            textOrder: AllTextOrder,
        };
        console.log("last bill", lastbill);

        const resp = await CreateCustomizeOrderApi(lastbill);
        console.log("responce :", resp);

        if (!resp.data) {
            return Swal.fire({
                icon: "error",
                title: "Network error",
                text: "Something went wrong!",

            });
        }
        setLoading(false)
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Order Placed Successfully!",
            showConfirmButton: false,
            timer: 2000,
            width: "450px"
        }).then(() => {
            navigator("/")
        })

    };

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-10 md:py-20 flex justify-center">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">

                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    Place Your Order
                </h2>

                <form  onSubmit={Ordertype == "customize" ? customizeHandleSubmit : handleSubmit } className="space-y-4">

                    {/* Farm Name */}
                    <div>
                        <label className="block font-medium text-gray-700">Farm Name</label>
                        <input
                            type="text"
                            name="Name"
                            value={formData.Name}
                            onChange={handleChange}
                            placeholder="Enter farm name"
                            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block font-medium text-gray-700">Phone Number (WhatsApp no.)</label>
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter WhatsApp number"
                            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* City */}
                    <div>
                        <label className="block font-medium text-gray-700">City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Enter city"
                            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Transportation */}
                    <div>
                        <label className="block font-medium text-gray-700">Transportation</label>
                        <input
                            type="text"
                            name="transportation"
                            value={formData.transportation}
                            onChange={handleChange}
                            placeholder="Enter transportation"
                            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>


                    {/* GST / URD */}
                    <div>
                        <label className="block font-medium text-gray-700">GST \ UID</label>
                        <input
                            type="text"
                            name="gstType"
                            value={formData.gstType}
                            onChange={handleChange}
                            placeholder="Enter GST \ UID"
                            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>


                    {/* Address */}
                    <div>
                        <label className="block font-medium text-gray-700">Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter address"
                            className="w-full mt-1 p-3 border rounded-lg h-24 focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                    >
                       {loading ? <ButtonLoader color="White" /> : "Place Order"}
                    </button>

                </form>
            </div>
        </div>
    );
}
