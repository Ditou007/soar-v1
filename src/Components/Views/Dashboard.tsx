import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AppLayout from 'soar/Components/Layout/AppLayout'
import ReusableLineGraph from '../ChartComponents/ReusableLineGraph'
import SoarPieChart from '../ChartComponents/SoarPieChart'
import WeeklyActivityChart from '../ChartComponents/SoarReusableBarChart'
import MyCards, { MyCardsProps } from '../DashboardComponents/MyCards'
import QuickTransferCard from '../DashboardComponents/QuickTransferCard'
import RecentTransactionsList from '../DashboardComponents/RecentTransactionsList'

const Dashboard: React.FC = () => {
  const [data, setData] = useState<{
    pieData: any
    barData: any
    cardData: any
    lineGraphData: any
  }>({
    pieData: null,
    barData: null,
    cardData: null,
    lineGraphData: null,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/dashboardData')
      setData({
        pieData: response.data.pieData,
        barData: response.data.barData,
        cardData: response.data.cardData,
        lineGraphData: response.data.lineGraphData,
      })
      setLoading(false)
    } catch (err: any) {
      console.error('Error fetching dashboard data:', err.message)
      setError('Failed to load data. Please try again later.')
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    // better loading can be implemented at component level as well
    return (
      <div className='flex justify-center items-center h-screen'>
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p>{error}</p>
      </div>
    )
  }

  const { pieData, barData, cardData, lineGraphData } = data

  return (
    <AppLayout title='Overview'>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
        <div className='md:col-span-2'>
          <MyCards cardData={cardData} />
        </div>
        <div className='md:col-span-1'>
          <RecentTransactionsList />
        </div>
      </div>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-3 mt-4'>
        <div className='md:col-span-2'>
          <WeeklyActivityChart
            labels={barData.labels}
            datasets={barData.datasets}
            title={barData.title}
            height={barData.height}
          />
        </div>
        <div className='md:col-span-1'>
          <SoarPieChart
            labels={pieData.labels}
            values={pieData.values}
            colors={pieData.colors}
            offsets={pieData.offsets}
            title={pieData.title}
          />
        </div>
      </div>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-3 mt-4'>
        <div className='md:col-span-1'>
          <QuickTransferCard />
        </div>
        <div className='md:col-span-2'>
          <ReusableLineGraph
            labels={lineGraphData.labels}
            data={lineGraphData.data}
            title='Balance History'
            lineColor='#396AFF'
            gradientStartColor='rgba(57, 106, 255, 0.2)'
            gradientEndColor='rgba(57, 106, 255, 0)'
            height={250}
          />
        </div>
      </div>
    </AppLayout>
  )
}

export default Dashboard
