import React from 'react';

const EmployeeDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-orange-500 text-white h-screen">
        <div className="p-4">
          <h2 className="text-xl font-bold">Creative Tim</h2>
        </div>
        <div className="mt-8">
          <ul>
            <li className="p-2 hover:bg-orange-400"><a href="#">Dashboard</a></li>
            <li className="p-2 hover:bg-orange-400"><a href="#">Icons</a></li>
            <li className="p-2 hover:bg-orange-400"><a href="#">Maps</a></li>
            <li className="p-2 hover:bg-orange-400"><a href="#">Notifications</a></li>
            <li className="p-2 hover:bg-orange-400"><a href="#">User Profile</a></li>
            <li className="p-2 hover:bg-orange-400"><a href="#">Table List</a></li>
            <li className="p-2 hover:bg-orange-400"><a href="#">Typography</a></li>
            <li className="p-2 hover:bg-orange-400"><a href="#">Upgrade to PRO</a></li>
          </ul>
        </div>
      </div>

      {/* Main Panel */}
      <div className="flex-1 p-4">
        {/* Navbar */}
        <nav className="flex items-center justify-between bg-blue-600 text-white p-4">
          <div className="text-lg">Dashboard</div>
          <form className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-l"
            />
            <button className="bg-gray-200 text-black p-2 rounded-r">Search</button>
          </form>
        </nav>

        {/* Content */}
        <div className="mt-4">
          <h3 className="text-2xl font-semibold">Overview</h3>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded p-4">
              <h5 className="font-bold">Global Sales</h5>
              <p>Shipped Products</p>
              <div className="mt-2">
                <canvas id="lineChartExample"></canvas>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded p-4">
              <h5 className="font-bold">2018 Sales</h5>
              <p>All products</p>
              <div className="mt-2">
                <canvas id="lineChartExampleWithNumbersAndGrid"></canvas>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-md rounded p-4">
              <h5 className="font-bold">Email Statistics</h5>
              <p>24 Hours Performance</p>
              <div className="mt-2">
                <canvas id="barChartSimpleGradientsNumbers"></canvas>
              </div>
            </div>
          </div>

          {/* Tasks Section */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-white shadow-md rounded p-4">
              <h5 className="font-bold">Tasks</h5>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" /> Task 1
                    </td>
                    <td className="text-right">
                      <button className="bg-blue-500 text-white p-1 rounded">Edit</button>
                      <button className="bg-red-500 text-white p-1 rounded">Remove</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> Task 2
                    </td>
                    <td className="text-right">
                      <button className="bg-blue-500 text-white p-1 rounded">Edit</button>
                      <button className="bg-red-500 text-white p-1 rounded">Remove</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Employees List Section */}
            <div className="bg-white shadow-md rounded p-4">
              <h5 className="font-bold">Employees Stats</h5>
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>City</th>
                    <th className="text-right">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dakota Rice</td>
                    <td>Niger</td>
                    <td>Oud-Turnhout</td>
                    <td className="text-right">$36,738</td>
                  </tr>
                  <tr>
                    <td>Minerva Hooper</td>
                    <td>Curaçao</td>
                    <td>Sinaai-Waas</td>
                    <td className="text-right">$23,789</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-200 text-center p-4 mt-8">
          &copy; {new Date().getFullYear()} Creative Tim. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
