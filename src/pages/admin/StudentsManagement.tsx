import React from 'react';
import {
  PlusIcon,
  UploadIcon,
  SearchIcon,
  RotateCcwIcon,
  EyeIcon,
  PencilIcon,
  MoreVerticalIcon,
  UsersIcon,
  UserCheckIcon,
  ClockIcon,
  UserXIcon,
  BarChart3Icon,
  FileSpreadsheetIcon,
  SendIcon,
  UserIcon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { StatCard } from '../../components/common/StatCard';
import { Panel } from '../../components/common/Pill';
import { statusTone } from '../../data/adminTests';

const stats = [
{ icon: <UsersIcon className="h-5 w-5" />, iconBg: '#0D6EFD', label: 'Total Students', value: '2,856', sub: 'All Students in System' },
{ icon: <UserCheckIcon className="h-5 w-5" />, iconBg: '#198754', label: 'Active Students', value: '2,356', sub: '82.62% of total' },
{ icon: <ClockIcon className="h-5 w-5" />, iconBg: '#F59E0B', label: 'Pending Requests', value: '156', sub: 'Approval Required' },
{ icon: <UserXIcon className="h-5 w-5" />, iconBg: '#6F42C1', label: 'Inactive / Expired', value: '344', sub: '12.06% of total' },
{ icon: <BarChart3Icon className="h-5 w-5" />, iconBg: '#0EA5E9', label: 'New This Month', value: '248', sub: 'Joined this month' }];


interface StudentRow {
  roll: string;
  name: string;
  email: string;
  username: string;
  course: string;
  window: string;
  windowTime?: string;
  loginType: string;
  mobile: string;
  status: keyof typeof statusTone;
  joined: string;
}

const students: StudentRow[] = [
{ roll: 'STU0001', name: 'Aman Kumar', email: 'aman.kumar@email.com', username: 'aman123', course: 'English Typing', window: 'Anytime', loginType: 'Multiple Device', mobile: '9876543210', status: 'Active', joined: '10 Aug 2026' },
{ roll: 'STU0002', name: 'Pooja Sharma', email: 'pooja.sharma@email.com', username: 'pooja456', course: 'Hindi Typing', window: 'Fix Time', windowTime: '06:00 AM - 10:00 PM', loginType: 'Single Device', mobile: '9876543211', status: 'Active', joined: '07 Aug 2026' },
{ roll: 'STU0003', name: 'Rahul Verma', email: 'rahul.verma@email.com', username: 'rahul789', course: 'English Steno', window: 'Anytime', loginType: 'Multiple Device', mobile: '9876543212', status: 'Pending', joined: '12 May 2026' },
{ roll: 'STU0004', name: 'Neha Yadav', email: 'neha.yadav@email.com', username: 'neha321', course: 'Hindi Steno', window: 'Fix Time', windowTime: '05:00 PM - 09:00 PM', loginType: 'Single Device', mobile: '9876543213', status: 'Active', joined: '15 Aug 2026' },
{ roll: 'STU0005', name: 'Vikash Singh', email: 'vikash.singh@email.com', username: 'vikash1122', course: 'English Typing', window: 'Anytime', loginType: 'Multiple Device', mobile: '9876543214', status: 'Inactive', joined: '20 Jun 2026' },
{ roll: 'STU0006', name: 'Simran Kaur', email: 'simran.kaur@email.com', username: 'simran667', course: 'Hindi Typing', window: 'Fix Time', windowTime: '06:30 AM - 08:30 PM', loginType: 'Single Device', mobile: '9876543215', status: 'Active', joined: '05 Aug 2026' },
{ roll: 'STU0007', name: 'Arjun Patel', email: 'arjun.patel@email.com', username: 'arjun890', course: 'English Steno', window: 'Anytime', loginType: 'Multiple Device', mobile: '9876543216', status: 'Expired', joined: '30 Jun 2026' },
{ roll: 'STU0008', name: 'Kavita Kumari', email: 'kavita.kumari@email.com', username: 'kavita234', course: 'Hindi Steno', window: 'Fix Time', windowTime: '07:00 AM - 07:00 PM', loginType: 'Single Device', mobile: '9876543217', status: 'Active', joined: '12 Aug 2026' }];


const courseSplit = [
{ label: 'English Typing', value: '1,024 (35.89%)', color: '#0D6EFD' },
{ label: 'Hindi Typing', value: '856 (30.02%)', color: '#198754' },
{ label: 'English Steno', value: '512 (17.95%)', color: '#F59E0B' },
{ label: 'Hindi Steno', value: '464 (16.28%)', color: '#6F42C1' }];


const quickActions = [
{ label: 'Add New Student', icon: PlusIcon },
{ label: 'Import Students', icon: UploadIcon },
{ label: 'Approve Pending', icon: SearchIcon, badge: '156' },
{ label: 'Send Message', icon: SendIcon },
{ label: 'Student Activity Report', icon: BarChart3Icon, wide: true }];


function DonutChart() {
  const segments = [
  { value: 35.89, color: '#0D6EFD' },
  { value: 30.02, color: '#198754' },
  { value: 17.95, color: '#F59E0B' },
  { value: 16.28, color: '#6F42C1' }];

  let offset = 0;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg viewBox="0 0 100 100" className="h-[110px] w-[110px] shrink-0" role="img" aria-label="Course wise student distribution">
      {segments.map((s) => {
        const length = s.value / 100 * circumference;
        const el =
        <circle
          key={s.color}
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

export function StudentsManagement() {
  return (
    <AdminLayout searchPlaceholder="Search by name, roll no., username, mobile, email...">
      <div className="mb-4 flex flex-wrap items-start gap-4">
        <div>
          <h2 className="font-display text-[26px] font-bold leading-tight text-navy-800">
            Students Management
          </h2>
          <p className="text-[12.5px] text-slate-500">
            View, manage and organize all students. Add new students and track their activity.
          </p>
        </div>
        <div className="ml-auto flex gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
            
            <PlusIcon className="h-4 w-4" aria-hidden="true" /> Add Student
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-[12.5px] font-medium text-navy-800 transition-colors duration-150 hover:bg-slate-50">
            
            <UploadIcon className="h-4 w-4" aria-hidden="true" /> Import Students
          </button>
        </div>
      </div>

      <div className="mb-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((s) =>
        <StatCard key={s.label} {...s} />
        )}
      </div>

      <section className="mb-4 rounded-xl border border-slate-200 bg-white shadow-card">
        <div className="flex flex-wrap items-end gap-2.5 border-b border-slate-100 p-3.5">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search by name, roll no., username, mobile, email..."
              aria-label="Search students"
              className="w-[300px] rounded-md border border-slate-300 py-2 pl-3 pr-8 text-[12px] outline-none focus:border-primary" />
            
          </div>
          {[
          { label: 'Status', placeholder: '-- All Status --', options: ['Active', 'Inactive', 'Pending', 'Expired'] },
          { label: 'Course / Type', placeholder: '-- All Course --', options: ['English Typing', 'Hindi Typing'] },
          { label: 'Login Window', placeholder: '-- All Login Window --', options: ['Anytime', 'Fix Time'] },
          { label: 'Login Type', placeholder: '-- All Login Type --', options: ['Single Device', 'Multiple Device'] }].
          map((f) =>
          <label key={f.label} className="block">
              <span className="mb-1.5 block text-[11.5px] font-semibold text-navy-800">{f.label}</span>
              <select className="w-[160px] rounded-md border border-slate-300 px-2.5 py-2 text-[12px] text-slate-600 outline-none focus:border-primary">
                <option>{f.placeholder}</option>
                {f.options.map((o) =>
              <option key={o}>{o}</option>
              )}
              </select>
            </label>
          )}
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-2 text-[12px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
            
            <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden="true" /> Reset
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
            
            <SearchIcon className="h-3.5 w-3.5" aria-hidden="true" /> Search
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] text-left">
            <thead className="bg-slate-50 text-[11.5px] font-semibold text-slate-600">
              <tr>
                <th scope="col" className="px-3 py-2.5">
                  <input type="checkbox" aria-label="Select all students" className="h-3.5 w-3.5 accent-primary" />
                </th>
                <th scope="col" className="px-3 py-2.5">Roll No.</th>
                <th scope="col" className="px-3 py-2.5">Student Name</th>
                <th scope="col" className="px-3 py-2.5">Username (Login ID)</th>
                <th scope="col" className="px-3 py-2.5">Course / Type</th>
                <th scope="col" className="px-3 py-2.5">Login Window</th>
                <th scope="col" className="px-3 py-2.5">Login Type</th>
                <th scope="col" className="px-3 py-2.5">Mobile</th>
                <th scope="col" className="px-3 py-2.5">Status</th>
                <th scope="col" className="px-3 py-2.5">Joined On</th>
                <th scope="col" className="px-3 py-2.5">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[11.5px]">
              {students.map((s) =>
              <tr key={s.roll} className="transition-colors duration-150 hover:bg-slate-50/70">
                  <td className="px-3 py-2.5">
                    <input type="checkbox" aria-label={`Select ${s.name}`} className="h-3.5 w-3.5 accent-primary" />
                  </td>
                  <td className="px-3 py-2.5 text-slate-600">{s.roll}</td>
                  <td className="px-3 py-2.5">
                    <span className="flex items-center gap-2">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-400">
                        <UserIcon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="leading-tight">
                        <span className="block font-semibold text-navy-800">{s.name}</span>
                        <span className="block text-[10.5px] text-slate-500">{s.email}</span>
                      </span>
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-slate-600">{s.username}</td>
                  <td className="px-3 py-2.5 text-slate-600">{s.course}</td>
                  <td className="px-3 py-2.5">
                    <span
                    className={`inline-block rounded px-2 py-[2px] text-[10.5px] font-medium ${
                    s.window === 'Anytime' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`
                    }>
                    
                      {s.window}
                    </span>
                    {s.windowTime &&
                  <span className="mt-0.5 block text-[10px] text-slate-500">{s.windowTime}</span>
                  }
                  </td>
                  <td className="px-3 py-2.5 text-slate-600">{s.loginType}</td>
                  <td className="px-3 py-2.5 text-slate-600">{s.mobile}</td>
                  <td className="px-3 py-2.5">
                    <span className={`rounded px-2 py-[2px] text-[10.5px] font-medium ${statusTone[s.status]}`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-slate-600">{s.joined}</td>
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-2 text-slate-400">
                      <button type="button" aria-label={`View ${s.name}`} className="hover:text-primary">
                        <EyeIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <button type="button" aria-label={`Edit ${s.name}`} className="hover:text-primary">
                        <PencilIcon className="h-3.5 w-3.5" aria-hidden="true" />
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
          <span>Showing 1 to 10 of 2,856 students</span>
          <label className="flex items-center gap-1.5">
            <select
              aria-label="Rows per page"
              className="rounded border border-slate-300 px-2 py-1 text-[11.5px] outline-none focus:border-primary">
              
              <option>10</option>
              <option>25</option>
            </select>
            per page
          </label>
          <nav aria-label="Pagination" className="flex items-center gap-1">
            {['1', '2', '3', '4', '5', '...', '286'].map((p) =>
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
          <button
            type="button"
            className="ml-auto flex items-center gap-1.5 rounded-md border border-emerald-300 px-3 py-1.5 text-[12px] font-medium text-emerald-700 transition-colors duration-150 hover:bg-emerald-50">
            
            <FileSpreadsheetIcon className="h-3.5 w-3.5" aria-hidden="true" /> Export Students
          </button>
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-3">
        <Panel title="Course / Type Wise Students">
          <div className="flex items-center gap-4">
            <DonutChart />
            <ul className="space-y-1.5 text-[11.5px]">
              {courseSplit.map((c) =>
              <li key={c.label} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: c.color }} aria-hidden="true" />
                  <span className="text-slate-600">{c.label}</span>
                  <span className="ml-auto font-medium text-navy-800">{c.value}</span>
                </li>
              )}
            </ul>
          </div>
        </Panel>

        <Panel title="Login Window Wise Students">
          <ul className="space-y-4 pt-2">
            {[
            { label: 'Anytime', value: '1,785 (62.60%)', pct: 62.6, color: '#0D6EFD' },
            { label: 'Fix Time', value: '1,071 (37.40%)', pct: 37.4, color: '#198754' }].
            map((r) =>
            <li key={r.label}>
                <p className="mb-1.5 flex text-[11.5px]">
                  <span className="text-slate-600">{r.label}</span>
                  <span className="ml-auto font-medium text-navy-800">{r.value}</span>
                </p>
                <span className="block h-1.5 w-full rounded-full bg-slate-100">
                  <span
                  className="block h-full rounded-full"
                  style={{ width: `${r.pct}%`, backgroundColor: r.color }} />
                
                </span>
              </li>
            )}
          </ul>
        </Panel>

        <Panel title="Quick Actions">
          <ul className="grid grid-cols-2 gap-2.5">
            {quickActions.map((a) =>
            <li key={a.label} className={a.wide ? 'col-span-2' : ''}>
                <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-[11.5px] font-medium text-navy-800 transition-colors duration-150 hover:border-primary hover:bg-primary-50/40">
                
                  <a.icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> {a.label}
                  {a.badge &&
                <span className="rounded bg-rose-500 px-1.5 text-[9.5px] font-bold text-white">
                      {a.badge}
                    </span>
                }
                </button>
              </li>
            )}
          </ul>
        </Panel>
      </div>
    </AdminLayout>);

}