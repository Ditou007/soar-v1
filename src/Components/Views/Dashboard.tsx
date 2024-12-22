import React from 'react'
import AppLayout from 'soar/Components/Layout/AppLayout'
import ReusableLineGraph from '../ChartComponents/ReusableLineGraph'
import SoarPieChart from '../ChartComponents/SoarPieChart'
import WeeklyActivityChart from '../ChartComponents/SoarReusableBarChart'
import MyCards from '../DashboardComponents/MyCards'
import QuickTransferCard from '../DashboardComponents/QuickTransferCard'
import RecentTransactionsList from '../DashboardComponents/RecentTransactionsList'
import CardChipSvgBlack from '../Icons/CardChipSvgBlack'
import CardChipSvgWhite from '../Icons/CardChipSvgWhite'
import MasterCardSvg from '../Icons/MasterCardSvg'

const Dashboard: React.FC = () => {
  // in a real life senarior this data would be fetched from an api here
  // since there arent any api calls no loading states or loaders were added
  const pieData = {
    labels: ['Entertainment', 'Bill Expenses', 'Investments', 'Others'],
    values: [30, 15, 20, 35],
    colors: ['#343C6A', '#FC7900', '#396AFF', '#232323'],
    offsets: [20, 20, 20, 20],
    title: 'Expense Statistics',
  }

  const barData = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Deposits',
        data: [200, 300, 500, 700, 600, 400, 300],
        backgroundColor: '#232323',
        borderRadius: 9999,
        borderSkipped: false,
      },
      {
        label: 'Withdrawals',
        data: [150, 250, 300, 400, 350, 200, 150],
        backgroundColor: '#396AFF',
        borderRadius: 9999,
        borderSkipped: false,
      },
    ],
    title: 'Weekly Activity',
    height: 400,
  }

  const cardData = [
    {
      balance: '2,450.00',
      cardNumber: '1234 **** **** 3456',
      cardHolder: 'John Doe',
      validThru: '12/26',
      chipIcon: <CardChipSvgWhite className='w-8 h-8' />,
      cardTypeIcon: <MasterCardSvg />,
      cardType: 'dark',
    },
    {
      balance: '8,720.50',
      cardNumber: '9876 **** **** 7654',
      cardHolder: 'Jane Smith',
      validThru: '06/25',
      chipIcon: <CardChipSvgBlack className='w-8 h-8' />,
      cardTypeIcon: <MasterCardSvg />,
      cardType: 'white',
    },
  ]

  const lineGraphData = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
    data: [100, 250, 400, 800, 500, 200, 100, 400],
  }
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
