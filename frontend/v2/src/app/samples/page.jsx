"use client";
import { toast, ToastContainer } from "react-toastify";
import PageLayoyt from "@/components/layout";
import { useSession } from "next-auth/react";
import Loader from "@/components/loader";
import useApi from "@/tools/api";
import moment from "moment";
import React from "react";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

export default function SamplesW() {

  const [statusFilter, setStatusFilter] = React.useState("all");

  const bgColorsActive = 'bg-[#7678ee] hover:bg-[#7678ee] text-white transition-all duration-300';
  const bgColorsInactive = 'bg-white hover:bg-[#7678ee] hover:text-white transition-all duration-300';

  const bgColorsFilter = (status) => {
    if (statusFilter === status) {
      return bgColorsActive;
    }
    return bgColorsInactive;
  };

  const [data, setData] = React.useState({
    temperatura: null,
    umidade: null,
    fogo: null,
    gas: null,
  });

  const api = useApi();

  const { data: session, status } = useSession();

  const [readings, setReadings] = React.useState([]);

  const [offset, setOffset] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [total, setTotal] = React.useState(0);

  const [loading, setLoading] = React.useState(true);

  const getReadings = async () => {
    if (status !== "authenticated") return;
    api
      .get("/readings", {
        headers: {
          'auth-token': session?.user?.token,
        },
        params: {
          status: statusFilter,
          limit: limit,
          offset: offset,
        },
      })
      .then((response) => {
        setReadings(response.data.leituras);
        setTotal(response.data.pagination.total);
      })
      .catch((error) => {
        toast.error("Erro ao buscar amostras");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handleDelete = async (id) => {
    if (status !== "authenticated") return;
    api
      .delete(`/readings/${id}`, {
        headers: {
          'auth-token': session?.user?.token,
        },
      })
      .then((response) => {
        toast.success("Amostra deletada com sucesso");
        getReadings();
      })
      .catch((error) => {
        toast.error("Erro ao deletar amostra");
      });
  }

  const handleAdd = async () => {
    if (status !== "authenticated") return;
    if (!data.temperatura && !data.umidade && !data.fogo && !data.gas) {
      toast.error("Preencha pelo menos um campo");
      return;
    }
    api
      .post("/readings", {
        ...data,
        temperatura: data.temperatura ? parseFloat(data.temperatura) : 0,
        umidade: data.umidade ? parseFloat(data.umidade) : 0,
        fogo: data.fogo ? parseFloat(data.fogo) : 0,
        gas: data.gas ? parseFloat(data.gas) : 0,
      },
        {
          headers: {
            'auth-token': session?.user?.token,
          },
        })
      .then((response) => {
        toast.success("Amostra adicionada com sucesso");
        getReadings();
      })
      .catch((error) => {
        toast.error("Erro ao adicionar amostra");
      });
  }

  React.useEffect(() => {
    getReadings();
  }, [status, statusFilter, limit, offset]);

  return (
    <PageLayoyt>
      <h1 className="text-base font-bold text-[#000] mt-6 mb-0">Adicionar amostra</h1>
      <div className="flex-wrap flex justify-center lg:justify-between gap-6 lg:gap-2 md:gap-4 items-center h-11 mt-1 mb-20 md:mb-20 lg:mb-6">
        <input
          className={`w-[45%] md:w-[48%] lg:w-[17%] h-full rounded-full font-bold text-xs md:text-sm indent-3 
              flex items-center justify-center outline-none shadow-custom-shadow`}
          value={data.temperatura}
          onChange={(event) => setData({ ...data, temperatura: event.target.value })}
          placeholder="Temperatura"
        />
        <input
          className={`w-[45%] md:w-[48%] lg:w-[17%] h-full rounded-full font-bold text-xs md:text-sm indent-3 
              flex items-center justify-center outline-none shadow-custom-shadow`}
          value={data.umidade}
          onChange={(event) => setData({ ...data, umidade: event.target.value })}
          placeholder="Umidade"
        />
        <input
          className={`w-[45%] md:w-[48%] lg:w-[17%] h-full rounded-full font-bold text-xs md:text-sm indent-3 
              flex items-center justify-center outline-none shadow-custom-shadow`}
          value={data.fogo}
          onChange={(event) => setData({ ...data, fogo: event.target.value })}
          placeholder="Fogo"
        />
        <input
          className={`w-[45%] md:w-[48%] lg:w-[17%] h-full rounded-full font-bold text-xs md:text-sm indent-3
              flex items-center justify-center outline-none shadow-custom-shadow`}
          value={data.gas}
          onChange={(event) => setData({ ...data, gas: event.target.value })}
          placeholder="Gás"
        />
        <button
          className={`bg-[#7678ee] hover:bg-[#7678ee] text-white transition-all duration-300w-[45%] md:w-[48%] lg:w-[17%] h-full rounded-full font-bold text-xs md:text-sm 
              flex items-center justify-center cursor-pointer shadow-custom-shadow`}
          onClick={() => handleAdd()}
        >
          Adicionar amostra
        </button>
      </div>
      <h1 className="text-base font-bold text-[#000] mt-6 mb-0">Amostras</h1>
      <h2 className="text-sm font-bold text-[#737373] mt-0 mb-0">Filtrar amostras por tipo:</h2>
      <div className="flex-wrap flex justify-center lg:justify-between gap-6 lg:gap-2 md:gap-4 items-center h-11 mb-20 mt-2 md:mb-20 lg:mb-6">
        <button
          className={`${bgColorsFilter('all')} w-[45%] md:w-[48%] lg:w-[17%] h-full rounded-full font-bold text-xs md:text-sm 
              flex items-center justify-center cursor-pointer shadow-custom-shadow`}
          onClick={() => setStatusFilter("all")}
        >
          Todas as amostras
        </button>
        <button
          className={`${bgColorsFilter('temperature')} w-[45%] md:w-[48%] lg:w-[17%] h-full rounded-full font-bold text-xs md:text-sm 
              flex items-center justify-center cursor-pointer shadow-custom-shadow`}
          onClick={() => setStatusFilter("temperature")}
        >
          Amostras de temperatura
        </button>
        <button
          className={`${bgColorsFilter('moisture')} w-[45%] md:w-[48%] lg:w-[17%] h-full rounded-full font-bold text-xs md:text-sm 
              flex items-center justify-center cursor-pointer shadow-custom-shadow`}
          onClick={() => setStatusFilter("moisture")}
        >
          Amostras de umidade
        </button>
        <button
          className={`${bgColorsFilter('fire')} w-[45%] md:w-[48%] lg:w-[17%] h-full rounded-full font-bold text-xs md:text-sm 
              flex items-center justify-center cursor-pointer shadow-custom-shadow`}
          onClick={() => setStatusFilter("fire")}
        >
          Amostras de fogo
        </button>
        <button
          className={`${bgColorsFilter('gas')} w-[45%] md:w-[48%] lg:w-[17%] h-full rounded-full font-bold text-xs md:text-sm
              flex items-center justify-center cursor-pointer shadow-custom-shadow`}
          onClick={() => setStatusFilter("gas")}
        >
          Amostras de gás
        </button>
      </div>
      {
        loading
          ?
          <Loader color={'#7678ee'} />
          :
          <section class="mt-2 mb-4">
            <div class="flex flex-col">
              <div className="overflow-x-scroll lg:overflow-hidden px-1">
                <div class="inline-block min-w-full">
                  <div class=" bg-white shadow-custom-shadow rounded-3xl">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead>
                        <tr>
                          <td colSpan="7" class="px-1 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <div class="flex items-center gap-x-1">
                              <div>
                                <h2 class="text-sm font-medium text-gray-800 dark:text-white ">Mostrando {limit} de {total} amostras</h2>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="col" class="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-[#7678ee]">
                            N° da amostra
                          </th>
                          <th scope="col" class="py-3.5 text-sm font-normal text-left rtl:text-right text-[#7678ee]">
                            Registrado em
                          </th>
                          <th scope="col" class="py-3.5 text-sm font-normal text-left rtl:text-right text-[#7678ee]">
                            Temperatura
                          </th>
                          <th scope="col" class="py-3.5 text-sm font-normal text-left rtl:text-right text-[#7678ee]">
                            Umidade
                          </th>
                          <th scope="col" class="py-3.5 text-sm font-normal text-left rtl:text-right text-[#7678ee]">
                            Fogo
                          </th>
                          <th scope="col" class="py-3.5 text-sm font-normal text-left rtl:text-right text-[#7678ee]">
                            Gás
                          </th>
                          <th scope="col" class="py-3.5 text-sm font-normal text-left rtl:text-right text-[#7678ee]">
                            Ações
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {
                          readings?.map((reading, index) => {
                            return (
                              <tr key={index}>
                                <td class="px-2 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                  <div class="inline-flex items-center gap-x-3 flex-col">
                                    <span>#{reading.id}</span>
                                  </div>
                                </td>
                                <td class="px-1 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                  <div class="flex items-center gap-x-1">
                                    <div>
                                      <h2 class="text-sm font-medium text-gray-800 dark:text-white">{moment(reading.created_at).format("DD/MM/YYYY")}</h2>
                                    </div>
                                  </div>
                                </td>
                                <td class="px-1 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                  <div class="flex items-center gap-x-1">
                                    <div>
                                      <h2 class="text-sm font-medium text-gray-800 dark:text-white ">{reading.temperature}</h2>
                                    </div>
                                  </div>
                                </td>
                                <td class="px-1 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                  <div class="flex items-center gap-x-1">
                                    <div>
                                      <h2 class="text-sm font-medium text-gray-800 dark:text-white ">{reading.moisture}</h2>
                                    </div>
                                  </div>
                                </td>
                                <td class="px-1 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                  <div class="flex items-center gap-x-1">
                                    <div>
                                      <h2 class="text-sm font-medium text-gray-800 dark:text-white ">{reading.fire}</h2>
                                    </div>
                                  </div>
                                </td>
                                <td class="px-1 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                  <div class="flex items-center gap-x-1">
                                    <div>
                                      <h2 class="text-sm font-medium text-gray-800 dark:text-white ">{reading.gas}</h2>
                                    </div>
                                  </div>
                                </td>
                                <td class="px-1 py-4 text-sm flex-wrap flex flex-row w-1">
                                  <button class="text-sm text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-red-600 focus:outline-none" onClick={() => handleDelete(reading.id)}>
                                    Deletar amostra
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        }
                      </tbody>
                      <tfoot>
                        <tr>
                          <td class="px-1 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap" colSpan='7'>
                            <Pagination className="flex items-start justify-start">
                              {
                                Array.from({ length: Math.ceil(total / limit) }, (_, i) => {
                                  return (
                                    <PaginationItem key={i}>
                                      <PaginationLink
                                        className={`text-sm ${offset === i * limit ? 'bg-[#7678ee] text-white' : 'bg-white text-[#7678ee]'} hover:bg-[#7678ee] mr-2 hover:text-white transition-all duration-300`}
                                        isActive={offset === i * limit}
                                        onClick={() => setOffset(i * limit)}>
                                        {i + 1}
                                      </PaginationLink>
                                    </PaginationItem>
                                  );
                                })
                              }
                            </Pagination>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
      }
      <ToastContainer />
    </PageLayoyt>
  );
}
