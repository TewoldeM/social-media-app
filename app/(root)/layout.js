import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import LeftSideBar from "@components/layout/LeftSideBar";
import MainContainer from "@components/layout/MainContainer";
import RightSideBar from "@components/layout/RightSideBar";
import BottomBar from "@components/layout/BottomBar";
import TopBar from   "@components/layout/TopBar";
import "../globals.css";

export const metadata = {
  title: "Auth",
  description: "Next 14 Social Media App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2 text-white`}>
          <main className="flex flex-row">
          <LeftSideBar />
          <MainContainer>
          {children}
          </MainContainer>
          <RightSideBar />
          </main>
    <BottomBar />
          </body>
      </html>
    </ClerkProvider>
  );
}