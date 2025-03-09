import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { RiAddCircleLine, RiCloseCircleLine } from 'react-icons/ri';

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
    const { register, handleSubmit, control, formState: { errors } } = useForm<Inputs>({
        defaultValues: { items: [{ productName: '', quantity: 1, unitePrice: 0 }], },
    });

    const { fields, append, remove } = useFieldArray({ control, name: 'items', });

    const invSubmitHandler: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    console.log(fields);

    return (
        <div className="relative">
            <form className="" onSubmit={handleSubmit(invSubmitHandler)}>
                {/* Customer Details */}
                <div className="grid grid-cols-2 items-start">
                    <div className="w-2/3 space-y-2 p-4">
                        <div className="grid grid-cols-8 items-center">
                            <p className="font-bold col-span-3">Invoice to:</p>
                            <input
                                type="text"
                                className={`bg-slate-100 outline-none col-span-5 p-1 ${errors.customerName ? 'border focus:border-error-color' : 'focus:bg-slate-100'}`}
                                placeholder="Customer Name"
                                {...register('customerName', { required: 'Customer Name is required' })}
                            />
                            {errors.customerName && <p className="text-red-500 text-xs mt-1">{errors.customerName.message}</p>}
                        </div>

                        <div className="grid grid-cols-8 items-center">
                            <p className="font-bold col-span-3 ">Address:</p>
                            <input
                                type="text"
                                className={`bg-slate-100 outline-none col-span-5 p-1 text-align: right ${errors.address ? 'border focus:border-error-color' : 'focus:bg-slate-100'}`}
                                placeholder="Customer address"
                                {...register('address', { required: 'Address is required' })}
                            />
                            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                        </div>
                    </div>
                </div>

                {/* Invoice Table */}
                <div className="overflow-x-auto m-1 rounded-sm p-1">
                    <table className="w-full border-collapse border border-gray-400">
                        <thead>
                            <tr className="font-bold text-black">
                                <th className="border border-gray-500 w-16">SL. No</th>
                                <th className="border border-gray-500 text-center">Description</th>
                                <th className="border border-gray-500 text-center w-20">Quantity</th>
                                <th className="border border-gray-500 text-center w-20">Unit Price</th>
                                <th className="border border-gray-500 text-center w-28">Total</th>
                                <th className="border border-gray-500 text-center w-14">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fields.map((field, index) => (
                                <tr key={field.id}>
                                    <th className="border border-gray-400 text-center">{index + 1}</th>
                                    <td className="border border-gray-400">
                                        <input
                                            type="text"
                                            className="bg-slate-100 outline-none w-full p-1 h-10"
                                            placeholder="Product Name..."
                                            {...register(`items.${index}.productName`, { required: 'Product Name is required' })}
                                        />
                                    </td>
                                    <td className="border border-gray-400">
                                        <input
                                            type="number"
                                            className="bg-slate-100 outline-none w-full p-1 h-10"
                                            placeholder="Qty"
                                            {...register(`items.${index}.quantity`, { required: 'Quantity is required', valueAsNumber: true })}
                                        />
                                    </td>
                                    <td className="border border-gray-400">
                                        <input
                                            type="number"
                                            className="bg-slate-100 outline-none w-full p-1 h-10"
                                            placeholder="Unit Price"
                                            {...register(`items.${index}.unitePrice`, { required: 'Unit Price is required', valueAsNumber: true })}
                                        />
                                    </td>
                                    <td className="border border-gray-400 text-center">
                                        <p className="p-1">{(field.quantity || 0) * (field.unitePrice || 0)}</p>
                                    </td>
                                    <td className="border border-gray-400 flex gap-2 bg-teal-50 h-full">
                                        <RiCloseCircleLine
                                            className="text-2xl text-red-500 hover:text-red-700 cursor-pointer"
                                            title="Delete Row"
                                            onClick={() => remove(index)}
                                        />
                                        <RiAddCircleLine
                                            className="text-2xl text-teal-800 hover:text-teal-600 cursor-pointer"
                                            title="Add Row"
                                            onClick={() => append({ productName: '', quantity: 1, unitePrice: 0 })}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Submit Button */}
                <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateInvoiceForm;