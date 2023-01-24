import LogoutButton from "@/components/Dashboard-Admin/LogoutButton";
import Merch from "@/components/Dashboard-Admin/Merch";
import Points from "@/components/Dashboard-Admin/Points";
import React from "react";

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
