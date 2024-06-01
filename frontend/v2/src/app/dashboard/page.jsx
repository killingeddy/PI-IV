"use client";
import { FireIcon } from "@heroicons/react/24/solid";
import { PieChart } from "@/components/charts/pie";
import { FaTemperatureLow } from "react-icons/fa6";
import { Chart } from "@/components/charts/bar";
import { useSession } from "next-auth/react";
import PageLayoyt from "@/components/layout";
import { BsMoisture } from "react-icons/bs";
import { GiGasMask } from "react-icons/gi";
import Loader from "@/components/loader";
import useApi from "@/tools/api";
import React from "react";

export default function EventDashboard() {

  const api = useApi();

  const { data: session, status } = useSession();

  const [readings, setReadings] = React.useState([]);

  const [loading, setLoading] = React.useState(true);

  const getReadings = async () => {
    if (status !== "authenticated") return;
    api
      .get("/readings", {
        headers: {
          'auth-token': session?.user?.token,
        },
        params: {
          limit: 10000,
          offset: 0,
        },
      })
      .then((response) => {
        setReadings(response.data.leituras);
      })
      .catch((error) => {
        toast.error("Erro ao buscar amostras");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const treatData = (sensorData) => {
    const temperatureCounts = Array(12).fill(0);
    const moistureCounts = Array(12).fill(0);
    const fireCounts = Array(12).fill(0);
    const gasCounts = Array(12).fill(0);

    sensorData.forEach(entry => {
      const month = new Date(entry.created_at).getMonth();

      if (entry.temperature !== 0) temperatureCounts[month]++;
      if (entry.moisture !== 0) moistureCounts[month]++;
      if (entry.fire !== 0) fireCounts[month]++;
      if (entry.gas !== 0) gasCounts[month]++;
    });

    const chartData = {
      datasets: [
        {
          label: 'Amostras de temperatura',
          data: temperatureCounts,
          backgroundColor: 'rgba(118, 120, 238, 1)'
        },
        {
          label: 'Amostras de umidade',
          data: moistureCounts,
          backgroundColor: 'rgba(37, 38, 89, 1)'
        },
        {
          label: 'Amostras de fogo',
          data: fireCounts,
          backgroundColor: 'rgba(51, 53, 120, 1)'
        },
        {
          label: 'Amostras de gás',
          data: gasCounts,
          backgroundColor: 'rgba(130, 145, 157, 1)'
        }
      ],
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    };

    return chartData
  };

  const getTotalsPerType = (sensorData, type) => {
    let count = 0;

    sensorData.forEach(entry => {
      if (entry[type] !== 0) count++;
    });

    return count;
  };

  const getTotalsPerMonth = (sensorData) => {
    const monthlyCounts = Array(12).fill(0);

    sensorData.forEach(entry => {
      const month = new Date(entry.created_at).getMonth();
      if (entry.temperature !== 0) monthlyCounts[month]++;
      if (entry.moisture !== 0) monthlyCounts[month]++;
      if (entry.fire !== 0) monthlyCounts[month]++;
      if (entry.gas !== 0) monthlyCounts[month]++;
    });

    const chartData = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [
        {
          data: monthlyCounts,
          backgroundColor: [
            'rgba(37, 38, 89, 1)',
            'rgba(118, 120, 238, 1)',
            'rgba(51, 53, 163, 1)',
            'rgba(130, 145, 157, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 0,
        },
      ],
    };

    return chartData;
  };

  const getTotalPerType = (sensorData) => {
    let temperatureCount = 0;
    let moistureCount = 0;
    let fireCount = 0;
    let gasCount = 0;

    sensorData.forEach(entry => {
      if (entry.temperature !== 0) temperatureCount++;
      if (entry.moisture !== 0) moistureCount++;
      if (entry.fire !== 0) fireCount++;
      if (entry.gas !== 0) gasCount++;
    });

    const chartData = {
      labels: ['Temperatura', 'Umidade', 'Fogo', 'Gás'],
      datasets: [
        {
          data: [temperatureCount, moistureCount, fireCount, gasCount],
          backgroundColor: [
            'rgba(118, 120, 238, 1)',
            'rgba(37, 38, 89, 1)',
            'rgba(51, 53, 163, 1)',
            'rgba(130, 145, 157, 1)'
          ],
          borderWidth: 0,
        },
      ],
    };

    return chartData;
  };

  React.useEffect(() => {
    getReadings();
  }, [status]);

  return (
    <PageLayoyt>
      {
        loading
          ?
          <div className="justify-center flex h-screen items-center w-full">
            <Loader color={'#7678ee'} />
          </div>
          :
          <>
            <div className="justify-between flex-wrap flex">
              <div className="bg-white w-[49%] md:w-[23%] h-24 rounded-3xl shadow-custom-shadow flex items-center p-4">
                <div className="w-16 h-16 bg-[#7678ee30] rounded-full flex items-center justify-center">
                  <FaTemperatureLow size={38} color="#7678ee" className="opacity-100" />
                </div>
                <div className="flex flex-col ml-2 lg:ml-4">
                  <span className="text-[#7678ee] text-sm font-normal">Registros de temperatura</span>
                  <span className="text-xs md:text-base lg:text-xl font-bold">{getTotalsPerType(readings, 'temperature')}</span>
                </div>
              </div>
              <div className="bg-white w-[49%] md:w-[23%] h-24 rounded-3xl shadow-custom-shadow flex items-center p-4">
                <div className="w-16 h-16 bg-[#7678ee30] rounded-full flex items-center justify-center">
                  <BsMoisture size={38} color="#7678ee" className="opacity-100" />
                </div>
                <div className="flex flex-col ml-2 lg:ml-4">
                  <span className="text-[#7678ee] text-sm font-normal">Registros de umidade</span>
                  <span className="text-xs md:text-base lg:text-xl font-bold">{getTotalsPerType(readings, 'moisture')}</span>
                </div>
              </div>
              <div className="bg-white w-[49%] md:w-[23%] mt-4 md:mt-0 h-24 rounded-3xl shadow-custom-shadow flex items-center p-4">
                <div className="w-16 h-16 bg-[#7678ee30] rounded-full flex items-center justify-center">
                  <FireIcon size={38} color="#7678ee" className="opacity-100" />
                </div>
                <div className="flex flex-col ml-2 lg:ml-4">
                  <span className="text-[#7678ee] text-sm font-normal">Registros de fogo</span>
                  <span className="text-xs md:text-base lg:text-xl font-bold">{getTotalsPerType(readings, 'fire')}</span>
                </div>
              </div>
              <div className="bg-white w-[49%] md:w-[23%] mt-4 md:mt-0 h-24 rounded-3xl shadow-custom-shadow flex items-center p-4">
                <div className="w-16 h-16 bg-[#7678ee30] rounded-full flex items-center justify-center">
                  <GiGasMask size={50} color="#7678ee" className="opacity-100" />
                </div>
                <div className="flex flex-col ml-2 lg:ml-4">
                  <span className="text-[#7678ee] text-sm font-normal">Registros de gás</span>
                  <span className="text-xs md:text-base lg:text-xl font-bold">{getTotalsPerType(readings, 'gas')}</span>
                </div>
              </div>
            </div>
            <div className="justify-between flex-wrap flex mt-4 w-full">
              <div className="bg-white w-full h-[420px] rounded-3xl shadow-custom-shadow flex items-center flex-col p-4">
                <h2 className="text-[#7678ee] text-xl font-bold">Ocorrências por mês</h2>
                <Chart data={treatData(readings)} />
              </div>
            </div>
            <div className="justify-between flex-wrap flex mt-4 w-full mb-7">
              <div className="bg-white w-full md:w-[48%] h-[400px] md:h-[600px] rounded-3xl shadow-custom-shadow flex items-center flex-col p-4 mt-4 md:mt-0">
                <h2 className="text-[#7678ee] text-xl font-bold">Total ocorrências por tipo</h2>
                <div className="w-full h-5/6 flex items-center justify-center">
                  <PieChart data={getTotalPerType(readings)} />
                </div>
              </div>
              <div className="bg-white w-full md:w-[48%] h-[400px] md:h-[600px] rounded-3xl shadow-custom-shadow flex items-center flex-col p-4 mt-4 md:mt-0">
                <h2 className="text-[#7678ee] text-xl font-bold">Total ocorrências por mês</h2>
                <div className="w-full h-5/6 flex items-center justify-center">
                  <PieChart data={getTotalsPerMonth(readings)} />
                </div>
              </div>
            </div>
          </>
      }
    </PageLayoyt>
  );
}
