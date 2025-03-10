import { RiAddCircleLine, RiCloseCircleLine } from "react-icons/ri";



const InvoiceTable = ({ fields, register, append, remove, watchItems }: any) => {

    return (
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

                    {fields.map((field: any, index: number) => (
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
                                    className="bg-slate-100 outline-none w-full p-1 h-10 text-center"
                                    placeholder="Qty"
                                    {...register(`items.${index}.quantity`, { required: 'Quantity is required', valueAsNumber: true })}
                                />
                            </td>
                            <td className="border border-gray-400">
                                <input
                                    type="number"
                                    className="bg-slate-100 outline-none w-full p-1 h-10 text-center"
                                    placeholder="Unit Price"
                                    {...register(`items.${index}.unitePrice`, { required: 'Unit Price is required', valueAsNumber: true })}
                                />
                            </td>
                            <td className="border border-gray-400 text-center">
                                <p className="p-1">{watchItems[index]?.quantity * watchItems[index]?.unitePrice || 0}</p>
                            </td>
                            <td className="border border-gray-400 flex gap-2 bg-teal-50 p-2">
                                <RiCloseCircleLine
                                    className={`text-2xl   cursor-pointer ${fields.length > 1 ? "text-red-500 hover:text-red-700" : "text-gray-400 hover:text-gray-400"}`}
                                    title="Delete Row"
                                    onClick={() => fields.length > 1 && remove(index)}
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
    );
};

export default InvoiceTable;