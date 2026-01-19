import React from 'react'
import InfoCard from '../../components/InfoCard'
import { ShoppingCart, Package, TrendingUp, Clock, AlertCircle, Eye } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import getAllProductApi from '../../api/AuthAPI/getAllproductApi';
import getAllOrderApi from '../../api/AuthAPI/getAllOrderApi';




export default function Dashboard() {

    // Here we fatch Product data through useQuery and store data in cache 
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["product"],
        queryFn: getAllProductApi,
        staleTime: 20 * 60 * 1000, // 20 minutes
        refetchOnWindowFocus: false,
        refetchOnMount: false
    })

    const { data: orderData, isLoading: orderDataLoading, error: orderError, refetch: orderRefetch } = useQuery({
        queryKey: ["order"],
        queryFn: getAllOrderApi,
        staleTime: 20 * 60 * 1000, // 20 minutes
        refetchOnWindowFocus: false,
        refetchOnMount: false
    })
    console.log(orderData);

    const stats = {
        totalProducts: data?.data?.length || "....",
        ordersToday: orderData?.data?.length || '....',
        customOrdersToday: 5,
        revenue: 1384,
        pendingOrders: 8
    };

    function getDailyOrderStats(orders, targetDate) {
        // Default to current date (today) if no date provided
        const filterDate = targetDate ? new Date(targetDate) : new Date();

        // Set time to start of day for accurate comparison
        filterDate.setHours(0, 0, 0, 0);

        // Filter orders for the specified date
        const dailyOrders = orders.filter(order => {
            const orderDate = new Date(order.createdAt);
            orderDate.setHours(0, 0, 0, 0);
            return orderDate.getTime() === filterDate.getTime();
        });

        // Calculate total revenue for the day
        const totalRevenue = dailyOrders.reduce((sum, order) => {
            return sum + (order.totalBill || 0);
        }, 0);

        // Count total orders
        const totalOrders = dailyOrders.length;

        // Group by order status
        const ordersByStatus = dailyOrders.reduce((acc, order) => {
            const status = order.orderStatus || 'unknown';
            acc[status] = (acc[status] || 0) + 1;
            return acc;
        }, {});

        return {
            date: filterDate.toISOString().split('T')[0],
            orders: dailyOrders,
            totalOrders,
            totalRevenue,
            ordersByStatus,
            averageOrderValue: totalOrders > 0 ? (totalRevenue / totalOrders).toFixed(2) : 0
        };
    }

    const recentOrders = [
        { id: 'ORD-001', customer: 'Rajesh Kumar', items: 5, amount: 450, status: 'pending', type: 'standard', time: '10 mins ago' },
        { id: 'ORD-002', customer: 'Priya Sharma', items: 3, amount: 280, status: 'completed', type: 'standard', time: '25 mins ago' },
        { id: 'CUST-001', customer: 'Amit Patel', items: 'Custom', amount: 520, status: 'pending', type: 'custom', time: '1 hour ago' },
        { id: 'ORD-003', customer: 'Sneha Verma', items: 8, amount: 680, status: 'processing', type: 'standard', time: '2 hours ago' }
    ];

    const lowStockProducts = [
        { id: 1, name: 'Rice (1kg)', stock: 5, category: 'Grains' },
        { id: 2, name: 'Cooking Oil (1L)', stock: 3, category: 'Oils' },
        { id: 3, name: 'Wheat Flour (5kg)', stock: 7, category: 'Grains' }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'processing': return 'bg-blue-100 text-blue-800';
            case 'completed': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="space-y-4">
            <div className="min-h-screen bg-gray-50">

                {/* Main Content */}
                <main className="p-6 max-w-7xl mx-auto">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
                        <p className="text-gray-600">Welcome back! Here's your store overview</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 font-medium">Total Products</p>
                                    <h3 className="text-3xl font-bold text-gray-800 mt-2">{stats.totalProducts}</h3>
                                </div>
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <Package className="text-blue-600" size={28} />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 font-medium">Orders Today</p>
                                    <h3 className="text-3xl font-bold text-gray-800 mt-2">{stats.ordersToday}</h3>
                                    <p className="text-xs text-green-600 mt-1 font-medium">+{stats.customOrdersToday} custom</p>
                                </div>
                                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                                    <ShoppingCart className="text-green-600" size={28} />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 font-medium">Revenue</p>
                                    <h3 className="text-3xl font-bold text-gray-800 mt-2">₹{stats.revenue}</h3>
                                    <p className="text-xs text-gray-500 mt-1">Today</p>
                                </div>
                                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                                    <TrendingUp className="text-orange-600" size={28} />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 font-medium">Pending</p>
                                    <h3 className="text-3xl font-bold text-gray-800 mt-2">{stats.pendingOrders}</h3>
                                    <p className="text-xs text-yellow-600 mt-1 font-medium">Action needed</p>
                                </div>
                                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center">
                                    <Clock className="text-yellow-600" size={28} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Orders & Low Stock */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Recent Orders */}
                        <div className="lg:col-span-2 bg-white rounded-xl shadow-md">
                            <div className="p-6 border-b">
                                <h3 className="text-xl font-bold text-gray-800">Recent Orders</h3>
                            </div>
                            <div className="p-6">
                                <div className="space-y-3">
                                    {recentOrders.map((order) => (
                                        <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2">
                                                    <span className="font-bold text-gray-800">{order.id}</span>
                                                    {order.type === 'custom' && (
                                                        <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold">
                                                            Custom
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-600 mt-1">{order.customer}</p>
                                                <p className="text-xs text-gray-500">{order.time}</p>
                                            </div>
                                            <div className="text-right mr-4">
                                                <p className="text-sm text-gray-600">{order.items} {order.type === 'standard' && 'items'}</p>
                                                <p className="text-lg font-bold text-gray-800">₹{order.amount}</p>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Low Stock */}
                        <div className="bg-white rounded-xl shadow-md">
                            <div className="p-6 border-b">
                                <div className="flex items-center space-x-2">
                                    <AlertCircle className="text-red-500" size={20} />
                                    <h3 className="text-xl font-bold text-gray-800">Low Stock</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    {lowStockProducts.map((product) => (
                                        <div key={product.id} className="p-4 bg-red-50 rounded-lg border border-red-200">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <p className="font-semibold text-gray-800">{product.name}</p>
                                                    <p className="text-xs text-gray-600 mt-1">{product.category}</p>
                                                </div>
                                                <span className="px-2 py-1 bg-red-500 text-white rounded-full text-xs font-bold">
                                                    {product.stock}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}