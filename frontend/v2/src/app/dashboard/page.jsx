"use client";
import { TbMath1Divide2, TbMathXDivideY, TbMathXDivideY2 } from "react-icons/tb";
import { FireIcon } from "@heroicons/react/24/solid";
import { PieChart } from "@/components/charts/pie";
import { Chart } from "@/components/charts/bar";
import PageLayoyt from "@/components/layout";
import { GiGasMask } from "react-icons/gi";
import { WiSmoke } from "react-icons/wi";
import React from "react";

export default function EventDashboard() {

  return (
    <PageLayoyt>
      <div className="justify-between flex-wrap flex">
        <div className="bg-white w-[49%] md:w-[32%] h-28 rounded-3xl shadow-custom-shadow flex items-center p-4">
          <div className="w-16 h-16 bg-[#7678ee30] rounded-full flex items-center justify-center">
            <FireIcon width={45} height={45} color="#7678ee" className="opacity-100" />
          </div>
          <div className="flex flex-col ml-2 lg:ml-4">
            <span className="text-[#7678ee] text-sm font-normal">Registros de incêndios</span>
            <span className="text-xs md:text-base lg:text-xl font-bold">{Math.floor(Math.random() * 10)}</span>
          </div>
        </div>
        <div className="bg-white w-[49%] md:w-[32%] h-28 rounded-3xl shadow-custom-shadow flex items-center p-4">
          <div className="w-16 h-16 bg-[#7678ee30] rounded-full flex items-center justify-center">
            <WiSmoke size={60} color="#7678ee" className="opacity-100" />
          </div>
          <div className="flex flex-col ml-2 lg:ml-4">
            <span className="text-[#7678ee] text-sm font-normal">Registros de alertas de fumaça</span>
            <span className="text-xs md:text-base lg:text-xl font-bold">{Math.floor(Math.random() * 10)}</span>
          </div>
        </div>
        <div className="bg-white w-[49%] md:w-[32%] mt-4 md:mt-0 h-28 rounded-3xl shadow-custom-shadow flex items-center p-4">
          <div className="w-16 h-16 bg-[#7678ee30] rounded-full flex items-center justify-center">
            <GiGasMask size={50} color="#7678ee" className="opacity-100" />
          </div>
          <div className="flex flex-col ml-2 lg:ml-4">
            <span className="text-[#7678ee] text-sm font-normal">Registros de vazamento de gás</span>
            <span className="text-xs md:text-base lg:text-xl font-bold">{Math.floor(Math.random() * 10)}</span>
          </div>
        </div>
      </div>
      <div className="justify-between flex-wrap flex mt-4 w-full">
        <div className="bg-white w-full md:w-[59%] h-[420px] rounded-3xl shadow-custom-shadow flex items-center flex-col p-4">
          <h2 className="text-[#7678ee] text-xl font-bold">Médias semanais</h2>
          <Chart />
        </div>
        <div className="bg-white w-full md:w-[39%] h-[500px] md:h-[420px] rounded-3xl shadow-custom-shadow flex items-center flex-col p-4 mt-4 md:mt-0">
          <h2 className="text-[#7678ee] text-xl font-bold">Ocorrências por tipo</h2>
          <div className="w-full h-5/6 flex items-center justify-center">
            <PieChart />
          </div>
        </div>
      </div>
      <div className="justify-between flex-wrap flex mt-4">
        <div className="bg-white w-[49%] md:w-[32%] h-28 rounded-3xl shadow-custom-shadow flex items-center p-4">
          <div className="w-16 h-16 bg-[#7678ee30] rounded-full flex items-center justify-center">
            <TbMath1Divide2 size={45} color="#7678ee" className="opacity-100" />
          </div>
          <div className="flex flex-col ml-2 lg:ml-4">
            <span className="text-[#7678ee] text-sm font-normal">Média de incêndios</span>
            <span className="text-xs md:text-base lg:text-xl font-bold">{Math.floor(Math.random() * 10)}</span>
          </div>
        </div>
        <div className="bg-white w-[49%] md:w-[32%] h-28 rounded-3xl shadow-custom-shadow flex items-center p-4">
          <div className="w-16 h-16 bg-[#7678ee30] rounded-full flex items-center justify-center">
            <TbMathXDivideY size={45} color="#7678ee" className="opacity-100" />
          </div>
          <div className="flex flex-col ml-2 lg:ml-4">
            <span className="text-[#7678ee] text-sm font-normal">Média de alertas de fumaça</span>
            <span className="text-xs md:text-base lg:text-xl font-bold">{Math.floor(Math.random() * 10)}</span>
          </div>
        </div>
        <div className="bg-white w-[49%] md:w-[32%] mt-4 md:mt-0 h-28 rounded-3xl shadow-custom-shadow flex items-center p-4">
          <div className="w-16 h-16 bg-[#7678ee30] rounded-full flex items-center justify-center">
            <TbMathXDivideY2 size={45} color="#7678ee" className="opacity-100" />
          </div>
          <div className="flex flex-col ml-2 lg:ml-4">
            <span className="text-[#7678ee] text-sm font-normal">Média de vazamento de gás</span>
            <span className="text-xs md:text-base lg:text-xl font-bold">{Math.floor(Math.random() * 10)}</span>
          </div>
        </div>
      </div>
    </PageLayoyt>
  );
}
