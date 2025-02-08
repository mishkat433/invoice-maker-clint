import { useState } from "react";
import { RiEyeLine, RiEyeOffLine, RiFacebookCircleLine, RiGithubLine, RiGoogleFill } from "react-icons/ri";
import { SubmitHandler, useForm } from "react-hook-form";
import DotLoading from "@/components/Loaders/DotLoading";

type Inputs = {
    password: string;
    email: string;
    firstName: string;
    lastName: string;
};

interface props {
    setSwitchAuth: any;
}


const Register = ({ setSwitchAuth }: props) => {
    const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>();
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [loginLoading, setLoginLoading] = useState<boolean>(false)

    const registerHandle: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(registerHandle)} >
            <div className={`card shadow-2xl bg-[#433f6182] text-black duration-300 border`}>
                <div className="card-body">
                    <h3 className="text-white-text font-bold text-center text-xl">Register</h3>
                    <div className="form-control">
                        <label className="label hidden md:block"><span className="label-text text-white-text">First Name</span> </label>
                        <div className=" ">
                            <input className={`bg-aide-gray  w-full py-2 md:py-2.5 px-3 rounded-md border-1 border-[#201d1d]  ${errors.firstName ? "focus:outline-error-color" : "focus:outline-aide-primary"}`}
                                type="text" placeholder="enter your email address"
                                {...register("firstName", { required: 'Please enter your name', })} />
                            {errors.firstName && (<p className="text-red-500 text-start text-xs mt-1">{errors?.firstName.message} </p>)}
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label hidden md:block"><span className="label-text text-white-text">Last Name</span> </label>
                        <div className=" ">
                            <input className={`bg-aide-gray  w-full py-2 md:py-2.5 px-3 rounded-md border-1 border-[#201d1d]  `}
                                type="text" placeholder="enter your email address"
                                {...register("lastName", { required: false, })} />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label hidden md:block"><span className="label-text text-white-text">Email</span> </label>
                        <div className=" ">
                            <input className={`bg-aide-gray  w-full py-2 md:py-2.5 px-3 rounded-md border-1 border-[#201d1d]  ${errors.email ? "focus:outline-error-color" : "focus:outline-aide-primary"}`}
                                type="email" placeholder="enter your email address"
                                {...register("email", { required: "Email is required", pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, })} />
                            {errors.email && (<p className="text-red-500 text-start text-xs mt-1">{errors?.email.message} </p>)}
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label  hidden md:block"> <span className="label-text text-white-text">Password</span></label>
                        <div className="my-2 relative">
                            <input className={`bg-aide-gray  w-full py-2 md:py-2.5 px-3 rounded-md border-1 border-[#d3d3d3]  ${errors.password ? "focus:outline-error-color" : "focus:outline-aide-primary"}`}
                                type={`${showPassword ? "text" : "password"}`} placeholder="Password "
                                {...register("password", {
                                    required: "Provide a strong password",
                                    minLength: { value: 6, message: "Password must be at least 6 characters or longer" },
                                    pattern: { value: /^(?=.*[A-Z][a-z])(?=.*)(?=.*[0-9])/, message: "password is not valid, please provide uppercase, lowercase, number.", }
                                })} />
                            {showPassword ? (<p className="absolute top-3.5 right-2 text-xl cursor-pointer text-icon-color" onClick={() => setShowPassword(!showPassword)}>     <RiEyeLine /> </p>)
                                :
                                (<p className="absolute top-3.5 right-2 text-xl cursor-pointer text-icon-color" onClick={() => setShowPassword(!showPassword)}> <RiEyeOffLine /> </p>)
                            }

                            {errors.password && (<p className="text-red-500 text-start text-xs mt-1"> {errors?.password.message} </p>)}
                        </div>
                    </div>
                    <div className="form-control  md:mt-2.5">
                        {loginLoading ?
                            <button className="py-1.5 rounded-md button-transition font-bold"><DotLoading size={'md'} /> </button> :
                            <button className="py-2 rounded-md button-transition font-bold">Sign-Up </button>
                        }
                    </div>
                    <div className="flex items-center pt-4 space-x-1 text-white-text">
                        <div className="w-full h-px dark:bg-gray-700 bg-white" ></div>
                        <p className="px-2.5 text-sm dark:text-gray-400">OR</p>
                        <div className="w-full h-px  dark:bg-gray-700 bg-white"></div>
                    </div>
                    <div className="flex justify-evenly text-white-text text-3xl">
                        <RiGoogleFill className="hover:text-purple-400 cursor-pointer duration-300" title="Google" />
                        <RiFacebookCircleLine className="hover:text-purple-400 cursor-pointer duration-300" title="Facebook" />
                        <RiGithubLine className="hover:text-purple-400 cursor-pointer duration-300" title="Github" />
                    </div>
                    <div className="text-white-text text-center mt-2.5">
                        <p className="text-sm">Have an account? <span onClick={() => setSwitchAuth(true)} className="hover:text-purple-400 duration-300 underline cursor-pointer text-center">Log-in</span></p>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;