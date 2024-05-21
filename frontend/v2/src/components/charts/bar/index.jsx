import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          var label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += context.parsed.y + ' ocorrências';
          }
          return label;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  datasets: {
    bar: {
      barPercentage: 0.8,
      borderRadius: 20,
    },
  },
  maintainAspectRatio: false,
  layout: {
    padding: 10,
  },
  indexAxis: 'x',
};
// gets this week
const labels = [moment().subtract(6, 'days').format('DD/MM'), moment().subtract(5, 'days').format('DD/MM'), moment().subtract(4, 'days').format('DD/MM'), moment().subtract(3, 'days').format('DD/MM'), moment().subtract(2, 'days').format('DD/MM'), moment().subtract(1, 'days').format('DD/MM'), moment().format('DD/MM')];

export const data = {
  labels,
  datasets: [
    {
      label: 'Incêndios',
      data: [6, 8, 2, 5, 3, 7, 4],
      backgroundColor: 'rgba(118, 120, 238, 1)'
    },
    {
      label: 'Alertas de fumaça',
      data: [3, 5, 2, 4, 6, 7, 8],
      backgroundColor: 'rgba(37, 38, 89, 1)'
    },
    {
      label: 'Vazamento de gás',
      data: [1, 2, 3, 4, 5, 6, 7],
      backgroundColor: 'rgba(51, 53, 163, 1)'
    },
  ],
};

export function Chart() {
  return <Bar options={options} data={data} />;
}
