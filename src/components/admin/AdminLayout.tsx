import React from 'react';
import {
  MenuIcon,
  SearchIcon,
  BellIcon,
  MailIcon,
  MessageSquareIcon,
  ZapIcon,
  ChevronDownIcon } from
'lucide-react';
import { AdminSidebar } from './AdminSidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
  searchPlaceholder?: string;
  showActionButtons?: boolean;
  summary?: {label: string;value: string;}[];
  showVisitWebsite?: boolean;
}

export function AdminLayout({
  children,
  searchPlaceholder = 'Search anything...',
  showActionButtons = true,
  summary,
  showVisitWebsite = false
}: AdminLayoutProps) {
  return (
    <div className="flex h-full min-h-screen w-full bg-canvas">
      <AdminSidebar summary={summary} showVisitWebsite={showVisitWebsite} />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-4 border-b border-slate-200 bg-white px-5 py-2.5">
          <button
            type="button"
            aria-label="Toggle navigation"
            className="rounded p-1.5 text-slate-600 transition-colors duration-150 hover:bg-slate-100">
            
            <MenuIcon className="h-5 w-5" />
          </button>

          <div className="relative w-[420px]">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              className="w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-16 text-[12.5px] outline-none transition-colors duration-150 placeholder:text-slate-400 focus:border-primary" />
            
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10.5px] text-slate-400">
              Ctrl + /
            </span>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <button
              type="button"
              aria-label="Notifications, 12 unread"
              className="relative rounded-full p-1.5 text-navy-800 transition-colors duration-150 hover:bg-slate-100">
              
              <BellIcon className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-danger text-[9px] font-bold text-white">
                12
              </span>
            </button>
            <button
              type="button"
              aria-label="Messages, 6 unread"
              className="relative rounded-full p-1.5 text-navy-800 transition-colors duration-150 hover:bg-slate-100">
              
              <MailIcon className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-danger text-[9px] font-bold text-white">
                6
              </span>
            </button>

            {showActionButtons &&
            <>
                <button
                type="button"
                className="flex items-center gap-1.5 rounded-md border border-slate-300 px-2.5 py-1.5 text-[12px] font-medium text-navy-800 transition-colors duration-150 hover:bg-slate-50">
                
                  <MessageSquareIcon className="h-3.5 w-3.5 text-primary" /> Message Center
                </button>
                <button
                type="button"
                className="flex items-center gap-1.5 rounded-md border border-slate-300 px-2.5 py-1.5 text-[12px] font-medium text-navy-800 transition-colors duration-150 hover:bg-slate-50">
                
                  <ZapIcon className="h-3.5 w-3.5 text-danger" /> Flash Banner
                </button>
              </>
            }

            <button
              type="button"
              className="flex items-center gap-2 rounded-md px-1.5 py-1 transition-colors duration-150 hover:bg-slate-100">
              
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-[11px] font-bold text-white">
                AD
              </span>
              <span className="text-left leading-tight">
                <span className="block text-[12.5px] font-semibold text-navy-800">Admin</span>
                <span className="block text-[10.5px] text-slate-500">Super Admin</span>
              </span>
              <ChevronDownIcon className="h-4 w-4 text-slate-500" />
            </button>
          </div>
        </header>

        <main className="scroll-thin flex-1 overflow-y-auto p-5">{children}</main>
      </div>
    </div>);

}