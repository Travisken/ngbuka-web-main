import { Inter } from "next/font/google";
import Image from "next/image";
// import SignUpImage from "../../../../public/images/dashboard-sign-up-image.png";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import Sidebar from "@/components/Dashboard/DashboardSideBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Ngbuka Web",
};

export default function DashboardLayout({ children }) {
    return (
        // <html lang="en">

<>
<section className="flex flex-col bg-secondary-10">
                    <div className="fixed z-50">

                    <DashboardNavbar />
                    </div>

                    <div className="flex relative gap-4 justify-end min-h-[100vh] flex-1 pt-[6rem] px-8">

                        <div className="pl-8 pt-4 fixed left-[3rem]">
                            <Sidebar />
                        </div>
                        <div className="flex w-full md:w-[68vw] pr-[4rem] pt-[1rem]">
                            {children}
                        </div>
                    </div>

                </section>
</>
            // {/* <body className={inter.className}> */}
                

            // {/* </body> */}
        // </html>
    );
}
