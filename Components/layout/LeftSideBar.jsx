import React from 'react'
import { UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { Logout } from '@mui/icons-material';
const LeftSideBar = () => {
  return (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10  flex flex-col gap-6 max-md:hidden 2xl:w-[350px] pr-20 custom-scrollbar">
    <Link href="/">
     <p className="text-light-1 items-center py-2 px-8 text-lg">Africano Media</p>
    </Link>
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 items-center text-light-1">
      <Link href="/">
        <Image src="/assets/Andrew.jpg" alt="logo" width={60} height={60} className="rounded-full"/>
      </Link>
      <p className="text-small-bold">Tewolde Marie</p>
      </div>

      <div className="flex text-light-1 justify-between">
        <div className="flex flex-col items-center">
         <p className="text-base-bold">1</p>
          <p className="text-tiny-medium">Posts</p>
        </div>
        <div className="flex flex-col items-center">
        <p className="text-base-bold">1</p>
          <p className="text-tiny-medium">Followers</p>
        </div>
        <div className="flex flex-col items-center">
        <p className="text-base-bold">1</p>
          <p className="text-tiny-medium">Following</p>
        </div>
      </div>
    </div>

    <hr />

    <Menu />

    <hr />

    <div className="flex gap-4 items-center">
      <UserButton appearance={{ baseTheme: dark }} afterSignOutUrl="/sign-in"/>
      <p className="text-light-1 text-body-bold">Manage Account</p>
      <signedIn>
        <signOutButton>
          <div className="flex flex-col cursor-pointer gap-2 items-center">
          <Logout sx={{color:"white",fontSize:"32px"}} />
          <p className="text-body-bold text-light-1">Log Out</p>
          </div>
        </signOutButton>
      </signedIn>
    </div>
</div>
  )
}

export default LeftSideBar
