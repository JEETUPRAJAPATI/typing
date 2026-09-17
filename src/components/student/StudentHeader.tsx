import React from 'react';
import { Link } from 'react-router-dom';
import { BellIcon, UserIcon, SearchIcon, SmartphoneIcon, MonitorDownIcon } from 'lucide-react';
import { COLLEGE_NAME, TAGLINE } from '../../data/brand';

interface StudentHeaderProps {
  showDownloadApp?: boolean;
  showSearch?: boolean;
}

export function StudentHeader({ showDownloadApp = false, showSearch = false }: StudentHeaderProps) {
  return (
    <header className="flex items-center gap-6 border-b border-slate-200 bg-white px-6 py-3">
      <div>
        <h1 className="font-display text-[22px] font-bold leading-tight text-navy-800">
          {COLLEGE_NAME}
        </h1>
        <p className="text-[12.5px] font-medium text-primary">{TAGLINE}</p>
      </div>

      {showSearch &&
      <div className="relative ml-auto w-[330px]">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
          type="search"
          placeholder="Search dictations, tests, PDFs..."
          aria-label="Search dictations, tests, PDFs"
          className="w-full rounded-full border border-slate-300 bg-white py-2 pl-9 pr-16 text-[13px] outline-none transition-colors duration-150 placeholder:text-slate-400 focus:border-primary" />
        
          <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-slate-300 px-1.5 py-[1px] text-[10px] text-slate-500">
            Ctrl K
          </span>
        </div>
      }

      {showDownloadApp &&
      <div className={`${showSearch ? '' : 'ml-auto'} rounded-lg bg-navy-900 px-3 py-2`}>
          <p className="mb-1.5 text-center text-[11px] font-semibold text-white">Download App</p>
          <div className="flex gap-2">
            <a
            href="#android"
            className="flex items-center gap-1.5 rounded bg-white px-2 py-1 text-navy-900 transition-colors duration-150 hover:bg-slate-100">
            
              <SmartphoneIcon className="h-4 w-4 text-primary" />
              <span className="leading-tight">
                <span className="block text-[8px] text-slate-500">Mobile app</span>
                <span className="block text-[10px] font-bold">Download Now</span>
              </span>
            </a>
            <a
            href="#windows"
            className="flex items-center gap-1.5 rounded bg-white px-2 py-1 text-navy-900 transition-colors duration-150 hover:bg-slate-100">
            
              <MonitorDownIcon className="h-4 w-4 text-primary" />
              <span className="leading-tight">
                <span className="block text-[8px] text-slate-500">Download On</span>
                <span className="block text-[10px] font-bold">Windows</span>
              </span>
            </a>
          </div>
        </div>
      }

      <div className={`flex items-center gap-4 ${showDownloadApp || showSearch ? '' : 'ml-auto'}`}>
        <button
          type="button"
          aria-label="Notifications, 3 unread"
          className="relative rounded-full p-1.5 text-navy-800 transition-colors duration-150 hover:bg-slate-100">
          
          <BellIcon className="h-[22px] w-[22px]" />
          <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-danger text-[9px] font-bold text-white">
            3
          </span>
        </button>
        <Link
          to="/login"
          className="flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
          
          <UserIcon className="h-4 w-4" />
          Login / Signup
        </Link>
      </div>
    </header>);

}