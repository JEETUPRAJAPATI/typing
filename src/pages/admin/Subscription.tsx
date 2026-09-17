import React from 'react';
import {
  UsersIcon,
  CheckCircle2Icon,
  HourglassIcon,
  XCircleIcon,
  IndianRupeeIcon,
  TrendingUpIcon,
  PlusIcon,
  SettingsIcon,
  SearchIcon,
  FilterIcon,
  DownloadIcon,
  CalendarIcon,
  EyeIcon,
  MoreVerticalIcon,
  PencilIcon,
  ChevronRightIcon,
  CheckIcon,
  XIcon,
  CreditCardIcon,
  MailIcon,
  BarChart3Icon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';
import { Panel } from '../../components/common/Pill';

const overview = [
{ icon: UsersIcon, label: 'Total Subscriptions', value: '2,056', sub: 'All Time', color: '#0D6EFD' },
{ icon: CheckCircle2Icon, label: 'Active Subscriptions', value: '1,842', sub: '89.57% of Total', color: '#198754' },
{ icon: HourglassIcon, label: 'Expiring Soon', value: '112', sub: 'Within 7 Days', color: '#F59E0B' },
{ icon: XCircleIcon, label: 'Expired Subscriptions', value: '214', sub: '10.43% of Total', color: '#DC3545' },
{ icon: IndianRupeeIcon, label: 'Total Revenue', value: '₹ 12,54,320', sub: 'All Time', color: '#6F42C1' },
{ icon: TrendingUpIcon, label: 'This Month Revenue', value: '₹ 1,25,430', sub: 'May 2026', color: '#0EA5E9' }];


interface Plan {
  name: string;
  audience: string;
  price: string;
  duration: string;
  features: {label: string;on: boolean;}[];
  active: string;
  popular?: boolean;
}

const plans: Plan[] = [
{
  name: 'Basic Plan',
  audience: 'For beginners',
  price: '₹ 299',
  duration: 'Duration: 30 Days',
  popular: true,
  active: '56 Active',
  features: [
  { label: 'Typing Tests (Offline)', on: true },
  { label: 'Basic Analysis', on: true },
  { label: 'Practice Tests', on: true },
  { label: 'Performance Reports', on: true },
  { label: 'Live Tests', on: false },
  { label: 'Advanced Analytics', on: false },
  { label: 'Steno Tests', on: false }]

},
{
  name: 'Standard Plan',
  audience: 'For regular learners',
  price: '₹ 599',
  duration: 'Duration: 30 Days',
  active: '842 Active',
  features: [
  { label: 'Typing Tests (Live + Offline)', on: true },
  { label: 'Detailed Analysis', on: true },
  { label: 'Practice & Mock Tests', on: true },
  { label: 'Performance Reports', on: true },
  { label: 'Live Tests (Limited)', on: true },
  { label: 'Steno Tests', on: false },
  { label: 'Advanced Analytics', on: false }]

},
{
  name: 'Premium Plan',
  audience: 'For serious learners',
  price: '₹ 999',
  duration: 'Duration: 30 Days',
  active: '678 Active',
  features: [
  { label: 'All Typing Tests (Live + Offline)', on: true },
  { label: 'Detailed Analysis & Reports', on: true },
  { label: 'Practice & Mock Tests', on: true },
  { label: 'Live Tests (Unlimited)', on: true },
  { label: 'Steno Tests (Basic)', on: true },
  { label: 'Advanced Analytics (Basic)', on: true },
  { label: 'Priority Support', on: false }]

},
{
  name: 'Steno Plan',
  audience: 'For steno aspirants',
  price: '₹ 1,299',
  duration: 'Duration: 30 Days',
  active: '198 Active',
  features: [
  { label: 'Steno Tests (Live + Offline)', on: true },
  { label: 'Steno Dictations', on: true },
  { label: 'Detailed Steno Analysis', on: true },
  { label: 'Typing Tests (Free)', on: true },
  { label: 'Live Tests (Unlimited)', on: true },
  { label: 'Priority Support', on: true },
  { label: 'Advanced Analytics', on: true }]

},
{
  name: 'Pro Plan',
  audience: 'Complete access',
  price: '₹ 1,999',
  duration: 'Duration: 30 Days',
  active: '68 Active',
  features: [
  { label: 'All Typing & Steno Tests', on: true },
  { label: 'Live Tests (Unlimited)', on: true },
  { label: 'Advanced Analytics', on: true },
  { label: 'Detailed Reports', on: true },
  { label: 'Priority Support', on: true },
  { label: 'Early Access to New Features', on: true },
  { label: 'No Advertisements', on: true }]

}];


const subscriptions = [
{ no: 1, name: 'Aman Kumar', id: 'STU1001', course: 'Typing English', plan: 'Premium Plan', amount: '₹ 999', start: '01 May 2026', expiry: '31 May 2026', status: 'Active', mode: 'UPI' },
{ no: 2, name: 'Pooja Sharma', id: 'STU1002', course: 'Steno English', plan: 'Steno Plan', amount: '₹ 1,299', start: '28 Apr 2026', expiry: '28 May 2026', status: 'Active', mode: 'PhonePe' },
{ no: 3, name: 'Rahul Verma', id: 'STU1003', course: 'Typing Hindi', plan: 'Standard Plan', amount: '₹ 599', start: '20 Apr 2026', expiry: '20 May 2026', status: 'Active', mode: 'Google Pay' },
{ no: 4, name: 'Neha Yadav', id: 'STU1004', course: 'Typing English', plan: 'Basic Plan', amount: '₹ 299', start: '15 Apr 2026', expiry: '15 May 2026', status: 'Expiring Soon', mode: 'UPI' },
{ no: 5, name: 'Vikas Singh', id: 'STU1005', course: 'Steno Hindi', plan: 'Steno Plan', amount: '₹ 1,299', start: '10 Apr 2026', expiry: '10 May 2026', status: 'Expired', mode: 'Paytm' },
{ no: 6, name: 'Deepak Raj', id: 'STU1006', course: 'Typing English', plan: 'Premium Plan', amount: '₹ 999', start: '05 Apr 2026', expiry: '05 May 2026', status: 'Active', mode: 'UPI' }];


const statusTone: Record<string, string> = {
  Active: 'bg-emerald-50 text-emerald-700',
  'Expiring Soon': 'bg-amber-50 text-amber-700',
  Expired: 'bg-rose-50 text-rose-700'
};

const summarySplit = [
{ label: 'Premium Plan', value: '678 (36.8%)', color: '#6F42C1', pct: 36.8 },
{ label: 'Standard Plan', value: '842 (45.7%)', color: '#0D6EFD', pct: 45.7 },
{ label: 'Basic Plan', value: '56 (3.0%)', color: '#F59E0B', pct: 3 },
{ label: 'Steno Plan', value: '198 (10.7%)', color: '#10B981', pct: 10.7 },
{ label: 'Pro Plan', value: '68 (3.8%)', color: '#DC3545', pct: 3.8 }];


const quickActions = [
{ label: 'Add New Plan', icon: PlusIcon },
{ label: 'Plan Settings', icon: SettingsIcon },
{ label: 'Payment Settings', icon: CreditCardIcon },
{ label: 'Subscription Reports', icon: BarChart3Icon },
{ label: 'Email Notifications', icon: MailIcon }];


function Donut() {
  let offset = 0;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  return (
    <svg viewBox="0 0 100 100" className="h-[120px] w-[120px] shrink-0" role="presentation">
      {summarySplit.map((s) => {
        const length = s.pct / 100 * circumference;
        const el =
        <circle
          key={s.label}
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={s.color}
          strokeWidth="16"
          strokeDasharray={`${length} ${circumference - length}`}
          strokeDashoffset={-offset}
          transform="rotate(-90 50 50)" />;


        offset += length;
        return el;
      })}
    </svg>);

}

export function Subscription() {
  return (
    <AdminLayout
      searchPlaceholder="Search subscriptions..."
      showActionButtons={false}
      summary={[
      { label: 'Total Students', value: '2,856' },
      { label: 'Active Students', value: '2,356' },
      { label: 'Tests Conducted', value: '6,542' },
      { label: 'Typing Tests', value: '5,231' },
      { label: 'Steno Tests', value: '1,311' },
      { label: 'Active Subscriptions', value: '1,842' },
      { label: 'Expired Subscriptions', value: '214' }]
      }>
      
      <div className="mb-4 flex flex-wrap items-start gap-4">
        <div>
          <h2 className="font-display text-[26px] font-bold leading-tight text-navy-800">
            Subscription &amp; Plan Management
          </h2>
          <p className="text-[12.5px] text-slate-500">
            Manage subscription plans, pricing, and student subscriptions.
          </p>
        </div>
        <div className="ml-auto">
          <Breadcrumbs
            crumbs={[{ label: 'Home', to: '/admin' }, { label: 'Subscription & Plan' }]} />
          
        </div>
      </div>

      <h3 className="mb-2.5 font-display text-[15px] font-semibold text-navy-800">
        Subscription Overview
      </h3>
      <ul className="mb-5 grid gap-4 sm:grid-cols-3 xl:grid-cols-6">
        {overview.map((o) =>
        <li key={o.label} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-card">
            <span
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-white"
            style={{ backgroundColor: o.color }}>
            
              <o.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-500">{o.label}</p>
              <p className="font-display text-[18px] font-bold leading-tight text-navy-800">{o.value}</p>
              <p className="text-[10.5px] text-slate-500">{o.sub}</p>
            </div>
          </li>
        )}
      </ul>

      <div className="mb-3 flex flex-wrap items-end gap-3">
        <div>
          <h3 className="font-display text-[15px] font-semibold text-navy-800">Subscription Plans</h3>
          <p className="text-[12px] text-slate-500">Manage and customize subscription plans and pricing.</p>
        </div>
        <div className="ml-auto flex gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
            
            <PlusIcon className="h-3.5 w-3.5" aria-hidden="true" /> Add New Plan
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-[12px] font-medium text-navy-800 transition-colors duration-150 hover:bg-slate-50">
            
            <SettingsIcon className="h-3.5 w-3.5" aria-hidden="true" /> Plan Settings
          </button>
        </div>
      </div>

      <div className="relative mb-5">
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {plans.map((p) =>
          <li
            key={p.name}
            className={`relative flex flex-col rounded-xl border-2 bg-white p-4 shadow-card ${
            p.popular ? 'border-primary' : 'border-slate-200'}`
            }>
            
              {p.popular &&
            <span className="absolute right-3 top-3 rounded bg-success px-2 py-[2px] text-[9.5px] font-bold text-white">
                  Most Popular
                </span>
            }
              <h4 className="font-display text-[15px] font-bold text-navy-800">{p.name}</h4>
              <p className="text-[11.5px] text-slate-500">{p.audience}</p>
              <p className="mt-2.5 font-display text-[22px] font-extrabold text-primary">
                {p.price}
                <span className="text-[12px] font-medium text-slate-500"> / Month</span>
              </p>
              <p className="mt-0.5 text-[11.5px] text-slate-500">{p.duration}</p>

              <ul className="mt-3 space-y-1.5 border-t border-slate-100 pt-3">
                {p.features.map((f) =>
              <li key={f.label} className="flex items-start gap-1.5 text-[11.5px]">
                    {f.on ?
                <CheckIcon className="mt-[2px] h-3.5 w-3.5 shrink-0 text-success" aria-hidden="true" /> :

                <XIcon className="mt-[2px] h-3.5 w-3.5 shrink-0 text-danger" aria-hidden="true" />
                }
                    <span className={f.on ? 'text-slate-600' : 'text-slate-400'}>{f.label}</span>
                  </li>
              )}
              </ul>

              <div className="mt-auto flex items-center gap-2 pt-4">
                <span className="text-[12px] font-semibold text-navy-800">{p.active}</span>
                <button
                type="button"
                className="ml-auto flex items-center gap-1.5 rounded-md border border-primary px-3 py-1.5 text-[11.5px] font-medium text-primary transition-colors duration-150 hover:bg-primary-50">
                
                  <PencilIcon className="h-3 w-3" aria-hidden="true" /> Edit Plan
                </button>
              </div>
            </li>
          )}
        </ul>
        <button
          type="button"
          aria-label="Next plans"
          className="absolute -right-3 top-1/2 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-slate-300 bg-white shadow-card transition-colors duration-150 hover:bg-slate-50 xl:grid">
          
          <ChevronRightIcon className="h-4 w-4 text-slate-600" aria-hidden="true" />
        </button>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1fr_290px]">
        <section className="rounded-xl border border-slate-200 bg-white shadow-card">
          <div className="flex flex-wrap items-center gap-2.5 p-3.5">
            <div>
              <h3 className="font-display text-[14px] font-semibold text-navy-800">Active Subscriptions</h3>
              <p className="text-[11.5px] text-slate-500">View and manage student subscriptions.</p>
            </div>
            <div className="relative ml-auto">
              <SearchIcon className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Search by student name..."
                aria-label="Search subscriptions"
                className="w-[200px] rounded-md border border-slate-300 py-2 pl-3 pr-8 text-[12px] outline-none focus:border-primary" />
              
            </div>
            <select className="rounded-md border border-slate-300 px-2.5 py-2 text-[12px] outline-none focus:border-primary">
              <option>All Plans</option>
            </select>
            <select className="rounded-md border border-slate-300 px-2.5 py-2 text-[12px] outline-none focus:border-primary">
              <option>All Status</option>
            </select>
            <span className="relative">
              <CalendarIcon className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
              <input
                type="text"
                defaultValue="01 May 2026 - 31 May 2026"
                aria-label="Date range"
                className="w-[200px] rounded-md border border-slate-300 py-2 pl-8 pr-2.5 text-[12px] outline-none focus:border-primary" />
              
            </span>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-2 text-[12px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
              
              <FilterIcon className="h-3.5 w-3.5" aria-hidden="true" /> Filter
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-2 text-[12px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
              
              <DownloadIcon className="h-3.5 w-3.5" aria-hidden="true" /> Export
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-left">
              <thead className="bg-slate-50 text-[11px] font-semibold text-slate-600">
                <tr>
                  <th scope="col" className="px-3 py-2.5">S.No.</th>
                  <th scope="col" className="px-3 py-2.5">Student Name</th>
                  <th scope="col" className="px-3 py-2.5">User ID</th>
                  <th scope="col" className="px-3 py-2.5">Course</th>
                  <th scope="col" className="px-3 py-2.5">Plan Name</th>
                  <th scope="col" className="px-3 py-2.5">Amount</th>
                  <th scope="col" className="px-3 py-2.5">Start Date</th>
                  <th scope="col" className="px-3 py-2.5">Expiry Date</th>
                  <th scope="col" className="px-3 py-2.5">Status</th>
                  <th scope="col" className="px-3 py-2.5">Payment Mode</th>
                  <th scope="col" className="px-3 py-2.5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[11px]">
                {subscriptions.map((s) =>
                <tr key={s.no} className="transition-colors duration-150 hover:bg-slate-50/70">
                    <td className="px-3 py-2.5 text-slate-600">{s.no}</td>
                    <td className="px-3 py-2.5 font-medium text-navy-800">{s.name}</td>
                    <td className="px-3 py-2.5 text-slate-600">{s.id}</td>
                    <td className="px-3 py-2.5 text-slate-600">{s.course}</td>
                    <td className="px-3 py-2.5 text-slate-600">{s.plan}</td>
                    <td className="px-3 py-2.5 font-medium text-navy-800">{s.amount}</td>
                    <td className="px-3 py-2.5 text-slate-600">{s.start}</td>
                    <td className="px-3 py-2.5 text-slate-600">{s.expiry}</td>
                    <td className="px-3 py-2.5">
                      <span className={`rounded px-2 py-[2px] text-[10px] font-medium ${statusTone[s.status]}`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-slate-600">{s.mode}</td>
                    <td className="px-3 py-2.5">
                      <div className="flex items-center gap-2 text-slate-400">
                        <button type="button" aria-label={`View ${s.name}'s subscription`} className="hover:text-primary">
                          <EyeIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                        <button type="button" aria-label={`More actions for ${s.name}`} className="hover:text-primary">
                          <MoreVerticalIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 p-3.5 text-[12px] text-slate-600">
            <span>Showing 1 to 10 of 1,842 subscriptions</span>
            <label className="flex items-center gap-1.5">
              <select
                aria-label="Rows per page"
                className="rounded border border-slate-300 px-2 py-1 text-[11.5px] outline-none focus:border-primary">
                
                <option>10</option>
                <option>25</option>
              </select>
            </label>
            <nav aria-label="Pagination" className="flex items-center gap-1">
              {['1', '2', '3', '4', '5', '...', '185'].map((p) =>
              <button
                key={p}
                type="button"
                aria-current={p === '1' ? 'page' : undefined}
                className={`grid h-7 min-w-7 place-items-center rounded px-2 text-[11.5px] font-medium transition-colors duration-150 ${
                p === '1' ? 'bg-primary text-white' : 'border border-slate-300 hover:bg-slate-50'}`
                }>
                
                  {p}
                </button>
              )}
            </nav>
          </div>
        </section>

        <div className="space-y-4">
          <Panel title="Subscription Summary">
            <div className="flex items-center gap-3">
              <Donut />
              <ul className="space-y-1.5 text-[11px]">
                {summarySplit.map((s) =>
                <li key={s.label} className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: s.color }} aria-hidden="true" />
                    <span className="text-slate-600">{s.label}</span>
                    <span className="ml-auto font-medium text-navy-800">{s.value}</span>
                  </li>
                )}
              </ul>
            </div>
          </Panel>

          <Panel title="Quick Actions">
            <ul className="space-y-2">
              {quickActions.map((a) =>
              <li key={a.label}>
                  <button
                  type="button"
                  className="flex w-full items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-left text-[12px] font-medium text-navy-800 transition-colors duration-150 hover:border-primary hover:bg-primary-50/40">
                  
                    <a.icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> {a.label}
                  </button>
                </li>
              )}
            </ul>
          </Panel>
        </div>
      </div>
    </AdminLayout>);

}