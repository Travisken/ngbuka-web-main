import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Ngbuka Web",
};

export default function DashboardLayout({ children }) {
    return (
        <html lang="en">


            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
