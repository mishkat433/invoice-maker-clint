"use client"

import Image from "next/image";
import logo from "../../../public/Asset 1-8.png";
import CreateInvoiceForm from "@/components/CreateInvoice/CreateInvoiceForm";



const Home = () => {


  return (
    <main className="border-2 rounded-md border-teal-600 mt-5 p-2shadow-md">
      <div className="shadow-md p-4">
        <div className="mb-4 flex justify-between">
          <Image src={logo} alt="kings logo" height={80} width={80} />
          <h1 className="text-5xl font-oswald ">Kings Computer & Printers</h1>
        </div>

        <div className="h-0.5 w-full bg-gray-400 mb-1.5"></div>

        <div className="flex justify-between items-center ">
          <div className="">
            <h3 ><strong>Invoice/Bill No :- </strong> INV/KCP-001</h3>
          </div>
          <div>
            <p className="text-right "><strong>Address :-</strong> Cremlin Chowdhury Plaza, Chowmohoni, Pekua, Cox&apos;s Bazar</p>
            <p className="text-right mb-2"><strong>Phone :-</strong> 01640700565, 01829169870</p>
          </div>
        </div>
      </div>
      <h2 className="text-center text-3xl font-bold mb-2 font-mulish mt-2">INVOICE</h2>

      <CreateInvoiceForm />

      <div className="border border-red-400 p-5"></div>
    </main>
  );
};

export default Home;