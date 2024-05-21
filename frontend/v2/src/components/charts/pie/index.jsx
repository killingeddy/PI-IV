import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Incêndios', 'Vazamento de gás', 'Alertas de fumaça'],
  datasets: [
    {
      data: [12, 19, 25],
      backgroundColor: [
        'rgba(37, 38, 89, 1)',
        'rgba(118, 120, 238, 1)',
        'rgba(51, 53, 163, 1)'
      ],
      borderWidth: 0,
    },
  ],
};

export function PieChart() {
  return <Pie data={data} />;
}
