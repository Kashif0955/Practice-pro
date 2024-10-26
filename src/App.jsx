import React from "react";
import LoginForm from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import EmployeeDashboard from "./components/UserDashboard";

const App = () => {
  return (
    <>
      {/* <LoginForm /> */}
      {/* <AdminDashboard/> */}
      <EmployeeDashboard/>
    </>
  );
};

export default App;
