import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PencilIcon,
  StarIcon,
  GiftIcon,
  FileTextIcon,
  ClockIcon,
  CrownIcon,
  RocketIcon } from
'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';
import { Panel, Pill } from '../../components/common/Pill';

const periods = ['Last 7 Days', 'Last 14 Days', 'Last 30 Days'] as const;

const mistakePattern = [
{ label: 'Backspace', color: '#EF4444', count: 0, pct: 0 },
{ label: 'Wrong Word', color: '#F59E0B', count: 0, pct: 0 },
{ label: 'Extra Characters', color: '#22C55E', count: 0, pct: 0 },
{ label: 'Omitted Words', color: '#0EA5E9', count: 0, pct: 0 }];


function PeriodTabs({
  value,
  onChange




}: {value: (typeof periods)[number];onChange: (v: (typeof periods)[number]) => void;}) {
  return (
    <div className="mb-3 flex flex-wrap gap-1.5">
      {periods.map((p) =>
      <button
        key={p}
        type="button"
        onClick={() => onChange(p)}
        className={`rounded-md px-2.5 py-1 text-[10.5px] font-semibold transition-colors duration-150 ${
        value === p ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`
        }>

          {p}
        </button>
      )}
    </div>);

}

export function MyAccount() {
  const navigate = useNavigate();
  const [speedPeriod, setSpeedPeriod] = useState<(typeof periods)[number]>('Last 7 Days');
  const [accuracyPeriod, setAccuracyPeriod] = useState<(typeof periods)[number]>('Last 7 Days');
  const [mistakePeriod, setMistakePeriod] = useState<(typeof periods)[number]>('Last 7 Days');

  return (
    <StudentLayout showDownloadApp>
      <div className="grid gap-4 xl:grid-cols-2">
        <Panel>
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-[14px] font-semibold text-navy-800">Student Profile</h3>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 text-[11.5px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">

              <PencilIcon className="h-3.5 w-3.5" aria-hidden="true" /> Edit Profile
            </button>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-violet-600 font-display text-[20px] font-bold text-white">
              S
            </span>
            <div>
              <p className="font-display text-[15px] font-bold text-navy-800">Super Admin</p>
              <p className="text-[12px] text-slate-500">admin</p>
              <p className="text-[12px] text-slate-500">+91 0000000000</p>
              <p className="text-[11px] text-slate-400">Member Since: 11 May 2026</p>
            </div>
          </div>
        </Panel>

        <Panel>
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-[14px] font-semibold text-navy-800">Subscription Details</h3>
            <a href="#subscription" className="text-[11.5px] font-semibold text-primary hover:text-primary-700">
              View Details
            </a>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div>
              <p className="text-[10.5px] text-slate-500">Plan Name</p>
              <p className="text-[13px] font-bold text-primary">Basic Plan</p>
            </div>
            <div>
              <p className="text-[10.5px] text-slate-500">Status</p>
              <Pill tone="green">Active</Pill>
            </div>
            <div>
              <p className="text-[10.5px] text-slate-500">Start Date</p>
              <p className="text-[13px] font-semibold text-navy-800">N/A</p>
            </div>
            <div>
              <p className="text-[10.5px] text-slate-500">Valid Plan</p>
              <p className="text-[13px] font-semibold text-navy-800">N/A</p>
            </div>
          </div>
        </Panel>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <button
          type="button"
          onClick={() => navigate('/write-review')}
          className="flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-left transition-colors duration-150 hover:bg-amber-100">

          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-amber-400 text-white">
            <StarIcon className="h-5 w-5 fill-current" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-[13px] font-bold text-navy-800">Write a Review</span>
            <span className="block text-[11px] text-slate-500">Share your success story!</span>
          </span>
        </button>

        <button
          type="button"
          onClick={() => navigate('/refer-earn')}
          className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-left transition-colors duration-150 hover:bg-emerald-100">

          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
            <GiftIcon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-[13px] font-bold text-navy-800">Refer &amp; Earn</span>
            <span className="block text-[11px] text-slate-500">Earn up to 15% commission on referrals!</span>
          </span>
        </button>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet-50 text-violet-600">
            <FileTextIcon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block font-display text-[18px] font-bold text-navy-800">0</span>
            <span className="block text-[11px] text-slate-500">Test Attempted (All Time)</span>
          </span>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange-50 text-orange-600">
            <ClockIcon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block font-display text-[18px] font-bold text-navy-800">00:00:00</span>
            <span className="block text-[11px] text-slate-500">Total Practice (Hours Practiced)</span>
          </span>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <Panel title="Speed Growth Chart (WPM)">
          <p className="-mt-2 mb-2.5 text-[10.5px] text-slate-500">Your Typing Speed Is Improving Consistently</p>
          <PeriodTabs value={speedPeriod} onChange={setSpeedPeriod} />
          <div className="grid h-[110px] place-items-center text-[12px] text-slate-400">Not enough data</div>
        </Panel>

        <Panel title="Accuracy Growth Chart (%)">
          <p className="-mt-2 mb-2.5 text-[10.5px] text-slate-500">Your Accuracy Is Getting Better</p>
          <PeriodTabs value={accuracyPeriod} onChange={setAccuracyPeriod} />
          <div className="grid h-[110px] place-items-center text-[12px] text-slate-400">Not enough data</div>
        </Panel>

        <Panel title="Mistake Pattern (Last 7 Days)">
          <p className="-mt-2 mb-2.5 text-[10.5px] text-slate-500">See Where You Make Mistakes Most</p>
          <PeriodTabs value={mistakePeriod} onChange={setMistakePeriod} />
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="font-display text-[22px] font-bold text-navy-800">1</p>
              <p className="text-[10px] text-slate-500">Total Mistakes</p>
            </div>
            <ul className="min-w-0 flex-1 space-y-1.5">
              {mistakePattern.map((m) =>
              <li key={m.label} className="flex items-center gap-1.5 text-[11px]">
                  <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: m.color }} />
                  <span className="min-w-0 flex-1 truncate text-slate-600">{m.label}</span>
                  <span className="shrink-0 font-medium text-navy-800">
                    {m.count} ({m.pct}%)
                  </span>
                </li>
              )}
            </ul>
          </div>
        </Panel>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-6 shadow-card">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-display text-[14px] font-semibold text-navy-800">
            <CrownIcon className="h-4 w-4 text-violet-600" aria-hidden="true" /> Subscription Status
          </h3>
          <Pill tone="amber">No Active Plan</Pill>
        </div>
        <div className="flex flex-col items-center py-6 text-center">
          <span className="mb-3 grid h-16 w-16 place-items-center rounded-full bg-slate-100 text-slate-300">
            <CrownIcon className="h-8 w-8" aria-hidden="true" />
          </span>
          <p className="font-display text-[17px] font-bold text-navy-800">No Active Subscription</p>
          <p className="mt-1.5 max-w-md text-[12.5px] text-slate-500">
            You&apos;re currently using the free plan. Upgrade to unlock premium features, advanced typing
            tests, and detailed analytics.
          </p>
          <button
            type="button"
            className="mt-4 flex items-center gap-2 rounded-md bg-violet-600 px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-violet-700">

            <RocketIcon className="h-4 w-4" aria-hidden="true" /> View Available Plans
          </button>
        </div>
      </div>
    </StudentLayout>);

}
