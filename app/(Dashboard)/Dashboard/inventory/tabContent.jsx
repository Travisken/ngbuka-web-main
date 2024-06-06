"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../../../../styles/globals.css";
import https from "https";

export default function TabContent1() {
    const [orderListData, setOrderListData] = useState([]);
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);

    const fetchUserToken = async () => {
        try {
            const storedData = localStorage.getItem('userData');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                const accessToken = parsedData.entity?.token;
                const refreshToken = parsedData.entity?.refreshToken;
                console.log("Fetched access token:", accessToken);
                console.log("Fetched refresh token:", refreshToken);
                setAccessToken(accessToken);
                setRefreshToken(refreshToken);
            }
        } catch (error) {
            console.error('Error fetching user token:', error);
        }
    };

    const fetchInventoryData = async (token) => {
        try {
            const httpsAgent = new https.Agent({
                rejectUnauthorized: false
            });

            const res = await fetch('https://api-ngbuka.olotusquare.co/api/v1/dealer/spare-parts?page=1&limit=15&inventory=all', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                agent: httpsAgent
            });

            if (!res.ok) {
                // If the access token has expired, try to refresh it
                if (res.status === 401) {
                    await refreshAccessToken();
                } else {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
            } else {
                const data = await res.json();
                console.log(`HTTP status: ${res.status}`);
                setOrderListData(data.entity.rows);
                console.log(data);
            }
        } catch (error) {
            console.error('Error fetching inventory data:', error);
        }
    };

    const refreshAccessToken = async () => {
        try {
            const res = await fetch('https://api-ngbuka.olotusquare.co/api/v1/auth/refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${refreshToken}`
                },
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            const newAccessToken = data.accessToken;
            const newRefreshToken = data.refreshToken;

            // Update tokens
            setAccessToken(newAccessToken);
            setRefreshToken(newRefreshToken);

            // Store the new tokens in localStorage
            const storedData = localStorage.getItem('userData');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                parsedData.entity.token = newAccessToken;
                parsedData.entity.refreshToken = newRefreshToken;
                localStorage.setItem('userData', JSON.stringify(parsedData));
            }

            // Retry the original request with the new access token
            fetchInventoryData(newAccessToken);
        } catch (error) {
            console.error('Error refreshing access token:', error);
        }
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value);
    };

    useEffect(() => {
        const initialize = async () => {
            await fetchUserToken();
        };
        initialize();
    }, []);

    useEffect(() => {
        if (accessToken) {
            fetchInventoryData(accessToken);
        }
    }, [accessToken]);

    return (
        <div className="w-[70vw] flex gap-8 mx-auto flex-wrap">
            {orderListData.length === 0 ? (
                <div className="flex flex-col gap-6 items-center justify-center w-full min-h-[60vh] bg-white rounded-xl">
                    <Image height={120} width={120} src="/images/Frame.png" className="rounded-full" alt="No orders image" />
                    <p className="md:max-w-[56%] text-center">
                        You have no orders yet. Add products to your store to get started.
                    </p>
                    <button className="flex items-center py-2 px-2 border-2 rounded-full border-secondary-400 text-secondary-400 w-[9rem] gap-2">
                        Add product
                        <Image height={20} width={20} src="/images/Button icons.svg" alt="Add product icon" />
                    </button>
                </div>
            ) : (
                orderListData?.map((item) => (
                    <div key={item.id} className="">
                        <div className="flex w-[12rem] text-sm flex-col gap-4 p-3 min-h-[8rem] bg-white rounded-xl">
                            <Image className="rounded-xl w-full" height={60} width={150} src={item.img || '/images/default.png'} alt={item.name} />
                            <div className="flex flex-col flex-1">
                                <div className="border-t ellipse-container w-full flex flex-col gap-2 py-2">
                                    <p className="w-full ellipse">
                                        {item.name}
                                    </p>
                                    <div className="flex w-full justify-between text-[12px]">
                                        <div className="flex gap-4">
                                            <p>
                                                Type:
                                                <span className="uppercase font-semibold">
                                                    {item.type || "sw-30"}
                                                </span>
                                            </p>
                                        </div>
                                        <p>
                                            Stock ID:
                                            <span className="font-semibold">
                                                {item.stockId}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex w-full justify-between text-[12px]">
                                        <p className="font-semibold">
                                            {formatCurrency(item.price)}
                                        </p>
                                        <p>
                                            <span className={`${item.quantity <= 4 ? "text-danger font-semibold mr-2" : "text-green-400 font-semibold mr-2"}`}>
                                                {item.quantityInStock}
                                            </span>
                                            in stock
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <Link href={`/Dashboard/inventory/cardDetails?id=${item.id}`} className="flex rounded-full py-2 items-center justify-center bg-secondary-500 text-white">
                                        View details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
