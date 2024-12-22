// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type DashboardData = {
  pieData: any
  barData: any
  cardData: any
  lineGraphData: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DashboardData>
) {
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
      chipIcon: 'white',
      cardTypeIcon: 'master',
      cardType: 'dark',
    },
    {
      balance: '8,720.50',
      cardNumber: '9876 **** **** 7654',
      cardHolder: 'Jane Smith',
      validThru: '06/25',
      chipIcon: 'black',
      cardTypeIcon: 'master',
      cardType: 'white',
    },
  ]

  const lineGraphData = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
    data: [100, 250, 400, 800, 500, 200, 100, 400],
  }

  res.status(200).json({ pieData, barData, cardData, lineGraphData })
}
