import LogoutButton from '@/components/DashboardAdmin/LogoutButton';
import Merch from '@/components/DashboardAdmin/Merch';
import Points from '@/components/DashboardAdmin/Points';
import React from 'react';

interface DashboardAdminPageProps {}

const DashboardAdminPage: React.FC<DashboardAdminPageProps> = () => {
  return (
    <div className=" min-h-screen flex flex-col h-full">
      <Merch />
      <Points />
      <LogoutButton />
    </div>
  );
};

export default DashboardAdminPage;
