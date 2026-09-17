import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon, SendIcon, YoutubeIcon } from 'lucide-react';
import { studentNav, NavItem } from '../../data/navigation';
import { NavIcon } from '../common/NavIcon';
import { LOGO_URL } from '../../data/brand';

function Badge({ kind }: {kind: NonNullable<NavItem['badge']>;}) {
  if (kind === 'live') {
    return (
      <span className="ml-auto rounded bg-danger px-1.5 py-[1px] text-[9px] font-bold tracking-wide text-white">
        LIVE
      </span>);

  }
  if (kind === 'premium') {
    return (
      <span className="ml-auto rounded bg-warn px-1.5 py-[1px] text-[9px] font-bold text-navy-900">
        Go Premium
      </span>);

  }
  return (
    <span className="ml-auto rounded bg-success px-1.5 py-[1px] text-[9px] font-bold text-white">
      NEW
    </span>);

}

export function StudentSidebar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<string[]>(['Test Analysis']);

  const toggle = (label: string) =>
  setOpen((prev) => prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]);

  return (
    <aside className="flex h-full w-[248px] shrink-0 flex-col bg-navy-800 text-white">
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
        <img
          src={LOGO_URL}
          alt="Balaji Typing College"
          className="h-11 w-11 rounded-full bg-white object-contain p-[2px]" />
        
        <div className="leading-tight">
          <p className="font-display text-[13px] font-semibold">Balaji Typing &amp;</p>
          <p className="font-display text-[13px] font-semibold">Steno College</p>
        </div>
      </div>

      <nav className="scroll-thin flex-1 overflow-y-auto px-3 py-3" aria-label="Student navigation">
        <ul className="space-y-[3px]">
          {studentNav.map((item) => {
            const active = item.to === pathname;
            if (item.children) {
              const expanded = open.includes(item.label);
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => toggle(item.label)}
                    aria-expanded={expanded}
                    className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-[13px] text-white/85 transition-colors duration-150 hover:bg-white/10">
                    
                    <NavIcon name={item.icon} />
                    <span className="truncate">{item.label}</span>
                    {expanded ?
                    <ChevronUpIcon className="ml-auto h-3.5 w-3.5" /> :

                    <ChevronDownIcon className="ml-auto h-3.5 w-3.5" />
                    }
                  </button>
                  {expanded &&
                  <ul className="ml-4 mt-1 space-y-[2px] border-l border-white/15 pl-2">
                      {item.children.map((child) =>
                    <li key={child.to}>
                          <Link
                        to={child.to}
                        className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[12.5px] transition-colors duration-150 ${
                        pathname === child.to ?
                        'bg-primary text-white' :
                        'text-white/75 hover:bg-white/10'}`
                        }>
                        
                            <NavIcon name="barChart" className="h-3.5 w-3.5" />
                            {child.label}
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
                  to={item.to ?? '/'}
                  className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] transition-colors duration-150 ${
                  active ? 'bg-primary font-medium text-white' : 'text-white/85 hover:bg-white/10'}`
                  }>
                  
                  <NavIcon name={item.icon} />
                  <span className="truncate">{item.label}</span>
                  {item.badge && <Badge kind={item.badge} />}
                </Link>
              </li>);

          })}
        </ul>
      </nav>

      <div className="space-y-2.5 px-3 pb-4">
        <a
          href="#telegram"
          className="flex items-center gap-2.5 rounded-lg bg-[#229ED9] px-3 py-2.5 transition-colors duration-150 hover:bg-[#1c8cc1]">
          
          <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20">
            <SendIcon className="h-3.5 w-3.5" />
          </span>
          <span className="leading-tight">
            <span className="block text-[12.5px] font-semibold">Join Telegram</span>
            <span className="block text-[10.5px] text-white/85">Get Updates &amp; Live Test Alerts</span>
          </span>
        </a>
        <a
          href="#youtube"
          className="flex items-center gap-2.5 rounded-lg bg-[#E62117] px-3 py-2.5 transition-colors duration-150 hover:bg-[#c91b12]">
          
          <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20">
            <YoutubeIcon className="h-3.5 w-3.5" />
          </span>
          <span className="leading-tight">
            <span className="block text-[12.5px] font-semibold">Subscribe YouTube</span>
            <span className="block text-[10.5px] text-white/85">Tips, Tricks &amp; Free Tutorials</span>
          </span>
        </a>
      </div>
    </aside>);

}