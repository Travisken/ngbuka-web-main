"use client";

import { OverviewData } from "@/libs/constants";
import Image from "next/image";
import { useState, useEffect } from "react";
import https from "https";

export default function Settings() {
    const [storeData, setStoreData] = useState([]);
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

    const fetchstoreData = async (token) => {
        try {
            const httpsAgent = new https.Agent({
                rejectUnauthorized: false
            });

            const res = await fetch('https://api-ngbuka.olotusquare.co/api/v1/dealer/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                agent: httpsAgent // Use the custom https agent here
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
                console.log("API response data:", data.entity);

                setStoreData(data.entity || {});
            }
        } catch (error) {
            console.error('Error fetching overview data:', error);
        }
    };

    const refreshAccessToken = async () => {
        try {
            const res = await fetch('https://api-ngbuka.olotusquare.co/api/v1/auth/refresh-token', {
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
            fetchstoreData(newAccessToken);
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
            fetchstoreData(accessToken);
        }
    }, [accessToken]);

    return (
        <>
            <section className="w-full flex flex-col gap-8">
                <div className="bg-white rounded-lg flex px-4 w-full py-4 text-xl font-semibold">
                    Store info
                </div>

                <section className="flex flex-col gap-4 w-full">
                    <div className="flex justify-between items-center">
                        <p className="text-xl font-semibold">Overview</p>
                    </div>

                    <div className="flex gap-8 w-full md:overflow-visible overflow-scroll">
                        {OverviewData.map((item) => (
                            <div key={item.id} className="bg-white flex flex-col gap-4 rounded-lg min-w-[12rem] flex-1 p-4">
                                <p className="mx-auto capitalize font-medium">{item.title}</p>
                                <div className="flex items-center justify-center gap-2">
                                    <Image height={40} width={40} src={item.icon}></Image>
                                    <p className="text-xl font-semibold">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex w-full flex-col gap-20 userData">
                    <section className="flex flex-col rounded-lg bg-white w-full p-4 gap-4">
                        <div className="border rounded-md flex w-full flex-col items-start justify-center text-left p-2">
                            <p className="font-semibold text-xs">Store address</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, obcaecati.</p>
                        </div>
                        <div className="border rounded-md flex w-full flex-col items-start justify-center text-left p-2">
                            <p className="font-semibold text-xs">Store description</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, obcaecati. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, quia?</p>
                        </div>
                    </section>

                    <div className="flex flex-col gap-4">
                        <h2 className="font-semibold text-lg">Analytics</h2>
                        <section className="flex flex-row flex-wrap rounded-lg bg-white w-full p-4 gap-4">
                            
                            <div className="border rounded-md flex w-[46%] flex-col items-start justify-center text-left p-2">
                                <p className="font-semibold text-xs">Store name</p>
                                <p>
                                    {storeData.businessName}
                                </p>
                            </div>
                            <div className="border rounded-md flex w-[46%] min-h-fit flex-col items-start justify-center text-left p-2">
                                <p className="font-semibold text-xs">Store number</p>
                                <p>+{storeData.phoneNumber}</p>
                            </div>
                            <div className="border rounded-md flex  w-[46%] min-h-fit flex-col items-start justify-center text-left p-2">
                                <p className="font-semibold text-xs">Store email</p>
                                <p>{storeData.email}</p>
                            </div>
                            <div className="border rounded-md flex w-[46%] min-h-fit flex-col items-start text-left p-2">
                                <p className="font-semibold text-xs">Store address</p>
                                <p>{storeData.address}</p>
                            </div>
                            <div className="border rounded-md flex  w-[46%] min-h-fit flex-col items-start text-left p-2">
                                <p className="font-semibold text-xs">Store description</p>
                                <p>
                                    {storeData.about}
                                </p>
                            </div>
                        </section>
                    </div>
                </section>
            </section>
        </>
    );
}
