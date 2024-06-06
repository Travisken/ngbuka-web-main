"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function DashboardOverview() {
    const [overviewData, setOverviewData] = useState([]);
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
        return null;
    };

    useEffect(() => {
        const initialize = async () => {
            const token = await fetchUserToken();
            if (token) {
                setToken(token);
            }
        };
        initialize();
    }, []);

    useEffect(() => {
        if (token) {
            const apiUrl = 'https://api-ngbuka.olotusquare.co/api/v1/dealer/dashboard';
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
                    if (data?.entity?.rows) {
                        setOverviewData(data.entity.rows);
                        console.log(data.entity.rows);
                    } else {
                        console.error('Unexpected API response structure:', data);
                    }
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                    setIsLoading(false);
                });
        }
    }, [token]);

    return (
        <section className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">Overview</p>
            </div>
            <div className="flex gap-8 w-full md:overflow-visible overflow-scroll">
                {isLoading ? (
                    <p className="text-center w-full">Loading...</p>
                ) : (
                    overviewData.length > 0 ? (
                        overviewData.map((item) => (
                            <div key={item.id} className="bg-white flex flex-col gap-4 rounded-lg min-w-[12rem] flex-1 p-4">
                                <p className="mx-auto capitalize font-medium">{item.title}</p>
                                <div className="flex items-center justify-center gap-2">
                                    <Image height={40} width={40} src={item.icon || '/images/default-icon.png'} alt={item.title} />
                                    <p className="text-xl font-semibold">{item.value}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center w-full">No data available</p>
                    )
                )}
            </div>
        </section>
    );
}
