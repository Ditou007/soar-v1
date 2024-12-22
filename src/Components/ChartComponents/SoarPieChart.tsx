import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(ArcElement, Tooltip, Legend)

interface SoarPieChartProps {
  labels: string[]
  values: number[]
  colors: string[]
  offsets?: number[]
  title?: string
}

const SoarPieChart: React.FC<SoarPieChartProps> = ({
  labels,
  values,
  colors,
  offsets,
  title = 'Distribution Analysis',
}) => {
  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderWidth: 0,
        offset: offsets || new Array(values.length).fill(0),
        borderRadius: 10,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        color: '#FFFFFF',
        font: {
          weight: 'bold' as const,
          size: 11,
        },
        formatter: (value: number, context: any) => {
          const label = context.chart.data.labels[context.dataIndex]
          return `% ${value}\n${label}`
        },
        anchor: 'center' as const,
        align: 'center' as const,
      },
    },
  }

  return (
    <div className='w-full'>
      <div className='text-lg font-bold font-lato text-primary mb-2'>
        {title}
      </div>
      <div className='p-4 bg-white border-[1px] rounded-[25px] w-full'>
        <div className='w-full h-[400px]'>
          <Pie data={data} options={options} plugins={[ChartDataLabels]} />
        </div>
      </div>
    </div>
  )
}

export default SoarPieChart
