'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";



 const useAuthUser = () => {
    const [user, setUser] = useState(true);
    const router = useRouter();
   
    useEffect(() => {
        if (!user) {
            router.push("/");
            setUser(false);
        }
      }, [user, router]);
    
    return [user, setUser];
}

export default useAuthUser;
