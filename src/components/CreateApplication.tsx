import React from 'react'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'

const CreateApplication = () => {
  return (
    <div>
      <div className='flex'>
        <div className='basis-[12%] h-[100vh] '>
          <Sidebar />
        </div>
        <div className='basis-[88%] border'>
          <Dashboard />
          <h1 className='text-[#5a5c69] text-[28px] leading-[34px] ml-3 mt-3 font-normal cursor-pointer'>Create Your Application</h1>

          <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-emerald-600 lg:max-w-xl">
              <h1 className="text-3xl font-semibold text-center text-orange-700 uppercase hover:text-emerald-600">
                Create Application
              </h1>
              <form className="mt-6">
                <div className="mb-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Application Name
                  </label>
                  <input
                    type="name"
                    className="block w-full px-4 py-2 mt-2 text-emerald-700 bg-white border rounded-md focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="desc"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Description
                  </label>
                  <input
                    type="desc"
                    className="block w-full px-4 py-2 mt-2 text-emerald-700 bg-white border rounded-md focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <button className="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-700 rounded-lg hover:bg-emerald-600 focus:outline-none focus:bg-emerald-600">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CreateApplication