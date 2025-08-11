"use client";
import React from 'react';
import Image from 'next/image';
import { LayoutDashboard, Shield, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';

function SideBar() {
  const MenuList = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Upgrade', icon: Shield, path: '/dashboard/upgrade' },
    { name: 'Profile', icon: UserCircle, path: '/dashboard/user' },
  ];
  const path = usePathname();

  return (
    <div className="h-screen w-64 shadow-md p-5 flex flex-col bg-white relative">
      {/* Logo */}
      <div className="flex items-center justify-center gap-2 p-4">
        <Image src="/logo.svg" alt="Scholar 101 Logo" width={40} height={40} />
        <h2 className="text-2xl font-bold">Scholar 101</h2>
      </div>

      {/* Create Button */}
      <div className="mt-6">
        <Link href={'/create'} className='w-full'>
        <Button className="w-full rounded-[8px]">+ Create New</Button>
        </Link>
      </div>

      {/* Menu */}
      <div className="mt-6 space-y-2 flex-1">
        {MenuList.map((menu, index) => (
          <Link
            href={menu.path}
            key={index}
            className={`flex items-center gap-4 p-3 rounded-[8px] hover:bg-slate-100 transition-all
              ${path === menu.path ? 'bg-slate-200 font-semibold' : ''}`}
          >
            <menu.icon className="w-5 h-5" />
            <span className="text-base">{menu.name}</span>
          </Link>
        ))}
      </div>

      {/* Footer Section */}
      <div className="p-3 rounded-[8px] bg-slate-100 w-[85%] absolute bottom-10">
        <h2 className="text-sm mb-1 font-semibold">Available Credits</h2>
        <Progress value={30} className="mt-1" />
        <p className="text-xs mt-1 text-muted-foreground">1 of 5 Used</p>
        <Link
          href="/dashboard/upgrade"
          className="text-xs text-blue-600 hover:underline mt-2 inline-block"
        >
          Upgrade Plan
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
