import React from 'react';
import SideBar from './_components/SideBar';
import DashboardHeader from './_components/DashboardHeader';
import WelcomeBanner from './_components/WelcomeBanner';

export default function DashboardLayout({ children }) {
  return (
    <div>
      {/* Sidebar */}
      <div className='md:w-64 hidden md:block fixed top-0 left-0 h-full z-50'>
        <SideBar />
      </div>

      {/* Main content area with left margin for sidebar */}
      <div className='md:ml-64'>
        <DashboardHeader />
        
        <div className='p-10'>
          {children}
        </div>
      </div>
    </div>
  );
}
