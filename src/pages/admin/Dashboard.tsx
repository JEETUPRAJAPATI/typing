import React from 'react';
import {
  UsersIcon,
  UserCheckIcon,
  ClockIcon,
  UserXIcon,
  ClipboardListIcon,
  FileTextIcon,
  MicIcon,
  CalendarIcon,
  PlusIcon,
  BarChart3Icon,
  TrophyIcon,
  SettingsIcon,
  DatabaseIcon,
  HardDriveIcon,
  ActivityIcon,
  TargetIcon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { StatCard } from '../../components/common/StatCard';
import { Panel } from '../../components/common/Pill';

const topStats = [
{ icon: <UsersIcon className="h-5 w-5" />, iconBg: '#0D6EFD', label: 'Total Students', value: '28,654', action: 'View All Students' },
{ icon: <UserCheckIcon className="h-5 w-5" />, iconBg: '#198754', label: 'Active Students', value: '21,873', sub: '76.37%', subClass: 'text-success', action: 'View Active Students' },
{ icon: <ClockIcon className="h-5 w-5" />, iconBg: '#F59E0B', label: 'Pending Requests', value: '1,245', action: 'View Pending Requests' },
{ icon: <UserXIcon className="h-5 w-5" />, iconBg: '#6F42C1', label: 'Inactive / Expired', value: '5,536', sub: '↑ 19.32%', subClass: 'text-danger', action: 'View Inactive Students' }];


const quickActions = [
{ label: 'Add New Test', icon: ClipboardListIcon, color: '#0D6EFD' },
{ label: 'Add Student', icon: UsersIcon, color: '#198754' },
{ label: 'Add New Exam', icon: CalendarIcon, color: '#6F42C1' },
{ label: 'Add Live Chapter', icon: FileTextIcon, color: '#F59E0B' },
{ label: 'Add Preload Chapter', icon: FileTextIcon, color: '#0EA5E9' },
{ label: 'Add Steno Dictation', icon: MicIcon, color: '#EC4899' },
{ label: 'View Results', icon: BarChart3Icon, color: '#0D6EFD' },
{ label: 'Leaderboard', icon: TrophyIcon, color: '#F59E0B' },
{ label: 'System Settings', icon: SettingsIcon, color: '#64748B' }];


const recentTests = [
{ title: 'SSC CGL Typing Test 01', type: 'Live', category: 'SSC CGL', duration: '10 Min', status: 'Active', created: '10 Aug 2026' },
{ title: 'Delhi Police HCM Typing Test 37', type: 'Preload', category: 'Delhi Police', duration: '10 Min', status: 'Active', created: '09 Aug 2026' },
{ title: 'RRB NTPC Typing Test 02', type: 'Live', category: 'RRB NTPC', duration: '10 Min', status: 'Active', created: '09 Aug 2026' },
{ title: 'UPSSSC Junior Typing Test 15', type: 'Preload', category: 'UPSSSC', duration: '5 Min', status: 'Inactive', created: '08 Aug 2026' },
{ title: 'Court Steno Dictation 01', type: 'Live', category: 'Court Steno', duration: '15 Min', status: 'Active', created: '08 Aug 2026' }];


const recentExams = [
{ name: 'SSC CGL 2026', status: 'Active', students: '4,256', created: '10 Aug 2026' },
{ name: 'Delhi Police HCM 2026', status: 'Active', students: '2,856', created: '09 Aug 2026' },
{ name: 'RRB NTPC 2026', status: 'Active', students: '3,125', created: '09 Aug 2026' },
{ name: 'UPSSSC 2026', status: 'Inactive', students: '1,256', created: '08 Aug 2026' },
{ name: 'Court Steno 2026', status: 'Active', students: '2,045', created: '08 Aug 2026' }];


const topStudents = [
{ rank: 1, name: 'Rohit Kumar', initials: 'RK', exam: 'SSC CGL', wpm: '82.45', acc: '96.20%' },
{ rank: 2, name: 'Anjali Negi', initials: 'AN', exam: 'Delhi Police', wpm: '78.30', acc: '95.50%' },
{ rank: 3, name: 'Suman Prajapati', initials: 'SP', exam: 'RRB NTPC', wpm: '75.60', acc: '94.80%' },
{ rank: 4, name: 'Pooja Meena', initials: 'PM', exam: 'UPSSSC', wpm: '72.15', acc: '94.10%' },
{ rank: 5, name: 'Amit Singh', initials: 'AS', exam: 'SSC CGL', wpm: '70.80', acc: '93.75%' }];


const bottomStats = [
{ icon: <TargetIcon className="h-5 w-5" />, iconBg: '#0D6EFD', label: 'Total Tests (Live)', value: '4,562' },
{ icon: <ClipboardListIcon className="h-5 w-5" />, iconBg: '#F59E0B', label: 'Total Tests (Preload)', value: '3,125' },
{ icon: <FileTextIcon className="h-5 w-5" />, iconBg: '#198754', label: 'Total Results Generated', value: '12,546' },
{ icon: <DatabaseIcon className="h-5 w-5" />, iconBg: '#0EA5E9', label: 'Database Size', value: '89.4 GB' },
{ icon: <HardDriveIcon className="h-5 w-5" />, iconBg: '#6F42C1', label: 'Storage Used', value: '125.6 GB' },
{ icon: <ActivityIcon className="h-5 w-5" />, iconBg: '#64748B', label: 'Active Sessions', value: '156' }];


const statusTone: Record<string, string> = {
  Active: 'bg-emerald-50 text-emerald-700',
  Inactive: 'bg-rose-50 text-rose-700',
  Live: 'bg-emerald-50 text-emerald-700',
  Preload: 'bg-amber-50 text-amber-700'
};

const chartSeries = [
{ label: 'New Students', color: '#0D6EFD', points: [30, 34, 38, 36, 42, 44, 40, 46, 48, 52, 50, 56, 60, 58, 66] },
{ label: 'Exams Performed', color: '#198754', points: [18, 20, 22, 21, 24, 26, 24, 27, 29, 31, 30, 33, 35, 34, 38] },
{ label: 'Tests Attempted', color: '#6F42C1', points: [8, 9, 10, 9, 11, 12, 11, 13, 14, 15, 14, 16, 17, 16, 19] }];


function LineChart() {
  const width = 620;
  const height = 170;
  const max = 70;
  const toPath = (points: number[]) =>
  points.
  map((p, i) => {
    const x = i / (points.length - 1) * width;
    const y = height - p / max * height;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).
  join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-[170px] w-full" role="img" aria-label="Activity overview for the last 30 days">
      {[0, 1, 2, 3, 4].map((i) =>
      <line key={i} x1={0} x2={width} y1={i / 4 * height} y2={i / 4 * height} stroke="#E2E8F0" strokeWidth={1} />
      )}
      {chartSeries.map((s) =>
      <path key={s.label} d={toPath(s.points)} fill="none" stroke={s.color} strokeWidth={2} strokeLinecap="round" />
      )}
    </svg>);

}

export function AdminDashboard() {
  return (
    <AdminLayout showVisitWebsite>
      <div className="mb-4 flex flex-wrap items-start gap-4">
        <div>
          <h2 className="font-display text-[26px] font-bold leading-tight text-navy-800">Dashboard</h2>
          <p className="text-[12.5px] text-slate-500">
            Welcome back, Super Admin! Here&apos;s an overview of your platform.
          </p>
        </div>
        <button
          type="button"
          className="ml-auto flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-[12.5px] font-medium text-navy-800 transition-colors duration-150 hover:bg-slate-50">
          
          <CalendarIcon className="h-4 w-4 text-slate-500" aria-hidden="true" /> 10 Aug, 2026 - 10 Aug, 2026
        </button>
      </div>

      <div className="mb-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {topStats.map((s) =>
        <StatCard key={s.label} {...s} />
        )}
      </div>

      <div className="mb-4 grid gap-4 lg:grid-cols-3">
        <StatCard
          icon={<ClipboardListIcon className="h-5 w-5" />}
          iconBg="#6F42C1"
          label="Total Exam Performed"
          value="12,546"
          action="View All Exams" />
        
        <Panel>
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-success text-white">
              <FileTextIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <p className="text-[12px] text-slate-500">Total Typing Chapters</p>
              <div className="mt-1 flex gap-8">
                <span>
                  <span className="block text-[11px] text-slate-500">English</span>
                  <span className="font-display text-[20px] font-bold text-navy-800">1,245</span>
                </span>
                <span>
                  <span className="block text-[11px] text-slate-500">Hindi</span>
                  <span className="font-display text-[20px] font-bold text-navy-800">875</span>
                </span>
              </div>
            </div>
          </div>
          <button type="button" className="mt-3 text-[12px] font-semibold text-primary hover:text-primary-700">
            View Chapters →
          </button>
        </Panel>
        <Panel>
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#EC4899] text-white">
              <MicIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <p className="text-[12px] text-slate-500">Total Steno Dictation</p>
              <div className="mt-1 flex gap-8">
                <span>
                  <span className="block text-[11px] text-slate-500">English</span>
                  <span className="font-display text-[20px] font-bold text-navy-800">1,125</span>
                </span>
                <span>
                  <span className="block text-[11px] text-slate-500">Hindi</span>
                  <span className="font-display text-[20px] font-bold text-navy-800">768</span>
                </span>
              </div>
            </div>
          </div>
          <button type="button" className="mt-3 text-[12px] font-semibold text-primary hover:text-primary-700">
            View Dictations →
          </button>
        </Panel>
      </div>

      <div className="mb-4 grid gap-4 xl:grid-cols-[1fr_400px]">
        <Panel
          title="Activity Overview (Last 30 Days)"
          right={
          <select className="rounded-md border border-slate-300 px-2.5 py-1 text-[11.5px] outline-none focus:border-primary">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
            </select>
          }>
          
          <ul className="mb-2 flex flex-wrap gap-4">
            {chartSeries.map((s) =>
            <li key={s.label} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} aria-hidden="true" />
                {s.label}
              </li>
            )}
          </ul>
          <LineChart />
          <ul className="mt-1 flex justify-between text-[10.5px] text-slate-400">
            {['12 Jul', '16 Jul', '20 Jul', '24 Jul', '28 Jul', '1 Aug', '5 Aug', '10 Aug'].map((d) =>
            <li key={d}>{d}</li>
            )}
          </ul>
        </Panel>

        <Panel title="Quick Actions">
          <ul className="grid grid-cols-3 gap-2.5">
            {quickActions.map((a) =>
            <li key={a.label}>
                <button
                type="button"
                className="flex h-full w-full flex-col items-start gap-2 rounded-lg border border-slate-200 p-2.5 text-left transition-colors duration-150 hover:border-primary hover:bg-primary-50/40">
                
                  <span
                  className="grid h-7 w-7 place-items-center rounded"
                  style={{ backgroundColor: `${a.color}1A`, color: a.color }}>
                  
                    <a.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-[11.5px] font-medium leading-snug text-navy-800">{a.label}</span>
                </button>
              </li>
            )}
          </ul>
          <button
            type="button"
            className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-md bg-primary py-2 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
            
            <PlusIcon className="h-3.5 w-3.5" aria-hidden="true" /> Add New Test
          </button>
        </Panel>
      </div>

      <div className="mb-4 grid gap-4 xl:grid-cols-3">
        <Panel
          title="Recent Tests"
          right={<button type="button" className="text-[11.5px] font-semibold text-primary">View All →</button>}>
          
          <table className="w-full text-left text-[11.5px]">
            <thead className="text-slate-500">
              <tr>
                <th scope="col" className="pb-2 font-semibold">Test Title</th>
                <th scope="col" className="pb-2 font-semibold">Type</th>
                <th scope="col" className="pb-2 font-semibold">Category</th>
                <th scope="col" className="pb-2 font-semibold">Duration</th>
                <th scope="col" className="pb-2 font-semibold">Status</th>
                <th scope="col" className="pb-2 font-semibold">Created On</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentTests.map((t) =>
              <tr key={t.title}>
                  <td className="py-2 font-medium text-primary">{t.title}</td>
                  <td className="py-2">
                    <span className={`rounded px-1.5 py-[1px] text-[10.5px] font-medium ${statusTone[t.type]}`}>
                      {t.type}
                    </span>
                  </td>
                  <td className="py-2 text-navy-800">{t.category}</td>
                  <td className="py-2 text-navy-800">{t.duration}</td>
                  <td className="py-2">
                    <span className={`rounded px-1.5 py-[1px] text-[10.5px] font-medium ${statusTone[t.status]}`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="py-2 text-slate-500">{t.created}</td>
                </tr>
              )}
            </tbody>
          </table>
        </Panel>

        <Panel
          title="Recent Exams"
          right={<button type="button" className="text-[11.5px] font-semibold text-primary">View All →</button>}>
          
          <table className="w-full text-left text-[11.5px]">
            <thead className="text-slate-500">
              <tr>
                <th scope="col" className="pb-2 font-semibold">Exam Name</th>
                <th scope="col" className="pb-2 font-semibold">Status</th>
                <th scope="col" className="pb-2 font-semibold">Students</th>
                <th scope="col" className="pb-2 font-semibold">Created On</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentExams.map((e) =>
              <tr key={e.name}>
                  <td className="py-2 font-medium text-primary">{e.name}</td>
                  <td className="py-2">
                    <span className={`rounded px-1.5 py-[1px] text-[10.5px] font-medium ${statusTone[e.status]}`}>
                      {e.status}
                    </span>
                  </td>
                  <td className="py-2 text-navy-800">{e.students}</td>
                  <td className="py-2 text-slate-500">{e.created}</td>
                </tr>
              )}
            </tbody>
          </table>
        </Panel>

        <Panel
          title="Top Performing Students"
          right={<button type="button" className="text-[11.5px] font-semibold text-primary">View Leaderboard →</button>}>
          
          <table className="w-full text-left text-[11.5px]">
            <thead className="text-slate-500">
              <tr>
                <th scope="col" className="pb-2 font-semibold">Rank</th>
                <th scope="col" className="pb-2 font-semibold">Student Name</th>
                <th scope="col" className="pb-2 font-semibold">Net WPM</th>
                <th scope="col" className="pb-2 font-semibold">Accuracy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {topStudents.map((s) =>
              <tr key={s.name}>
                  <td className="py-2">
                    <span className="flex items-center gap-1 font-medium text-navy-800">
                      {s.rank}
                      {s.rank <= 3 && <TrophyIcon className="h-3 w-3 text-warn" aria-hidden="true" />}
                    </span>
                  </td>
                  <td className="py-2">
                    <span className="flex items-center gap-1.5">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-[8.5px] font-bold text-white">
                        {s.initials}
                      </span>
                      <span className="font-medium text-navy-800">{s.name}</span>
                    </span>
                  </td>
                  <td className="py-2 text-navy-800">{s.wpm}</td>
                  <td className="py-2 text-navy-800">{s.acc}</td>
                </tr>
              )}
            </tbody>
          </table>
        </Panel>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {bottomStats.map((s) =>
        <StatCard key={s.label} {...s} action="View Details" />
        )}
      </div>
    </AdminLayout>);

}