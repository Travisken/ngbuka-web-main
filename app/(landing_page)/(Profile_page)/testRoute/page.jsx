import React from 'react'
import https from 'https';
import { apiWithOutAuth } from '@/services/httpServices';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


async function fetchProfileData() {
    try {
    //   setIsLoadingData(true);
      const res = await apiWithOutAuth.get("/server-health");
      if (res) {
        // setIsLoadingData(false);
        // setProfile(res.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    //   setIsLoadingData(false);
    } finally {
    //   setIsLoadingData(false);
    }
  };
const testPage = async () => {
    const data = await fetchProfileData()

    console.log(data, 'data');
  return (
    <div>testPage</div>
  )
}

export default testPage