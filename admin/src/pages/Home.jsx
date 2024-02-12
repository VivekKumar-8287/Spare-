import React from 'react'
import Sidebar from '../Components/Sidebar'
import Widget from '../Components/Widget'
import Featured from '../Components/Featured'
import Table from '../Components/Table'
import Chart from '../Components/Chart'

const Home = () => {
  return (
    <div>
        <div className="widgets flex justify-evenly m-4 p-5 gap-5">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts p-1 px-5 flex gap-6">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer shadow-md p-5 m-5">
          <div className="listTitle font-medium text-gray-500 mb-4">Latest Transactions</div>
          <Table />
        </div>
      </div>
  )
}

export default Home