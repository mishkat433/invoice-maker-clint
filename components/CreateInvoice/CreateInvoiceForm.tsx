import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { RiAddCircleLine, RiCloseCircleLine } from 'react-icons/ri';
import InvoiceTable from './InvoiceTable';

type Inputs = {
    customerName: string;
    address: string;
    cusPhone: string;
    remarks: string;
    authorName: string;
    saleDate: string;
    storeLocation: string;
    items: { productName: string; quantity: number; unitePrice: number }[];
};


const CreateInvoiceForm = () => {
    const { register, handleSubmit, control, watch, formState: { errors } } = useForm<Inputs>({ defaultValues: { items: [{ productName: '', quantity: 1, unitePrice: 0 }] }, });

    const { fields, append, remove } = useFieldArray({ control, name: 'items' });

    const watchItems = watch('items', []);

    const invSubmitHandler: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    return (
        <div className="relative">
            <form onSubmit={handleSubmit(invSubmitHandler)}>
                {/* Customer Details */}
                <div className="grid grid-cols-2 items-start">
                    <div className="w-2/3 space-y-2 p-4">
                        <div className='grid grid-cols-8  items-center  justify-start'>
                            <p className='font-bold col-span-3'>Invoice to :- </p>
                            <input type="text" className={` bg-slate-100 outline-none col-span-5 p-1 ${errors.customerName ? "border focus:border-error-color" : "focus:bg-slate-100"}`}
                                placeholder='Customer Name'
                                {...register("customerName",
                                    { required: "Customer Name is required", pattern: /^[^\s]/, }
                                )} />
                        </div>
                        {errors.customerName && (<p className="text-red-500 text-xs mt-1 text-right ">{errors?.customerName.message} </p>)}
                        <div className='grid grid-cols-8  items-center  justify-start'>
                            <p className='font-bold col-span-3'>Address :- </p>
                            <input type="text" className={` bg-slate-100 outline-none col-span-5 p-1 ${errors.address ? "border focus:border-error-color" : "focus:bg-slate-100"}`}
                                placeholder='Customer address'
                                {...register("address",
                                    { required: "Address is required" }
                                )} />
                        </div>
                        {errors.address && (<p className="text-red-500 text-xs mt-1 text-right">{errors?.address.message} </p>)}
                        <div className='grid grid-cols-8  items-center  justify-start'>
                            <p className='font-bold col-span-3'>Phone Number :- </p>
                            <input type="number" className={` bg-slate-100 outline-none col-span-5 arrow-none p-1  ${errors.cusPhone ? "border focus:border-error-color" : "focus:bg-slate-100"}`}
                                placeholder='Customer phone number'
                                {...register("cusPhone",

                                )} />
                        </div>
                        {/* {errors.cusPhone && (<p className="text-red-500 text-right text-xs mt-1">{errors?.cusPhone.message} </p>)} */}
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
                            </div>
                            {errors.customerName && (<p className="text-red-500 text-right text-xs mt-1">{errors?.customerName.message} </p>)}

                            <div className='grid grid-cols-8  items-center  justify-start'>
                                <p className='font-bold col-span-3'>Sale Date :- </p>
                                <input type="date" className={` bg-slate-100 outline-none col-span-5 p-1 ${errors.saleDate ? "border focus:border-error-color" : "focus:bg-slate-100"}`}
                                    {...register("saleDate",
                                        { required: "Date is required", }
                                    )} />
                            </div>
                            {errors.saleDate && (<p className="text-red-500 text-right text-xs mt-1">{errors?.saleDate.message} </p>)}

                            <div className='grid grid-cols-8  items-center  justify-start'>
                                <p className='font-bold col-span-3'>Store Location :- </p>
                                <input type="text" className={` bg-slate-100 outline-none col-span-5 p-1  ${errors.storeLocation ? "border focus:border-error-color" : "focus:bg-slate-100"}`}
                                    placeholder='store Location'
                                    {...register("storeLocation",
                                        { required: "location is required", }
                                    )} />
                            </div>
                            {errors.storeLocation && (<p className="text-red-500 text-right text-xs mt-1">{errors?.storeLocation.message} </p>)}
                            <div className="grid grid-cols-8 items-center">
                                <p className="font-bold col-span-3 ">Address:</p>
                                <input
                                    type="text"
                                    className={`bg-slate-100 outline-none col-span-5 p-1 text-align: right ${errors.address ? 'border focus:border-error-color' : 'focus:bg-slate-100'}`}
                                    placeholder="Customer address"
                                    {...register('address', { required: 'Address is required' })}
                                />
                            </div>
                            {errors.address && <p className="text-red-500 text-right text-xs mt-1">{errors.address.message}</p>}
                        </div>
                    </div>

                </div>

                {/* Invoice Table */}
                <InvoiceTable fields={fields} append={append} remove={remove} watchItems={watchItems} register={register} />

                {/* Submit Button */}
                <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateInvoiceForm;
