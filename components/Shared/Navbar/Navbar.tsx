"use client"

import Link from "next/link";
import { RiCloseFill, RiMenu2Fill } from "react-icons/ri";
import { useState } from 'react';
import "./Navbar.css"
import Image from "next/image";
import logo from "../../../public/Asset 1-8.png"

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false)

    const menuItems =
        <>
            <li className="nav-link-style  ">  <Link href={"/"} className="hover-underline-animation">Home</Link></li>
            <li className="nav-link-style  ">  <Link href={"/"} className="hover-underline-animation">Invoice History</Link></li>
            <li className="nav-link-style  ">  <Link href={"/"} className="hover-underline-animation">Settings</Link></li>
            <li className="nav-link-style"> <button className=" button-transition primary-red-button py-1 px-2.5 w-full">Login</button> </li>
        </>

    return (
        <header className="font-mulish bg-[#ffffff] shadow-md " >
            <div className="container flex justify-between items-center w-11/12 mx-auto py-2">

                {/* <Logo donate={'text-primary-red'} box={'text-primary-text'} /> */}
                <Image src={logo} alt="kings logo" height={80} width={80} />


                <ul className="items-center hidden space-x-4 md:flex">
                    {menuItems}
                </ul>

                <button className="flex justify-end items-center p-4 md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>

                    <label htmlFor="my-drawer-4" className="">
                        {mobileMenu ?
                            <RiCloseFill className="text-3xl" /> :
                            <RiMenu2Fill className="text-3xl" />
                        }
                    </label>
                </button>
            </div>


            {/* responsive munu  */}
            <div className="drawer drawer-end absolute block md:hidden">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" onClick={() => setMobileMenu(!mobileMenu)} className="drawer-overlay"></label>
                    <ul className="space-y-3 p-4 w-52 h-full text-center  bg-base-200 ">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
