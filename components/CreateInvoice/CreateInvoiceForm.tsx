import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import InvoiceTable from './InvoiceTable';

type Inputs = {
    address: string
    customerName: string
    cusPhone: string
    remarks: string
    authorName: string
    saleDate: string
    storeLocation: string
};

const CreateInvoiceForm = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>();

    const invSubmitHandler: SubmitHandler<Inputs> = (data) => {
        console.log(data);

    };

    return (
        <div>
            <form onSubmit={handleSubmit(invSubmitHandler)}>
                <div className=" grid grid-cols-2 items-start">
                    <div className="w-2/3 space-y-2 p-4">
                        <div className='grid grid-cols-8  items-center  justify-start'>
                            <p className='font-bold col-span-3'>Invoice to :- </p>
                            <input type="text" className={` bg-slate-100 outline-none col-span-5 p-1 ${errors.customerName ? "border focus:border-error-color" : "focus:bg-slate-100"}`}
                                placeholder='Customer Name'
                                {...register("customerName",
                                    { required: "Customer Name is required", pattern: /^[^\s]/, }
                                )} />
                            {errors.customerName && (<p className="text-red-500 text-start text-xs mt-1 ">{errors?.customerName.message} </p>)}
                        </div>

                        <div className='grid grid-cols-8  items-center  justify-start'>
                            <p className='font-bold col-span-3'>Address :- </p>
                            <input type="text" className={` bg-slate-100 outline-none col-span-5 p-1 ${errors.address ? "border focus:border-error-color" : "focus:bg-slate-100"}`}
                                placeholder='Customer address'
                                {...register("address",
                                    { required: "Address is required", }
                                )} />
                            {errors.address && (<p className="text-red-500 text-start text-xs mt-1">{errors?.address.message} </p>)}
                        </div>

                        <div className='grid grid-cols-8  items-center  justify-start'>
                            <p className='font-bold col-span-3'>Phone Number :- </p>
                            <input type="number" className={` bg-slate-100 outline-none col-span-5 p-1  ${errors.cusPhone ? "border focus:border-error-color" : "focus:bg-slate-100"}`}
                                placeholder='Customer phone number'
                                {...register("cusPhone",
                                    { required: "Phone Number is required", pattern: /^[1-9]\d{2}\s\d{3}\s\d{4}/ }
                                )} />
                            {errors.cusPhone && (<p className="text-red-500 text-start text-xs mt-1">{errors?.cusPhone.message} </p>)}
                        </div>
                        <div className='grid grid-cols-8  items-center  justify-start'>
                            <p className='font-bold col-span-3'>Remarks :- </p>
                            <textarea className={` bg-slate-100 outline-none col-span-5 p-1 resize-none `} placeholder='Remarks' {...register("remarks",)} />
                            {errors.remarks && (<p className="text-red-500 text-start text-xs mt-1">{errors?.remarks.message} </p>)}
                        </div>
                    </div>
                    <div className="w-full space-y-2 ">
                        <div className="w-2/3 space-y-2 p-4">
                            <div className='grid grid-cols-8  items-center  justify-start'>
                                <p className='font-bold col-span-3'>Sale By :- </p>
                                <input type="text" className={` bg-slate-100 outline-none col-span-5 p-1 ${errors.customerName ? "border focus:border-error-color" : "focus:bg-slate-100"}`}
                                    placeholder='Author Name'
                                    {...register("authorName",
                                        { required: "Customer Name is required", pattern: /^[^\s]/, }
                                    )} />
                                {errors.customerName && (<p className="text-red-500 text-start text-xs mt-1">{errors?.customerName.message} </p>)}
                            </div>

                            <div className='grid grid-cols-8  items-center  justify-start'>
                                <p className='font-bold col-span-3'>Sale Date :- </p>
                                <input type="date" className={` bg-slate-100 outline-none col-span-5 p-1 ${errors.saleDate ? "border focus:border-error-color" : "focus:bg-slate-100"}`}
                                    {...register("saleDate",
                                        { required: "Date is required", }
                                    )} />
                                {errors.saleDate && (<p className="text-red-500 text-start text-xs mt-1">{errors?.saleDate.message} </p>)}
                            </div>

                            <div className='grid grid-cols-8  items-center  justify-start'>
                                <p className='font-bold col-span-3'>Store Location :- </p>
                                <input type="number" className={` bg-slate-100 outline-none col-span-5 p-1  ${errors.storeLocation ? "border focus:border-error-color" : "focus:bg-slate-100"}`}
                                    placeholder='Customer phone number'
                                    {...register("storeLocation",
                                        { required: "Phone Number is required", pattern: /^[1-9]\d{2}\s\d{3}\s\d{4}/ }
                                    )} />
                                {errors.storeLocation && (<p className="text-red-500 text-start text-xs mt-1">{errors?.storeLocation.message} </p>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <InvoiceTable />
                </div>
                <button>submit</button>
            </form >
            <button>Create New Row</button>
        </div >
    );
};

export default CreateInvoiceForm;