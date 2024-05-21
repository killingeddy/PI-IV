"use client";
import PageLayoyt from "@/components/layout";
import Input from "@/components/input";
import moment from "moment";
import React from "react";

export default function SamplesW() {

  const [statusFilter, setStatusFilter] = React.useState("active");

  const bgColorsActive = 'bg-[#7678ee] hover:bg-[#7678ee] text-white transition-all duration-300';
  const bgColorsInactive = 'bg-white hover:bg-[#7678ee] hover:text-white transition-all duration-300';

  const bgColorsFilter = (status) => {
    if (statusFilter === status) {
      return bgColorsActive;
    }
    return bgColorsInactive;
  };

  return (
    <PageLayoyt>
      <div className="flex justify-between items-center h-12">
        <Input
          placeholder="Pesquisar amostra..."
          type={"text"}
          name="Search"
        />
      </div>
      <div className="flex-wrap flex justify-center lg:justify-between gap-6 lg:gap-2 md:gap-4 items-center h-11 mt-6 mb-20 md:mb-20 lg:mb-6">
        <button
          className={`${bgColorsFilter('active')} w-[45%] md:w-[48%] lg:w-[30%] h-full rounded-full font-bold text-xs md:text-sm 
              flex items-center justify-center cursor-pointer shadow-custom-shadow`}
          onClick={() => setStatusFilter("active")}
        >
          Alertas de fogo
        </button>
        <button
          className={`${bgColorsFilter('finished')} w-[45%] md:w-[48%] lg:w-[30%] h-full rounded-full font-bold text-xs md:text-sm 
              flex items-center justify-center cursor-pointer shadow-custom-shadow`}
          onClick={() => setStatusFilter("finished")}
        >
          Alertas de fumaça
        </button>
        <button
          className={`${bgColorsFilter('hidden')} w-[45%] md:w-[48%] lg:w-[30%] h-full rounded-full font-bold text-xs md:text-sm 
              flex items-center justify-center cursor-pointer shadow-custom-shadow`}
          onClick={() => setStatusFilter("hidden")}
        >
          Alertas de vazamento de gás
        </button>
      </div>
      <section class="mt-2 mb-4">
        <div class="flex flex-col">
          <div className="overflow-x-scroll lg:overflow-hidden px-1">
            <div class="inline-block min-w-full">
              <div class=" bg-white shadow-custom-shadow rounded-3xl">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th scope="col" class="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-[#7678ee]">
                        N° da amostra
                      </th>
                      <th scope="col" class="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-[#7678ee]">
                        Tipo de alerta
                      </th>
                      <th scope="col" class="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-[#7678ee]">
                        Amostra
                      </th>
                      <th scope="col" class="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-[#7678ee]">
                        Registrado em
                      </th>
                      <th scope="col" class="px-3.5 py-3.5 text-sm font-normal text-left rtl:text-right text-[#7678ee]">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                      <td class="px-2 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3 flex-col">
                          <span>23112004</span>
                        </div>
                      </td>
                      <td>
                        <div class="inline-flex items-center rounded-full bg-[#570e07] py-2 px-6 lg:px-10 w-60 justify-center">
                          <h2 class="text-sm font-normal text-white">Alerta de fogo</h2>
                        </div>

                      </td>
                      <td class="px-1 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div class="flex items-center gap-x-1">
                          <div>
                            <h2 class="text-sm font-medium text-gray-800 dark:text-white">Amostra 1</h2>
                          </div>
                        </div>
                      </td>
                      <td class="px-1 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div class="flex items-center gap-x-1">
                          <div>
                            <h2 class="text-sm font-medium text-gray-800 dark:text-white ">{moment().format("DD/MM/YYYY")}</h2>
                          </div>
                        </div>
                      </td>
                      <td class="px-1 py-4 text-sm flex-wrap flex flex-row w-1">
                        <button class="text-sm text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-red-600 focus:outline-none">
                          Deletar amostra
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-2 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3 flex-col">
                          <span>98756321</span>
                        </div>
                      </td>
                      <td><div class="inline-flex items-center rounded-full bg-[#4f4e4d] py-2 px-6 lg:px-10 w-60 justify-center">
                        <h2 class="text-sm font-normal text-white">Alerta de fumaça</h2>
                      </div>
                      </td>
                      <td class="px-1 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div class="flex items-center gap-x-1">
                          <div>
                            <h2 class="text-sm font-medium text-gray-800 dark:text-white">Amostra 2</h2>
                          </div>
                        </div>
                      </td>
                      <td class="px-1 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div class="flex items-center gap-x-1">
                          <div>
                            <h2 class="text-sm font-medium text-gray-800 dark:text-white ">{moment().format("DD/MM/YYYY")}</h2>
                          </div>
                        </div>
                      </td>
                      <td class="px-1 py-4 text-sm flex-wrap flex flex-row w-1">
                        <button class="text-sm text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-red-600 focus:outline-none">
                          Deletar amostra
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-2 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3 flex-col">
                          <span>15839257</span>
                        </div>
                      </td>
                      <td>
                        <div class="inline-flex items-center rounded-full bg-[#248a3c] py-2 px-6 lg:px-10 w-60 justify-center">
                          <h2 class="text-sm font-normal text-white">Vazamento de gás</h2>
                        </div>
                      </td>
                      <td class="px-1 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div class="flex items-center gap-x-1">
                          <div>
                            <h2 class="text-sm font-medium text-gray-800 dark:text-white">Amostra 3</h2>
                          </div>
                        </div>
                      </td>
                      <td class="px-1 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div class="flex items-center gap-x-1">
                          <div>
                            <h2 class="text-sm font-medium text-gray-800 dark:text-white ">{moment().format("DD/MM/YYYY")}</h2>
                          </div>
                        </div>
                      </td>
                      <td class="px-1 py-4 text-sm flex-wrap flex flex-row w-1">
                        <button class="text-sm text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-red-600 focus:outline-none">
                          Deletar amostra
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayoyt>
  );
}
