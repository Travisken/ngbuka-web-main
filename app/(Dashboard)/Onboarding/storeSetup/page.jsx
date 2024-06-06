"use client";

import React, { useState, useEffect } from "react";
import { GoPerson } from "react-icons/go";
import axios from 'axios';

export default function StoreSetup() {
    const [businessName, setBusinessName] = useState("");
    const [about, setAbout] = useState("");
    const [cacNumber, setCacNumber] = useState("");
    const [town, setTown] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    // const [accessToken, setAccessToken] = useState(null);
    // const [refreshToken, setRefreshToken] = useState(null);
    const [errors, setErrors] = useState({});

    const fetchUserToken = async () => {
        try {
          const storedData = localStorage.getItem('userData');
          if (storedData) {
            const parsedData = JSON.parse(storedData);
            const token = parsedData.entity?.token;
            const refreshToken = parsedData.entity?.refreshToken;
            console.log("Fetched token:", token);
            console.log("Fetched refresh token:", refreshToken);
    
            return { token, refreshToken };
          }
        } catch (error) {
          console.error('Error fetching user token:', error);
        }
      };
    
      const refreshToken = async (refreshToken) => {
        try {
          const response = await fetch('https://api-ngbuka.olotusquare.co/api/v1/auth/refresh-token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refreshToken })
          });
    
          if (!response.ok) {
            throw new Error('Failed to refresh token');
          }
    
          const data = await response.json();
          const newToken = data.token;
          const newRefreshToken = data.refreshToken;
    
          // Update local storage with new tokens
          const storedData = JSON.parse(localStorage.getItem('userData'));
          storedData.entity.token = newToken;
          storedData.entity.refreshToken = newRefreshToken;
          localStorage.setItem('userData', JSON.stringify(storedData));
    
          return { token: newToken, refreshToken: newRefreshToken };
        } catch (error) {
          console.error('Error refreshing token:', error);
          return null;
        }
      };
    

    const validate = () => {
        let tempErrors = {};
        if (!businessName) tempErrors.businessName = "Business name is required.";
        if (!about) tempErrors.about = "Store description is required.";
        if (!cacNumber) tempErrors.cacNumber = "CAC number is required.";
        if (!town) tempErrors.town = "Store town is required.";
        if (!city) tempErrors.city = "Store city is required.";
        if (!state) tempErrors.state = "Store state is required.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const res = await axios.put('https://api-ngbuka.olotusquare.co/api/v1/dealer/store-profile', {
                    businessName,
                    about,
                    cacNumber,
                    town,
                    city,
                    state
                }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log('Success:', res.data);
                alert("store successfully setup")
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    await refreshToken();
                    await handleSubmit(e); // Retry after refreshing token
                } else {
                    // console.error('Error:', error);
                }
            }
        }
    };

    return (
        <div>
            <p>Enter your business information for your store</p>
            <form className="flex flex-col gap-8 pt-8" onSubmit={handleSubmit}>
                <div className="gap-2 relative py-2 px-2 flex items-center border rounded-2xl">
                    <GoPerson />
                    <input
                        type="text"
                        className="bg-none border-none outline-none flex flex-1"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                    />
                    <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
                        Business name
                    </label>
                    {errors.businessName && <p className="text-red-500 text-xs">{errors.businessName}</p>}
                </div>
                <div className="gap-2 relative items-center py-2 px-2 flex border rounded-2xl">
                    <GoPerson />
                    <input
                        type="text"
                        className="bg-none border-none outline-none flex flex-1"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                    />
                    <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
                        Store description
                    </label>
                    {errors.about && <p className="text-red-500 text-xs">{errors.about}</p>}
                </div>
                <div className="gap-2 relative py-2 px-2 flex border rounded-2xl">
                    <input
                        type="number"
                        className="bg-none border-none outline-none flex flex-1"
                        value={cacNumber}
                        onChange={(e) => setCacNumber(e.target.value)}
                    />
                    <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
                        CAC number
                    </label>
                    {errors.cacNumber && <p className="text-red-500 text-xs">{errors.cacNumber}</p>}
                </div>
                <div className="gap-2 relative items-center py-2 px-2 flex border rounded-2xl">
                    <GoPerson />
                    <input
                        type="text"
                        className="bg-none border-none outline-none flex flex-1"
                        value={town}
                        onChange={(e) => setTown(e.target.value)}
                    />
                    <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
                        Store town
                    </label>
                    {errors.town && <p className="text-red-500 text-xs">{errors.town}</p>}
                </div>
                <div className="gap-2 relative items-center py-2 px-2 flex border rounded-2xl">
                    <GoPerson />
                    <input
                        type="text"
                        className="bg-none border-none outline-none flex flex-1"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
                        Store city
                    </label>
                    {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
                </div>
                <div className="gap-2 relative items-center py-2 px-2 flex border rounded-2xl">
                    <GoPerson />
                    <input
                        type="text"
                        className="bg-none border-none outline-none flex flex-1"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                    <label htmlFor="input" className="absolute top-[-1.5rem] left-[0.4rem]">
                        Store state
                    </label>
                    {errors.state && <p className="text-red-500 text-xs">{errors.state}</p>}
                </div>
                <button type="submit" className="bg-secondary-500 text-white py-2 px-4 rounded-2xl">Submit</button>
            </form>
        </div>
    );
}
