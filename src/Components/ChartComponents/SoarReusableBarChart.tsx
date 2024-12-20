import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend
)

interface BarChartDataset {
  label: string
  data: number[]
  backgroundColor: string
  borderRadius?: number
  borderSkipped?: boolean
}

interface SoarBarChartProps {
  labels: string[]
  datasets: BarChartDataset[]
  title?: string
  height?: number | string
  options?: any
}

const SoarReusableBarChart: React.FC<SoarBarChartProps> = ({
  labels,
  datasets,
  title = 'Bar Chart',
  height = 400,
  options = {},
}) => {
  const data = {
    labels,
    datasets,
  }

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        border: {
          display: false,
        },
        ticks: {
          padding: 10,
        },
      },
    },
    layout: {
      padding: {
        bottom: 20,
      },
    },
    barPercentage: 0.5,
    categoryPercentage: 0.8,
    ...options,
  }

  return (
    <div className='w-full'>
      <div className='text-lg font-bold font-lato text-primary mb-2'>
        {title}
      </div>
      <div className='p-4 bg-white border-[1px] rounded-[25px] w-full'>
        <div
          className='w-full'
          style={{
            height: typeof height === 'number' ? `${height}px` : height,
          }}
        >
          <Bar data={data} options={defaultOptions} />
        </div>
      </div>
    </div>
  )
}

export default SoarReusableBarChart
