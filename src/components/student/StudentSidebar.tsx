import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon, SendIcon, YoutubeIcon, XIcon } from 'lucide-react';
import { studentNav, NavItem } from '../../data/navigation';
import { NavIcon } from '../common/NavIcon';
import { LOGO_URL } from '../../data/brand';

interface StudentSidebarProps {
  mobileOpen?: boolean;
  onClose?: () => void;
}

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

export function StudentSidebar({ mobileOpen = false, onClose }: StudentSidebarProps) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<string | null>('Test Analysis');

  const toggle = (label: string) =>
  setOpen((prev) => prev === label ? null : label);

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
        className={`fixed inset-y-0 left-0 z-50 flex h-full w-[276px] shrink-0 flex-col border-r border-slate-200 bg-white text-navy-800 transition-transform duration-200 lg:static lg:translate-x-0 ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full'}`
        }>

      <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-4">
        <img
          src={LOGO_URL}
          alt="Balaji Typing College"
          className="h-11 w-11 rounded-full bg-white object-contain p-[2px] shadow-card" />

        <div className="min-w-0 flex-1 leading-tight">
          <p className="font-display text-[13px] font-semibold text-navy-800">Balaji Typing &amp;</p>
          <p className="font-display text-[13px] font-semibold text-navy-800">Steno College</p>
        </div>
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="rounded p-1 text-slate-400 hover:bg-slate-100 lg:hidden">

          <XIcon className="h-5 w-5" />
        </button>
      </div>

      <nav className="scroll-thin flex-1 overflow-y-auto px-3 py-3" aria-label="Student navigation">
        <ul className="space-y-[3px]">
          {studentNav.map((item) => {
            const active = item.to === pathname;
            const color = item.color ?? '#38BDF8';
            if (item.children) {
              const expanded = open === item.label;
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => toggle(item.label)}
                    aria-expanded={expanded}
                    className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] transition-all duration-200 ease-out hover:translate-x-1 ${
                    expanded ? 'bg-slate-100 text-navy-800' : 'text-slate-600 hover:bg-slate-50'}`
                    }>

                    <span
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-lg"
                      style={{ backgroundColor: `${color}1F` }}>

                      <NavIcon name={item.icon} className="h-4 w-4" style={{ color }} />
                    </span>
                    <span className="truncate">{item.label}</span>
                    {expanded ?
                    <ChevronUpIcon className="ml-auto h-3.5 w-3.5" /> :

                    <ChevronDownIcon className="ml-auto h-3.5 w-3.5" />
                    }
                  </button>
                  {expanded &&
                  <ul className="ml-[15px] mt-1 space-y-[2px] border-l-2 pl-3" style={{ borderColor: `${color}40` }}>
                      {item.children.map((child) => {
                        const childActive = pathname === child.to;
                        return (
                          <li key={child.to}>
                            <Link
                            to={child.to}
                            onClick={onClose}
                            className={`flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-[12.5px] font-medium transition-all duration-200 ease-out hover:translate-x-1 ${
                            childActive ?
                            'border-amber-400 bg-primary text-white hover:bg-primary-700' :
                            'border-transparent text-slate-600 hover:bg-slate-50'}`
                            }>

                              <NavIcon name="barChart" className="h-3.5 w-3.5" style={{ color: childActive ? '#fff' : color }} />
                              {child.label}
                            </Link>
                          </li>);

                      })}
                    </ul>
                  }
                </li>);

            }
            return (
              <li key={item.label}>
                <Link
                  to={item.to ?? '/'}
                  onClick={onClose}
                  className={`flex items-center gap-2.5 rounded-md border px-2.5 py-2 text-[13px] transition-all duration-200 ease-out hover:translate-x-1 ${
                  active ?
                  'border-amber-400 bg-primary font-semibold text-white shadow-sm hover:bg-primary-700' :
                  'border-transparent text-slate-600 hover:bg-slate-50'}`
                  }>

                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-lg"
                    style={{ backgroundColor: active ? 'rgba(255,255,255,0.25)' : `${color}1F` }}>

                    <NavIcon name={item.icon} className="h-4 w-4" style={{ color: active ? '#fff' : color }} />
                  </span>
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
      </aside>
    </>);

}