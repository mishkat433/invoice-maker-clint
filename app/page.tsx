"use client";
import Link from "next/link";
import { useState } from 'react'

import "./main.css"
import { RiArrowLeftUpLine } from "react-icons/ri";
import Register from "@/components/authentication/register/Register";
import Login from "@/components/authentication/Login/Login";



const Starter = () => {
    const [switchAuth, setSwitchAuth] = useState(true)
    return (
        <div className="bg-starter-bg bg-center bg-no-repeat bg-cover bg-fixed overflow-y-auto text-white-text font-mulish ">
            {/* <div className=" wrapper">
                <div className="circle-div"><span className="dot"></span></div>
                <div className="circle-div"><span className="dot"></span></div>
                <div className="circle-div"><span className="dot"></span></div>
                <div className="circle-div"><span className="dot"></span></div>
                <div className="circle-div"><span className="dot"></span></div>
                <div className="circle-div"><span className="dot"></span></div>
                <div className="circle-div"><span className="dot"></span></div>
                <div className="circle-div"><span className="dot"></span></div>
                <div className="circle-div"><span className="dot"></span></div>
                <div className="circle-div"><span className="dot"></span></div>
                <div className="circle-div"><span className="dot"></span></div>
                <div className="circle-div"><span className="dot"></span></div>
                <div className="circle-div"><span className="dot"></span></div>
                <div className="circle-div"><span className="dot"></span></div>
                <div className="circle-div"><span className="dot"></span></div>
            </div> */}
            <div className=" flex flex-col lg:flex-row justify-evenly md:justify-between items-center h-[100vh] container mx-auto gap-4 md:gap-32 z-10 p-2.5 lg:p-0">
                <div className="w-full lg:w-3/5 text-center space-y-5 md:pt-5">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold leading-tight">Welcome to <br /> &quot;invoice maker&quot;</h1>
                    <p className=" text-xs md:text-sm  ">Trusted by millions of people and make unlimited number of invoices. Invoice Maker lets you instantly make invoices with our attractive invoice template straight from your web browser. The invoices you make can be print  or downloaded as a PDF.</p>

                    <div className="md:flex justify-center items-center hidden  ">
                        {switchAuth ?
                            <button onClick={() => setSwitchAuth(false)} className="primary-purple-button  py-1.5 px-6 flex items-center gap-2.5">Sign-Up <RiArrowLeftUpLine className="rotate-90 text-xl" /></button> :
                            <button onClick={() => setSwitchAuth(true)} className="primary-purple-button  py-1.5 px-6 flex items-center gap-2.5">login <RiArrowLeftUpLine className="rotate-90 text-xl" /></button>
                        }
                    </div>
                </div>
                <div className=" w-full  lg:w-2/5 md:pb-5 ">
                    {switchAuth ?
                        <Login setSwitchAuth={setSwitchAuth} />
                        :
                        <Register setSwitchAuth={setSwitchAuth} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Starter;