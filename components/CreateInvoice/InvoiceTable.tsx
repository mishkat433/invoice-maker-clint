import React from 'react';

const InvoiceTable = () => {
    return (
        <div className="overflow-x-auto m-2 rounded-sm p-2 ">
            <table className="table border-collapse border border-gray-400">
                {/* head */}
                <thead >
                    <tr className='font-bold text-black'>
                        <th className='border-1 border-b-2 border-gray-500 w-8 '>SL. No</th>
                        <th className='border-1 border-b-2 border-gray-500 text-center '>Product/Service Name</th>
                        <th className='border-1 border-b-2 border-gray-500 text-center w-20'>Quantity</th>
                        <th className='border-1 border-b-2 border-gray-500 text-center w-20'>Unit Price</th>
                        <th className='border-1 border-b-2 border-gray-500 text-center w-28'>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='border border-gray-400 text-center'>1</th>
                        <td className='border border-gray-400'>Photocopy</td>
                        <td className='border border-gray-400 text-center'>50</td>
                        <td className='border border-gray-400 text-center'>3</td>
                        <td className='border border-gray-400 text-center'>150</td>
                    </tr>
                    <tr>
                        <th className='border border-gray-400 text-center'>1</th>
                        <td className='border border-gray-400'>Photocopy</td>
                        <td className='border border-gray-400 text-center'>50</td>
                        <td className='border border-gray-400 text-center'>3</td>
                        <td className='border border-gray-400 text-center'>150</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default InvoiceTable;