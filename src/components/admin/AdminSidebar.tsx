import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon, HeadphonesIcon, ExternalLinkIcon, XIcon } from 'lucide-react';
import { adminNav } from '../../data/navigation';
import { NavIcon } from '../common/NavIcon';
import { LOGO_URL } from '../../data/brand';

interface AdminSidebarProps {
  summary?: {label: string;value: string;}[];
  showVisitWebsite?: boolean;
  mobileOpen?: boolean;
  onClose?: () => void;
}

export function AdminSidebar({ summary, showVisitWebsite = false, mobileOpen = false, onClose }: AdminSidebarProps) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<string[]>(['Test Management']);

  const toggle = (label: string) =>
  setOpen((prev) => prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]);

  return (
    <>
      {mobileOpen &&
      <button
        type="button"
        aria-label="Close navigation overlay"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/50 lg:hidden" />
      }
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-full w-[262px] shrink-0 flex-col bg-navy-900 text-white transition-transform duration-200 lg:static lg:translate-x-0 ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full'}`
        }>

      <div className="flex items-center gap-2.5 px-4 py-4">
        <img
          src={LOGO_URL}
          alt=""
          className="h-9 w-9 rounded-full bg-white object-contain p-[2px]" />

        <div className="min-w-0 flex-1 leading-tight">
          <p className="text-[12.5px] font-semibold">Balaji Typing &amp; Steno College</p>
          <p className="text-[10.5px] text-white/60">Admin Panel</p>
        </div>
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="rounded p-1 text-white/70 hover:bg-white/10 lg:hidden">

          <XIcon className="h-5 w-5" />
        </button>
      </div>

      <p className="px-4 pb-1.5 text-[10px] font-semibold tracking-wide text-white/40">
        MAIN NAVIGATION
      </p>

      <nav className="scroll-thin flex-1 overflow-y-auto pb-3" aria-label="Admin navigation">
        <ul>
          {adminNav.map((item) => {
            if (item.children) {
              const expanded = open.includes(item.label);
              const childActive = item.children.some((c) => c.to === pathname);
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => toggle(item.label)}
                    aria-expanded={expanded}
                    className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-[13px] transition-colors duration-150 hover:bg-white/10 ${
                    childActive ? 'bg-primary text-white' : 'text-white/85'}`
                    }>
                    
                    <NavIcon name={item.icon} />
                    <span className="truncate">{item.label}</span>
                    {expanded ?
                    <ChevronUpIcon className="ml-auto h-3.5 w-3.5" /> :

                    <ChevronDownIcon className="ml-auto h-3.5 w-3.5" />
                    }
                  </button>
                  {expanded &&
                  <ul>
                      {item.children.map((child) =>
                    <li key={child.to}>
                          <Link
                        to={child.to}
                        onClick={onClose}
                        className={`block py-2 pl-11 pr-4 text-[12.5px] transition-colors duration-150 ${
                        pathname === child.to ?
                        'bg-primary-700 font-medium text-white' :
                        'text-white/70 hover:bg-white/10'}`
                        }>

                            — {child.label}
                          </Link>
                        </li>
                    )}
                    </ul>
                  }
                </li>);

            }
            return (
              <li key={item.label}>
                <Link
                  to={item.to ?? '/admin'}
                  onClick={onClose}
                  className={`flex items-center gap-2.5 px-4 py-2.5 text-[13px] transition-colors duration-150 ${
                  pathname === item.to ?
                  'bg-primary font-medium text-white' :
                  'text-white/85 hover:bg-white/10'}`
                  }>
                  
                  <NavIcon name={item.icon} />
                  <span className="truncate">{item.label}</span>
                  {item.badge === 'new' &&
                  <span className="ml-auto rounded bg-success px-1.5 py-[1px] text-[9px] font-bold">
                      NEW
                    </span>
                  }
                </Link>
              </li>);

          })}
        </ul>
      </nav>

      {summary && summary.length > 0 &&
      <div className="mx-3 mb-3 rounded-lg bg-white/5 p-3">
          <p className="mb-2 text-[11.5px] font-semibold">System Summary</p>
          <ul className="space-y-1.5">
            {summary.map((row) =>
          <li key={row.label} className="flex items-center justify-between text-[11.5px]">
                <span className="text-white/70">{row.label}</span>
                <span className="font-semibold">{row.value}</span>
              </li>
          )}
          </ul>
        </div>
      }

      {showVisitWebsite ?
      <div className="px-3 pb-4">
          <Link
          to="/"
          className="flex items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-[12.5px] font-semibold transition-colors duration-150 hover:bg-primary-700">
          
            <ExternalLinkIcon className="h-4 w-4" /> Visit Website
          </Link>
          <p className="mt-3 text-[10.5px] text-white/50">© 2026 Balaji Typing &amp; Steno College</p>
          <p className="text-[10.5px] text-white/50">All rights reserved.</p>
        </div> :

      <div className="px-3 pb-4">
          <div className="flex items-center gap-2.5 rounded-lg bg-white/5 px-3 py-3">
            <HeadphonesIcon className="h-5 w-5 text-white/70" />
            <span className="leading-tight">
              <span className="block text-[12px] font-semibold">Need Help?</span>
              <span className="block text-[10.5px] text-white/60">Contact Support Team</span>
            </span>
          </div>
          <p className="mt-3 text-[10.5px] text-white/50">© 2026 Balaji Typing &amp; Steno College</p>
          <p className="text-[10.5px] text-white/50">All rights reserved.</p>
        </div>
      }
      </aside>
    </>);

}