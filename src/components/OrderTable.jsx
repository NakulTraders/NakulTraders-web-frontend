import React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const OrderTable = ({ orders }) => {
    return (
        <table className="w-full border-collapse">
            <thead>
                <tr className="bg-gray-200 text-left">
                    <th className="p-2">Firm Name</th>
                    <th className="p-2">Phone</th>
                    <th className="p-2">City</th>
                    <th className="p-2">Products</th>
                    <th className="p-2">Total Bill</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Actions</th>
                </tr>
            </thead>

            <tbody>
                {orders.map((order) => (
                    <tr key={order._id} className="border-b hover:bg-gray-50">
                        <td className="p-2">{order.firmName}</td>
                        <td className="p-2">{order.phoneNo}</td>
                        <td className="p-2">{order.city}</td>
                        <td className="p-2">{order.productOrders.length} items</td>
                        <td className="p-2">₹{order.totalBill}</td>

                        <td className="p-2">
                            <span
                                className={`px-2 py-1 rounded text-white ${order.orderStatus === "pending"
                                    ? "bg-yellow-500"
                                    : order.orderStatus === "accepted"
                                        ? "bg-green-600"
                                        : "bg-red-600"
                                    }`}
                            >
                                {order.orderStatus}
                            </span>
                        </td>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography component="span">
                                    <div className="flex ">
                                        <p>shree ram traders </p>
                                    </div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>


                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default OrderTable;
