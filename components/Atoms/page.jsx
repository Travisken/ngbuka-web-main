'use client';

import Sidebar from "@/components/Molecules/Sidebar";
import { menuList } from "@/libs/constants";


const Wallet = () => {
console.log('list', menuList);
  return (
    <div><Sidebar menulist={menuList}/></div>
  )
}

export default Wallet