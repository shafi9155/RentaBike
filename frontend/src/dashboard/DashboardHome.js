import React from "react";
import Layout from "../components/Layout";

const DashboardHome = () => {
  return (
    <Layout title={"rentaride : Dashboard"}>
      <div className='flex justify-center w-full align-middle '>
        <h1 className='text-4xl text-[#000839] mt-44 font-bold'>
          Welcome to Rent-A-Ride Dashboard !!
        </h1>
      </div>
    </Layout>
  );
};

export default DashboardHome;
