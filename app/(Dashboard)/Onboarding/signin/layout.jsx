import { Inter } from "next/font/google";
import Image from "next/image";
import SignInImage from "../../../../public/images/dashboard-sign-in-image.png"

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
                            <Image height={664} width={650} className="h-[100svh] object-cover" src={SignInImage}></Image>

                            <div className="absolute right-[4rem] bottom-12 w-[80%] h-[30vh] z-10 rounded-xl backdrop-blur-md p-8 flex gap-4 flex-col text-white">
                                <h1 className="font-semibold text-4xl">
                                    Welcome back
                                </h1>
                                <p>
                                    Your customers are waiting for you
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
