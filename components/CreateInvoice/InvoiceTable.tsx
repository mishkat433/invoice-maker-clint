import { RiAddCircleLine, RiCloseCircleLine } from "react-icons/ri";

const InvoiceTable = ({ rows, setRows, deleteRow, errors, register }: any) => {

    return (
        <div className="overflow-x-auto m-1 rounded-sm p-1 ">
            <table className=" w-full border-collapse border border-gray-400">
                {/* Table Head */}
                <thead>
                    <tr className="font-bold text-black">
                        <th className="border-1 border-b-2 border-gray-500 w-8">SL. No</th>
                        <th className="border-1 border-b-2 border-gray-500 text-center">Description</th>
                        <th className="border-1 border-b-2 border-gray-500 text-center w-20">Quantity</th>
                        <th className="border-1 border-b-2 border-gray-500 text-center w-20">Unit Price</th>
                        <th className="border-1 border-b-2 border-gray-500 text-center w-28">Total</th>
                        <th className="border-1 border-b-2 border-gray-500 text-center w-14">Action</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {Array.isArray(rows) &&
                        rows.map((row, index) => (
                            <tr key={row.id}>
                                <th className="border border-gray-400 text-center">{index + 1}</th>
                                <td className="border border-gray-400">
                                    <input type="text" className={` bg-slate-100 outline-none col-span-5 p-1 h-10 w-full ${errors.productName ? "border focus:border-error-color" : "focus:bg-slate-100"}`}
                                        placeholder='Service Name...'
                                        {...register("productName",
                                            { required: "ProductName is required", }
                                        )} />
                                </td>
                                <td className="border border-gray-400">
                                    <input type="number" className={` bg-slate-100 outline-none col-span-5 p-1 h-10 w-full ${errors.quantity ? "border focus:border-error-color" : "focus:bg-slate-100"}`}
                                        placeholder='Qty'
                                        defaultValue={row.quantity}
                                        {...register("quantity",

                                            { required: "Quantity is required", }
                                        )} />
                                </td>
                                <td className="border border-gray-400">
                                    <input type="number" className={` bg-slate-100 outline-none col-span-5 p-1 h-10 w-full ${errors.unitPrice ? "border focus:border-error-color" : "focus:bg-slate-100"}`}
                                        placeholder='U. Price'

                                        {...register("unitePrice",
                                            { required: "unite price is required", }
                                        )} />
                                </td>
                                <td className="border border-gray-400">
                                    <p className={` bg-slate-100 outline-none col-span-5 p-1 h-10 w-full ${errors.Total ? "border focus:border-error-color" : "focus:bg-slate-100"}`}></p>


                                </td>
                                <td className="border border-gray-400 flex gap-2 bg-teal-50 h-full">
                                    <RiCloseCircleLine
                                        className="text-2xl text-red-500 hover:text-red-700 cursor-pointer duration-300"
                                        title="Delete Row"
                                        onClick={() => deleteRow(row.id)}
                                    />
                                    <RiAddCircleLine
                                        className="text-2xl text-teal-800 hover:text-teal-600 cursor-pointer duration-300"
                                        title="Add Row"
                                        onClick={() => setRows([...rows, { id: Date.now() }])}
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