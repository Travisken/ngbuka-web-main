import { Inter } from "next/font/google";
import Image from "next/image";
import SignUpImage from "../../../../public/images/dashboard-sign-up-image.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Ngbuka Web",
};

export default function DashboardLayout({ children }) {
    return (
        <html lang="en">


            <body className={inter.className}>
                <section className="flex h-[100vh]">
                    <div className="flex">
                        <div className="h-[100%] relative">
                            <Image height={664} width={700} className="h-[100svh] object-cover" src={SignUpImage}></Image>

                            <div className="absolute right-[4rem] bottom-12 w-[80%] h-[30vh] z-10 rounded-xl backdrop-blur-md p-8 flex gap-4 flex-col text-white">
                                <h1 className="font-semibold text-4xl">
                                Expand your reach and serve more customers
                                </h1>
                                <p>
                                Set up a store on Ngbuka to showcase your inventory, reach more customers and grow your business
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="h-full flex-1 flex">
                        {children}
                    </div>

                </section>

            </body>
        </html>
    );
}
