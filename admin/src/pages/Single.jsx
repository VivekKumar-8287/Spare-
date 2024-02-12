import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Chart from '../Components/Chart'
import List from './List'

const Single = () => {
  return (
  <div className="single flex w-full ">
    <div className="singleContainer flex-6">
      <div className="top p-5 flex gap-5 ">
        <div className="left flex-2 shadow-md relative p-2">
          <div className="editButton absolute top-0 right-0 p-2 text-sm text-purple-600 bg-purple-100 cursor-pointer rounded-r">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item flex gap-5">
            <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="itemImg w-24 h-24 rounded-full object-cover"
            />
            <div className="details">
              <h1 className="itemTitle mb-3 text-gray-700">Jane Doe</h1>
              <div className="detailItem mb-3 text-base">
                <span className="itemKey font-bold text-gray-500 mr-5">Email:</span>
                <span className="itemValue font-light">janedoe@gmail.com</span>
              </div>
              <div className="itemTitle mb-3 text-gray-700">
                <span className="itemKey font-bold text-gray-500 mr-5">Phone:</span>
                <span className="itemValue font-light">+1 2345 67 89</span>
              </div>
              <div className="itemTitle mb-3 text-gray-700">
                <span className="itemKey font-bold text-gray-500 mr-5">Address:</span>
                <span className="itemValue font-light">
                  Elton St. 234 Garden Yd. NewYork
                </span>
              </div>
              <div className="itemTitle mb-3 text-gray-700">
                <span className="itemKey font-bold text-gray-500 mr-5">Country:</span>
                <span className="itemValue font-light">USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex-2">
          <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
        </div>
      </div>
      <div className="bottom shadow-md p-5 m-3">
      <h1 className="title text-2xl text-lightgray mb-5">Last Transactions</h1>
        <List/>
      </div>
    </div>
  </div>
  )
}

export default Single