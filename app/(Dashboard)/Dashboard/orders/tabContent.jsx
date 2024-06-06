"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import "../../../../styles/globals.css";

export default function TabContent1() { 
    const [accessToken, setAccessToken] = useState(null);
    const [orderListData, setOrderListData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState(null);

    const fetchUserToken = async () => {
        try {
            const storedData = localStorage.getItem('userData');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                const token = parsedData.entity?.token;
                console.log("Fetched token:", token);
                return token;
            }
        } catch (error) {
            console.error('Error fetching user token:', error);
        }
    };

    const fetchUserDetails = async (token) => {
        // Mock function, replace with actual API call if needed
        return { entity: { firstname: "John" } };
    };

    useEffect(() => {
        const initialize = async () => {
            const token = await fetchUserToken();
            if (token) {
                const userDetails = await fetchUserDetails(token);
                if (userDetails && userDetails.entity && userDetails.entity.firstname) {
                    // Assuming `setFirstName` should be called here, but it's not defined
                    // setFirstName(userDetails.entity.firstname);
                }
                setToken(token);
            }
        };
        initialize();
    }, []);

    useEffect(() => {
        if (token) {
            const apiUrl = 'https://api-ngbuka.olotusquare.co/api/v1/dealer/orders?page=1&limit=10';
            fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setOrderListData(data.entity.rows);
                    console.log(data.entity.rows);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                    setIsLoading(false);
                });
        }
    }, [token]);

    return (
        <div className="w-[70vw] flex gap-4 flex-wrap">
            {isLoading ? (
                <div className="flex flex-col gap-6 items-center justify-center w-full min-h-[60vh] bg-white rounded-xl">
                    <p>Loading...</p>
                </div>
            ) : orderListData.length === 0 ? (
                <div className="flex flex-col gap-6 items-center justify-center w-full min-h-[60vh] bg-white rounded-xl">
                    <Image height={120} width={120} src="/images/Frame.png" className="rounded-full" alt="No orders" />
                    <p className="md:max-w-[56%] text-center">
                        You have no orders yet. Add products to your store to get started.
                    </p>
                    <button className="flex items-center py-2 px-2 border-2 rounded-full border-secondary-400 text-secondary-400 w-[9rem] gap-2">
                        Add product
                        <Image height={20} width={20} src="/images/Button icons.svg" alt="Add product icon" />
                    </button>
                </div>
            ) : (
                orderListData.slice(0, 5).map((item) => (
                    <Link className="flex w-full" href={{
                        pathname: '/Dashboard/orders/orderDetails/',
                        query: { id: item.id }
                    }} key={item.id}>
                        <div className="w-full">
                            <div className="flex gap-4 p-3 min-h-[8rem] w-full bg-white rounded-xl">
                                <Image className="rounded-xl" height={60} width={150} src={`/${item.imageUrl}`} alt="Product image" />
                                <div className="flex flex-col flex-1">
                                    <div className="flex justify-between py-1 items-center w-full text-sm">
                                        <p className="flex relative">
                                            Order ID. {item.orderId}
                                        </p>
                                        <p className="flex flex-row items-center">
                                            <span>
                                                <Image height={20} width={20} src="/icons/Clock-r.png" alt="Clock icon" />
                                            </span>
                                            {item.time}
                                        </p>
                                        <p className="flex">
                                            <span>
                                                <Image height={20} width={20} src="/icons/CalendarBlank-r.png" alt="Calendar icon" />
                                            </span>
                                            {item.date}
                                        </p>
                                        <p className={`w-full order-container capitalize flex flex-nowrap ${item.state}`}>
                                            {item.state}
                                            {item.state === "new" && (
                                                <span>
                                                    <Image height={20} width={20} src="/icons/Sparkle-r.png" alt="Sparkle icon" />
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                    <div className="border-t border-b w-full flex flex-col gap-2 py-2">
                                        <p className="w-full ">
                                            {item.message}
                                        </p>
                                        <div className="flex w-full justify-between">
                                            <div className="flex gap-4">
                                                <p className="uppercase font-semibold">
                                                    sw-30
                                                </p>
                                                <p>
                                                    Qty:
                                                    <span className=" ml-1 font-semibold">
                                                        {item.quantity}
                                                    </span>
                                                </p>
                                            </div>
                                            <p className="font-semibold">
                                                {item.price}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="flex gap-2 items-center">
                                            <Image height={20} width={20} src="/icons/Truck-r.svg" alt="Truck icon" />
                                            Delivery ({item.delivery})
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
}
