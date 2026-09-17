import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckIcon,
  TargetIcon,
  UsersIcon,
  BarChart3Icon,
  MousePointerClickIcon,
  UsersRoundIcon,
  FileTextIcon,
  TrophyIcon,
  ShieldCheckIcon,
  SendIcon,
  YoutubeIcon,
  KeyboardIcon,
  PenLineIcon,
  MonitorIcon,
  HeadphonesIcon,
  BarChart2Icon } from
'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';

const heroFeatures = [
{ icon: TargetIcon, label: 'Real Exam Based Tests', bg: '#0D6EFD' },
{ icon: UsersIcon, label: 'Live Tests & All India Ranking', bg: '#6F42C1' },
{ icon: BarChart3Icon, label: 'Detailed Performance Analysis', bg: '#198754' },
{ icon: MousePointerClickIcon, label: 'User Friendly Interface', bg: '#FD7E14' }];


const prepareFor = [
'SSC Exams',
'Court Steno',
'Delhi Police',
'UP / State Exams',
'And Many More...'];


const primaryCards = [
{
  title: 'Typing Exam',
  text: 'Improve your typing speed and accuracy with exam oriented tests.',
  cta: 'Start Test',
  to: '/typing-exam',
  titleClass: 'text-primary',
  btnClass: 'bg-primary hover:bg-primary-700',
  bg: 'bg-[#EFF6FF]',
  ring: 'bg-[#DBEAFE]',
  icon: KeyboardIcon,
  iconClass: 'text-primary'
},
{
  title: 'English Steno Exam',
  text: 'Practice English Stenography dictations and enhance your skills.',
  cta: 'Start Test',
  to: '/english-steno',
  titleClass: 'text-success',
  btnClass: 'bg-success hover:bg-[#146c43]',
  bg: 'bg-[#F0FDF4]',
  ring: 'bg-[#DCFCE7]',
  icon: PenLineIcon,
  iconClass: 'text-success'
},
{
  title: 'Hindi Steno Exam',
  text: 'अभ्यास करें हिंदी स्टेनो के साथ और अपनी गति बढ़ाएं।',
  cta: 'Start Test',
  to: '/hindi-steno',
  titleClass: 'text-[#FD7E14]',
  btnClass: 'bg-[#FD7E14] hover:bg-[#e06f0f]',
  bg: 'bg-[#FFF7ED]',
  ring: 'bg-[#FFEDD5]',
  icon: PenLineIcon,
  iconClass: 'text-[#FD7E14]'
}];


const liveCards = [
{
  title: 'Live Test (Typing)',
  text: 'Participate in live typing tests and compete with aspirants across India.',
  cta: 'Join Live Test',
  to: '/live-test/typing',
  titleClass: 'text-primary',
  btnClass: 'bg-primary hover:bg-primary-700',
  bg: 'bg-[#EFF6FF]',
  icon: MonitorIcon
},
{
  title: 'Live Test (Steno)',
  text: 'Take live steno dictation tests and check your real-time rank.',
  cta: 'Join Live Test',
  to: '/live-test/steno',
  titleClass: 'text-[#6F42C1]',
  btnClass: 'bg-[#6F42C1] hover:bg-[#5c36a4]',
  bg: 'bg-[#F5F3FF]',
  icon: HeadphonesIcon
}];


const analysisRows = [
{ title: 'Typing', text: 'View detailed typing performance', tone: 'text-primary' },
{ title: 'Eng. Steno', text: 'Analyze your English Steno tests', tone: 'text-success' },
{ title: 'Hindi Steno', text: 'Analyze your Hindi Steno tests', tone: 'text-danger' }];


const stats = [
{ icon: UsersRoundIcon, value: '1,50,000+', label: 'Registered Users', color: '#0D6EFD' },
{ icon: FileTextIcon, value: '5,00,000+', label: 'Tests Attempted', color: '#198754' },
{ icon: TrophyIcon, value: 'Top Ranks', label: 'All India Level', color: '#FFC107' },
{ icon: ShieldCheckIcon, value: '100% Secure', label: 'Safe & Reliable', color: '#6F42C1' }];


export function Home() {
  return (
    <StudentLayout showDownloadApp>
      {/* Hero */}
      <section className="mb-4 overflow-hidden rounded-xl bg-navy-900 p-6">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="min-w-0 flex-1">
            <p className="font-display text-[19px] font-semibold text-[#38BDF8]">
              India&apos;s Trusted Platform for
            </p>
            <h2 className="font-display text-[46px] font-extrabold leading-none tracking-tight text-white">
              TYPING &amp; STENO
            </h2>
            <p className="mt-3 inline-block rounded bg-warn px-4 py-1.5 font-display text-[14px] font-bold text-navy-900">
              Practice | Improve | Succeed
            </p>
            <ul className="mt-5 space-y-2.5">
              {heroFeatures.map((f) =>
              <li key={f.label} className="flex items-center gap-2.5">
                  <span
                  className="grid h-7 w-7 place-items-center rounded-md text-white"
                  style={{ backgroundColor: f.bg }}>
                  
                    <f.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="border-b border-white/15 pb-1.5 pr-8 text-[13.5px] text-white/90">
                    {f.label}
                  </span>
                </li>
              )}
            </ul>
          </div>

          <div className="hidden w-[300px] shrink-0 items-center justify-center rounded-lg bg-white/5 lg:flex">
            <KeyboardIcon className="h-28 w-28 text-white/25" aria-hidden="true" />
          </div>

          <div className="w-full shrink-0 rounded-xl bg-navy-700/60 p-5 lg:w-[290px]">
            <p className="font-display text-[15px] font-bold text-warn">Prepare For</p>
            <ul className="mt-3 space-y-2.5">
              {prepareFor.map((item) =>
              <li key={item} className="flex items-center gap-2 text-[13.5px] text-white">
                  <CheckIcon className="h-4 w-4 text-[#22C55E]" aria-hidden="true" />
                  {item}
                </li>
              )}
            </ul>
            <div className="mt-4 flex justify-center">
              <TrophyIcon className="h-20 w-20 text-warn" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Course cards */}
      <div className="mb-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {primaryCards.map((card) =>
        <article
          key={card.title}
          className={`flex flex-col rounded-xl border border-slate-200 ${card.bg} p-5 shadow-card`}>
          
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <h3 className={`font-display text-[19px] font-bold ${card.titleClass}`}>
                  {card.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{card.text}</p>
              </div>
              <span className={`grid h-[74px] w-[74px] shrink-0 place-items-center rounded-full ${card.ring}`}>
                <card.icon className={`h-8 w-8 ${card.iconClass}`} aria-hidden="true" />
              </span>
            </div>
            <Link
            to={card.to}
            className={`mt-auto inline-flex w-fit rounded-md px-4 py-2 text-[12.5px] font-semibold text-white transition-colors duration-150 ${card.btnClass}`}>
            
              {card.cta}
            </Link>
          </article>
        )}
      </div>

      {/* Live tests + analysis */}
      <div className="mb-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {liveCards.map((card) =>
        <article
          key={card.title}
          className={`flex flex-col rounded-xl border border-slate-200 ${card.bg} p-5 shadow-card`}>
          
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className={`font-display text-[19px] font-bold ${card.titleClass}`}>
                    {card.title}
                  </h3>
                  <span className="rounded bg-danger px-1.5 py-[1px] text-[9px] font-bold text-white">
                    LIVE
                  </span>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{card.text}</p>
              </div>
              <span className="grid h-[74px] w-[74px] shrink-0 place-items-center rounded-lg bg-white">
                <card.icon className="h-8 w-8 text-slate-500" aria-hidden="true" />
              </span>
            </div>
            <Link
            to={card.to}
            className={`mt-auto inline-flex w-fit rounded-md px-4 py-2 text-[12.5px] font-semibold text-white transition-colors duration-150 ${card.btnClass}`}>
            
              {card.cta}
            </Link>
          </article>
        )}

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
          <h3 className="font-display text-[19px] font-bold text-primary">Test Analysis (Results)</h3>
          <div className="mt-3 flex items-start gap-4">
            <ul className="min-w-0 flex-1 space-y-2.5">
              {analysisRows.map((row) =>
              <li key={row.title} className="flex items-start gap-2">
                  <BarChart2Icon className={`mt-[2px] h-4 w-4 ${row.tone}`} aria-hidden="true" />
                  <span className="leading-tight">
                    <span className="block text-[13px] font-semibold text-navy-800">{row.title}</span>
                    <span className="block text-[11.5px] text-slate-500">{row.text}</span>
                  </span>
                </li>
              )}
            </ul>
            <div className="grid h-[86px] w-[110px] shrink-0 place-items-center rounded-lg bg-slate-50">
              <BarChart3Icon className="h-10 w-10 text-slate-400" aria-hidden="true" />
            </div>
          </div>
        </article>
      </div>

      {/* Stats strip */}
      <div className="mb-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) =>
        <div
          key={s.label}
          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card">
          
            <s.icon className="h-7 w-7 shrink-0" style={{ color: s.color }} aria-hidden="true" />
            <div>
              <p className="font-display text-[17px] font-bold text-navy-800">{s.value}</p>
              <p className="text-[12px] text-slate-500">{s.label}</p>
            </div>
          </div>
        )}
      </div>

      {/* Channel banners */}
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="flex items-center gap-3 rounded-xl bg-[#229ED9] p-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/20">
            <SendIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-[14px] font-semibold text-white">Join Our Telegram Channel</p>
            <p className="text-[11.5px] text-white/85">
              Get instant updates, live test alerts, study material &amp; more.
            </p>
          </div>
          <a
            href="#telegram"
            className="ml-auto shrink-0 rounded-md bg-white px-4 py-2 text-[12.5px] font-semibold text-[#0b7cad] transition-colors duration-150 hover:bg-slate-100">
            
            Join Now
          </a>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-[#E62117] p-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/20">
            <YoutubeIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-[14px] font-semibold text-white">Subscribe Our YouTube Channel</p>
            <p className="text-[11.5px] text-white/85">
              Learn tips &amp; tricks, watch tutorials and improve your speed.
            </p>
          </div>
          <a
            href="#youtube"
            className="ml-auto shrink-0 rounded-md bg-white px-4 py-2 text-[12.5px] font-semibold text-[#c2160e] transition-colors duration-150 hover:bg-slate-100">
            
            Subscribe Now
          </a>
        </div>
      </div>
    </StudentLayout>);

}