import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SendIcon,
  RadioIcon,
  ClockIcon,
  UsersIcon,
  PlayIcon,
  CheckIcon,
  TrophyIcon,
  EyeIcon,
  LandmarkIcon,
  ArrowRightIcon } from
'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';

interface LiveTest {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  start: string;
  end: string;
  attempted?: boolean;
  logo?: string;
  theme?: 'blue' | 'green' | 'purple' | 'orange';
  liveCount?: number;
}

const activeTests: LiveTest[] = [
{
  id: 'ssc-chsl',
  title: 'SSC CHSL (Tier-1)',
  subtitle: 'SSC CHSL Live Typing Test 1',
  duration: '10 minutes',
  start: '10 Aug, 2026 09:30 AM',
  end: '10 Aug, 2026 11:50 PM',
  logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Staff_Selection_Commission.webp',
  theme: 'blue',
  liveCount: 1
},
{
  id: 'dp-hc',
  title: 'Delhi Police Head Constable (Ministerial)',
  subtitle: 'Delhi Police HC Live Typing Test 1',
  duration: '10 minutes',
  start: '10 Aug, 2026 09:30 AM',
  end: '10 Aug, 2026 11:50 PM',
  logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Delhi_Police_Logo.png',
  theme: 'green',
  liveCount: 1
},
{
  id: 'upsssc-st',
  title: 'UPSSSC Steno / Typist',
  subtitle: 'UPSSSC Steno/Typist Live Typing Test 1',
  duration: '10 minutes',
  start: '10 Aug, 2026 09:30 AM',
  end: '10 Aug, 2026 11:50 PM',
  logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Seal_of_Uttar_Pradesh.png',
  theme: 'purple',
  liveCount: 1
},
{
  id: 'ibps-clerk',
  title: 'IBPS Clerk (Typing)',
  subtitle: 'IBPS Clerk Live Typing Test 1',
  duration: '10 minutes',
  start: '10 Aug, 2026 09:30 AM',
  end: '10 Aug, 2026 11:50 PM',
  logo: 'https://en.wikipedia.org/wiki/Special:FilePath/IBPS_LOGO.png',
  theme: 'orange',
  liveCount: 1
}];

const upcomingTests: LiveTest[] = [
{
  id: 'ssc-cgl',
  title: 'SSC CGL Typing Test',
  subtitle: 'SSC CGL Live Typing Test 75',
  duration: '10 minutes',
  start: '11 Aug, 2026 09:30 AM',
  end: '11 Aug, 2026 11:50 PM'
},
{
  id: 'ib-sa',
  title: 'IB Security Assistant Typing',
  subtitle: 'IB SA Live Typing Test 21',
  duration: '10 minutes',
  start: '11 Aug, 2026 09:30 AM',
  end: '11 Aug, 2026 11:50 PM'
},
{
  id: 'hp-police',
  title: 'HP Police Constable Typing',
  subtitle: 'HP Police Live Typing Test 09',
  duration: '10 minutes',
  start: '11 Aug, 2026 09:30 AM',
  end: '11 Aug, 2026 11:50 PM'
},
{
  id: 'rajasthan-cet',
  title: 'Rajasthan CET Typing',
  subtitle: 'Rajasthan CET Live Typing Test 31',
  duration: '10 minutes',
  start: '12 Aug, 2026 09:30 AM',
  end: '12 Aug, 2026 11:50 PM'
},
{
  id: 'mp-vyapam',
  title: 'MP Vyapam Typing',
  subtitle: 'MP Vyapam Live Typing Test 18',
  duration: '10 minutes',
  start: '12 Aug, 2026 09:30 AM',
  end: '12 Aug, 2026 11:50 PM'
}];


const themeStyles = {
  blue: { bg: 'border-blue-100 bg-blue-50/60', badge: 'bg-blue-50 text-blue-700', number: 'text-blue-600', btn: 'bg-blue-600 hover:bg-blue-700' },
  green: { bg: 'border-emerald-100 bg-emerald-50/60', badge: 'bg-emerald-50 text-emerald-700', number: 'text-emerald-600', btn: 'bg-emerald-600 hover:bg-emerald-700' },
  purple: { bg: 'border-violet-100 bg-violet-50/60', badge: 'bg-violet-50 text-violet-700', number: 'text-violet-600', btn: 'bg-violet-600 hover:bg-violet-700' },
  orange: { bg: 'border-orange-100 bg-orange-50/60', badge: 'bg-orange-50 text-orange-700', number: 'text-orange-600', btn: 'bg-orange-500 hover:bg-orange-600' }
} as const;

function ActiveTestCard({ test }: {test: LiveTest;}) {
  const [broken, setBroken] = useState(false);
  const theme = themeStyles[test.theme ?? 'blue'];

  return (
    <article className={`relative flex flex-col items-center rounded-2xl border p-5 text-center shadow-card ${theme.bg}`}>
      <span className="absolute left-3 top-3 rounded bg-danger px-2 py-[2px] text-[9.5px] font-bold text-white">
        LIVE
      </span>

      <span className="mt-1 grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-full bg-white shadow-card">
        {test.logo && !broken ?
        <img
          src={test.logo}
          alt=""
          className="h-14 w-14 object-contain"
          onError={() => setBroken(true)} /> :


        <LandmarkIcon className="h-9 w-9 text-slate-400" aria-hidden="true" />
        }
      </span>

      <h4 className="mt-3 font-display text-[15px] font-bold leading-snug text-navy-800">{test.title}</h4>

      <p className={`mt-2.5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${theme.badge}`}>
        <RadioIcon className="h-3 w-3" aria-hidden="true" /> Live Tests Today
      </p>
      <p className={`mt-1.5 font-display text-[30px] font-extrabold ${theme.number}`}>{test.liveCount ?? 1}</p>

      <Link
        to={`/live-test/typing/${test.id}/slots`}
        className={`mt-3 flex w-full items-center justify-center gap-2 rounded-md py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 ${theme.btn}`}>

        View Tests <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>);

}

function TestCard({ test, upcoming }: {test: LiveTest;upcoming?: boolean;}) {
  return (
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-card">
      <div className="flex items-start">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-slate-100">
          <LandmarkIcon className="h-6 w-6 text-slate-500" aria-hidden="true" />
        </span>
        <span
          className={`rounded px-2 py-[2px] text-[9.5px] font-bold text-white ${
          upcoming ? 'bg-[#F59E0B]' : 'bg-success'}`
          }>
          
          {upcoming ? 'UPCOMING' : 'LIVE'}
        </span>
      </div>

      <h4 className="mt-3 text-center font-display text-[14.5px] font-bold text-navy-800">
        {test.title}
      </h4>
      <p className="mt-0.5 text-center text-[11.5px] text-slate-500">{test.subtitle}</p>

      <ul className="mt-3 space-y-1.5 border-t border-slate-100 pt-3 text-[12px] text-slate-600">
        <li className="flex items-center gap-2">
          <ClockIcon className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> Duration:{' '}
          {test.duration}
        </li>
        <li className="flex items-center gap-2">
          <UsersIcon className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> Real-time Competition
        </li>
      </ul>

      <ul className="mt-3 space-y-1.5 border-t border-slate-100 pt-3 text-[12px] text-slate-600">
        <li className="flex items-center gap-2">
          <PlayIcon className="h-3 w-3 fill-current text-success" aria-hidden="true" />
          <span className="font-semibold text-navy-800">Start:</span> {test.start}
        </li>
        <li className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[2px] bg-danger" aria-hidden="true" />
          <span className="font-semibold text-navy-800">Ends:</span> {test.end}
        </li>
      </ul>

      <div className="mt-auto space-y-2 pt-4">
        {upcoming ?
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-md border border-primary py-2.5 text-[12.5px] font-semibold text-primary transition-colors duration-150 hover:bg-primary-50">
          
            <EyeIcon className="h-4 w-4" aria-hidden="true" /> View Details
          </button> :
        test.attempted ?
        <>
            <p className="flex w-full items-center justify-center gap-2 rounded-md bg-success py-2.5 text-[12.5px] font-semibold text-white">
              <CheckIcon className="h-4 w-4" aria-hidden="true" /> Attempted
            </p>
            <Link
            to={`/live-test/typing/${test.id}/rank`}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[#F59E0B] py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-[#d98806]">

              <TrophyIcon className="h-4 w-4" aria-hidden="true" /> View Rank
            </Link>
          </> :

        <Link
          to={`/live-test/typing/${test.id}/slots`}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">

            <PlayIcon className="h-4 w-4 fill-current" aria-hidden="true" /> Start Test
          </Link>
        }
      </div>
    </article>);

}

export function LiveTestTyping() {
  return (
    <StudentLayout showSearch>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <h2 className="flex items-center gap-2 font-display text-[26px] font-bold text-navy-800">
          <RadioIcon className="h-6 w-6 text-primary" aria-hidden="true" /> Live Test (Typing)
        </h2>
        <div className="ml-auto">
          <Breadcrumbs crumbs={[{ label: 'Home', to: '/' }, { label: 'Live Test (Typing)' }]} />
        </div>
      </div>

      <div className="mb-5 flex items-center gap-3 rounded-xl bg-primary p-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/20">
          <SendIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-[14px] font-semibold text-white">Join Our Telegram Channel</p>
          <p className="text-[11.5px] text-white/85">
            Get Live Test PDFs, Results &amp; Updates instantly!
          </p>
        </div>
        <a
          href="#telegram"
          className="ml-auto flex shrink-0 items-center gap-2 rounded-md bg-white px-4 py-2 text-[12.5px] font-semibold text-primary-700 transition-colors duration-150 hover:bg-slate-100">
          
          <SendIcon className="h-4 w-4" aria-hidden="true" /> Join Now
        </a>
      </div>

      <h3 className="mb-3 flex items-center gap-2 border-b border-slate-200 pb-2 font-display text-[17px] font-bold text-navy-800">
        <RadioIcon className="h-5 w-5 text-success" aria-hidden="true" /> Active Live Tests
      </h3>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {activeTests.map((t) =>
        <ActiveTestCard key={t.id} test={t} />
        )}
      </div>

      <h3 className="mb-3 flex items-center gap-2 border-b border-slate-200 pb-2 font-display text-[17px] font-bold text-navy-800">
        <ClockIcon className="h-5 w-5 text-[#F59E0B]" aria-hidden="true" /> Upcoming Tests
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {upcomingTests.map((t) =>
        <TestCard key={t.id} test={t} upcoming />
        )}
      </div>
    </StudentLayout>);

}