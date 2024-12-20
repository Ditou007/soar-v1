import React, { useRef, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
  Filler, // Add Filler plugin for area fills
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend,
  Filler // Register the Filler plugin
)

interface ReusableLineGraphProps {
  labels: string[]
  data: number[]
  lineColor?: string
  gradientStartColor?: string
  gradientEndColor?: string
  title?: string
  height?: number
}

const ReusableLineGraph: React.FC<ReusableLineGraphProps> = ({
  labels,
  data,
  lineColor = '#396AFF',
  gradientStartColor = 'rgba(57, 106, 255, 0.2)',
  gradientEndColor = 'rgba(57, 106, 255, 0)',
  title = 'Line Chart',
  height = 300,
}) => {
  const chartRef = useRef<any>(null)
  const [chartData, setChartData] = React.useState({
    labels,
    datasets: [
      {
        label: title,
        data,
        borderColor: lineColor,
        backgroundColor: gradientStartColor,
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  })

  useEffect(() => {
    const chart = chartRef.current

    if (chart) {
      const ctx = chart.canvas.getContext('2d')
      const gradient = ctx.createLinearGradient(0, 0, 0, chart.height)
      gradient.addColorStop(0, 'rgba(57, 106, 255, 30)') // More visible at top
      gradient.addColorStop(1, 'rgba(57, 106, 255, 0)') // Completely transparent at bottom

      setChartData({
        labels,
        datasets: [
          {
            label: title,
            data,
            borderColor: lineColor,
            backgroundColor: gradient,
            fill: true,
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0,
          },
        ],
      })
    }
  }, [labels, data, lineColor, title])

  const options = {
    responsive: true,
    maintainAspectRatio: false as const,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: title,
      },
      tooltip: {
        enabled: false,
      },
      filler: {
        propagate: true, // Ensure proper fill behavior
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: '#DFEAF2',
          lineWidth: 1,
          drawBorder: false,
        },
        ticks: {
          color: '#718EBF',
          font: {
            family: 'sans-serif',
            size: 14,
          },
        },
        border: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: '#DFEAF2',
          lineWidth: 1,
          drawBorder: false,
          borderDash: [5, 5],
        },
        ticks: {
          color: '#718EBF',
          font: {
            family: 'sans-serif',
            size: 14,
          },
          stepSize: 200,
          padding: 10,
        },
        border: {
          display: false,
        },
      },
    },
  }

  return (
    <div>
      <div className='text-lg font-bold font-lato text-primary mb-2'>
        {title}
      </div>
      <div
        className='p-4 bg-white border-[1px] rounded-[25px]'
        style={{ width: '100%', height: `${height}px` }}
      >
        <div style={{ width: '100%', height: '100%' }}>
          <Line ref={chartRef} data={chartData} options={options} />
        </div>
      </div>
    </div>
  )
}

export default ReusableLineGraph
