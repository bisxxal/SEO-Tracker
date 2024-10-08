import { Inter } from "next/font/google";
import "./globals.css";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";  
import Header from "./Header";
import LoginPage from "@/components/LoginPage";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "SEO WebScraper",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  // console.log("session", session)
  return (
    <html lang="en">
      <body className={inter.className}>
      {!session && (
        <div className=" h-screen w-full">
          <LoginPage />
        </div>
        )}
        {session && (
          <div className=" mx-auto">
            <Header session={session} />
            {children}
          </div>
        )}
       </body>
    </html>
  );
}
