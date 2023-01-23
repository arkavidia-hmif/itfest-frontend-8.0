import LogoutButton from "@/components/Dashboard-Admin/LogoutButton";
import Merch from "@/components/Dashboard-Admin/Merch";
import Points from "@/components/Dashboard-Admin/Points";
import React from "react";
// import Image from 'next/image';
// import Admin from "./icons/admin.svg";
// import Stock from "./icons/stock.svg";
// import Link from "next/link";

interface DashboardAdminPageProps {}

const DashboardAdminPage : React.FC<DashboardAdminPageProps> = () => {
    return (
      <div className=" min-h-screen flex flex-col h-full">
        <Merch />
        <Points />
        <LogoutButton />
      </div>
    );
};

export default DashboardAdminPage;
