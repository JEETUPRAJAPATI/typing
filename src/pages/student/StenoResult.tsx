import React from 'react';
import {
  TrophyIcon,
  DownloadIcon,
  PrinterIcon,
  RotateCcwIcon,
  UserIcon,
  FileTextIcon,
  ClipboardListIcon,
  ArrowLeftIcon,
  SearchCheckIcon,
  GitCompareIcon,
  Share2Icon,
  XSquareIcon,
  MinusSquareIcon,
  HelpCircleIcon,
  ShuffleIcon,
  PercentIcon,
  TargetIcon,
  KeyboardIcon,
  GaugeIcon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';
import { Panel } from '../../components/common/Pill';

const candidate = [
{ label: 'User ID', value: 'STU1001' },
{ label: 'Course', value: 'Stenography (English)' },
{ label: 'Roll No.', value: '2501001' },
{ label: 'Login Time', value: '25 May 2026, 10:00 AM' }];


const dictation = [
{
  label: 'Dictation Name',
  value:
  '(HSSC Steno) SSC PY — 2018 / 2019 — 09 Nov, 2019 — Interim Budget, KC 840 — Volume 23 — Dictation No. 501 — Topic: Constitution Amendment Recommendation — Words 398–538'
},
{ label: 'Dictation No.', value: '501' },
{ label: 'Language', value: 'English' }];


const testInfo = [
{ label: 'Test Type', value: 'Live Test', pill: true },
{ label: 'Test Date', value: '25 May 2026' },
{ label: 'Start Time', value: '10:00 AM' },
{ label: 'End Time', value: '10:12 AM' },
{ label: 'Total Time', value: '12 Min' },
{ label: 'Test Mode', value: 'Steno Test' }];


const metrics = [
{ icon: FileTextIcon, label: 'Total Words (Original)', value: '538', color: '#0D6EFD' },
{ icon: FileTextIcon, label: 'Total Words (Typed)', value: '542', color: '#6F42C1' },
{ icon: XSquareIcon, label: 'Full Mistakes', value: '8', color: '#DC3545' },
{ icon: MinusSquareIcon, label: 'Half Mistakes', value: '6', color: '#F59E0B' },
{ icon: HelpCircleIcon, label: 'Punctuation Mistakes', value: '4', color: '#0EA5E9' },
{ icon: ShuffleIcon, label: 'Transposition Mistakes', value: '3', color: '#F97316' },
{ icon: PercentIcon, label: '% of Mistakes', value: '3.90%', color: '#EC4899' },
{ icon: TargetIcon, label: 'Accuracy', value: '96.10%', color: '#198754' },
{ icon: KeyboardIcon, label: 'Keystrokes', value: '2,842', color: '#0D6EFD' },
{ icon: GaugeIcon, label: 'Typing Speed', value: '78 WPM', color: '#6F42C1' }];


const legend = [
{ label: 'Correct', color: '#198754' },
{ label: 'Spelling Mistake', color: '#DC3545' },
{ label: 'Omission', color: '#F59E0B' },
{ label: 'Addition', color: '#0D6EFD' },
{ label: 'Punctuation Error', color: '#0EA5E9' },
{ label: 'Transposition', color: '#F97316' },
{ label: 'Extra Space', color: '#6F42C1' },
{ label: 'Half Error', color: '#EAB308' }];


const actions = [
{ label: 'Back to Result List', icon: ArrowLeftIcon, tone: 'border-emerald-300 text-emerald-700' },
{ label: 'Click to Check Mistake', icon: SearchCheckIcon, tone: 'border-rose-300 text-rose-600' },
{ label: 'Click to Compare Passage', icon: GitCompareIcon, tone: 'border-primary text-primary' },
{ label: 'View Leaderboard', icon: TrophyIcon, tone: 'border-violet-300 text-violet-700' },
{ label: 'Re-Attempt Test', icon: RotateCcwIcon, tone: 'border-amber-300 text-amber-700' },
{ label: 'Download Result (PDF)', icon: DownloadIcon, tone: 'border-primary text-primary' },
{ label: 'Print Result', icon: PrinterIcon, tone: 'border-slate-300 text-slate-600' },
{ label: 'Share Result', icon: Share2Icon, tone: 'border-slate-300 text-slate-600' }];


export function StenoResult() {
  return (
    <AdminLayout searchPlaceholder="Search by dictation name, test no..." showActionButtons={false}>
      <div className="mb-4 flex items-start gap-3">
        <TrophyIcon className="h-8 w-8 text-primary" aria-hidden="true" />
        <div>
          <h2 className="font-display text-[26px] font-bold leading-tight text-navy-800">
            Steno Test Result
          </h2>
          <p className="text-[12.5px] text-slate-500">View your detailed performance and analysis</p>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <Breadcrumbs
          crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Test Analysis (Results)', to: '/test-analysis' },
          { label: 'Steno', to: '/test-analysis/eng-steno' },
          { label: 'Result Details' }]
          } />
        
        <div className="ml-auto flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-2 text-[12px] font-medium text-navy-800 transition-colors duration-150 hover:bg-slate-50">
            
            <DownloadIcon className="h-3.5 w-3.5" aria-hidden="true" /> Download Result (PDF)
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-2 text-[12px] font-medium text-navy-800 transition-colors duration-150 hover:bg-slate-50">
            
            <PrinterIcon className="h-3.5 w-3.5" aria-hidden="true" /> Print Result
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-2 text-[12px] font-medium text-navy-800 transition-colors duration-150 hover:bg-slate-50">
            
            <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden="true" /> Re-Attempt Test
          </button>
        </div>
      </div>

      <div className="mb-4 grid gap-4 xl:grid-cols-[1fr_1fr_1fr_280px]">
        <Panel title="Candidate Details">
          <div className="flex gap-3">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-400">
              <UserIcon className="h-8 w-8" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="flex items-center gap-2 font-display text-[16px] font-bold text-navy-800">
                Aman Kumar
                <span className="rounded bg-emerald-50 px-1.5 py-[1px] text-[10px] font-semibold text-emerald-700">
                  Qualified
                </span>
              </p>
              <dl className="mt-1.5 space-y-0.5 text-[11.5px]">
                {candidate.map((c) =>
                <div key={c.label} className="flex gap-1.5">
                    <dt className="w-[70px] shrink-0 text-slate-500">{c.label}</dt>
                    <dd className="font-medium text-navy-800">: {c.value}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </Panel>

        <Panel title="Dictation Details">
          <dl className="space-y-1.5 text-[11.5px]">
            {dictation.map((d) =>
            <div key={d.label}>
                <dt className="text-slate-500">{d.label}</dt>
                <dd className="font-medium leading-snug text-navy-800">{d.value}</dd>
              </div>
            )}
          </dl>
        </Panel>

        <Panel title="Test Information">
          <dl className="space-y-1 text-[11.5px]">
            {testInfo.map((t) =>
            <div key={t.label} className="flex gap-1.5">
                <dt className="w-[80px] shrink-0 text-slate-500">{t.label}</dt>
                <dd className="font-medium text-navy-800">
                  :{' '}
                  {t.pill ?
                <span className="rounded bg-primary-50 px-1.5 py-[1px] text-[10.5px] font-semibold text-primary-700">
                      {t.value}
                    </span> :

                t.value
                }
                </dd>
              </div>
            )}
          </dl>
        </Panel>

        <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-card">
          <TrophyIcon className="mx-auto h-16 w-16 text-warn" aria-hidden="true" />
          <p className="mx-auto mt-2 w-fit rounded bg-success px-4 py-1.5 font-display text-[13px] font-bold text-white">
            QUALIFIED
          </p>
          <p className="mt-3 text-[12.5px] font-semibold text-navy-800">Your Rank</p>
          <p className="font-display text-[30px] font-extrabold text-primary">12 / 856</p>
          <p className="text-[11.5px] text-slate-500">Minimum Qualifying Speed : 45 WPM</p>
        </div>
      </div>

      <ul className="mb-4 grid gap-3 sm:grid-cols-3 xl:grid-cols-10">
        {metrics.map((m) =>
        <li
          key={m.label}
          className="rounded-xl border border-slate-200 bg-white p-2.5 text-center shadow-card">
          
            <m.icon className="mx-auto h-4 w-4" style={{ color: m.color }} aria-hidden="true" />
            <p className="mt-1 text-[10px] leading-snug text-slate-500">{m.label}</p>
            <p className="font-display text-[16px] font-bold text-navy-800">{m.value}</p>
          </li>
        )}
      </ul>

      <Panel className="mb-4">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <h3 className="font-display text-[15px] font-semibold text-primary">Your Typed Text</h3>
          {legend.map((l) =>
          <span
            key={l.label}
            className="flex items-center gap-1.5 text-[10.5px] font-medium text-slate-600">
            
              <span
              className="h-2.5 w-2.5 rounded-[2px]"
              style={{ backgroundColor: l.color }}
              aria-hidden="true" />
            
              {l.label}
            </span>
          )}
          <span className="ml-auto flex items-center gap-2 text-[11px] text-slate-500">
            View Mode :
            <span className="rounded bg-primary px-2.5 py-1 text-[11px] font-semibold text-white">
              Highlighted
            </span>
            <span className="rounded border border-slate-300 px-2.5 py-1 text-[11px] font-medium text-slate-600">
              Plain Text
            </span>
          </span>
        </div>

        <div className="rounded-lg border border-slate-200 p-4">
          <p className="text-[13px] leading-[2.2] text-navy-900">
            Now, Sir, hon. Members will recall that the Bill was introduced in the House of the{' '}
            <mark className="bg-amber-100 px-1">
              <s className="text-rose-600">peoples</s> People
            </mark>{' '}
            on the 2nd September 1953. It has had a long history and, in one form or another, it has
            been before <mark className="bg-emerald-100 px-1">the</mark>{' '}
            <mark className="bg-rose-100 px-1 line-through">he</mark> public since the end of One
            thousand nine hundred forty nine. In the Statement of{' '}
            <mark className="bg-sky-100 px-1">objects Objects</mark> and{' '}
            <mark className="bg-sky-100 px-1">reasons, Reasons,</mark> the various stages through
            which the Bill has passed since 1946 have been summarised and{' '}
            <mark className="bg-emerald-100 px-1">I</mark>{' '}
            <mark className="bg-amber-100 px-1">
              <s className="text-rose-600">Ineed</s> need
            </mark>{' '}
            not recapitulate on this occasion the circumstances in which the then{' '}
            <mark className="bg-amber-100 px-1">
              <s className="text-rose-600">Governmentt</s> Government
            </mark>{' '}
            of India took the decision in early 1946 to{' '}
            <mark className="bg-emerald-100 px-1">initiate</mark>{' '}
            <mark className="bg-rose-100 px-1 line-through">INITI ATE</mark> an enquiry into the
            reform of our company law. I would remind{' '}
            <mark className="bg-emerald-100 px-1">hon.</mark>{' '}
            <mark className="bg-rose-100 px-1 line-through">hon./Members</mark>{' '}
            <mark className="bg-emerald-100 px-1">Members</mark> that between 1946 and 1948 the
            entire field of company <mark className="bg-emerald-100 px-1">law</mark>{' '}
            <mark className="bg-rose-100 px-1 line-through">law/was,carefully</mark>{' '}
            <mark className="bg-emerald-100 px-1">was carefully</mark> reviewed by two distinguished
            company lawyers who were appointed to recommend the broad lines on which the present Act,
            should be revised. Their recommendations were examined in the then Ministry of Commerce
            and certain tentative departmental views which emerged were circulated in a comprehensive
            memorandum to all recognised trade and industrial associations,{' '}
            <mark className="bg-sky-100 px-1">BAR bar</mark> associations, the High Courts and the
            State Governments. That brought us to the end of 1949. Many representations on this
            memorandum were duly received from Chambers of Commerce, trade and industrial
            associations, State{' '}
            <mark className="bg-amber-100 px-1">
              <s className="text-rose-600">Governmentts</s> Governments
            </mark>{' '}
            and the general public. At the end of 1950, the{' '}
            <mark className="bg-amber-100 px-1">
              <s className="text-rose-600">Governmentt</s> Government
            </mark>{' '}
            of India appointed a Committee under the Chairmanship of Shri Bhaba to go into the entire
            question of the revision of the Companies Act, with particular reference to its bearing on
            the development of trade and industry in this country.
          </p>
        </div>
      </Panel>

      <Panel>
        <div className="flex flex-wrap gap-2.5">
          {actions.map((a) =>
          <button
            key={a.label}
            type="button"
            className={`flex items-center gap-1.5 rounded-md border bg-white px-3 py-2 text-[12px] font-medium transition-colors duration-150 hover:bg-slate-50 ${a.tone}`}>
            
              <a.icon className="h-3.5 w-3.5" aria-hidden="true" /> {a.label}
            </button>
          )}
        </div>
        <p className="mt-3 flex items-center gap-2 rounded bg-slate-50 px-3 py-2 text-[11.5px] text-slate-500">
          <ClipboardListIcon className="h-3.5 w-3.5" aria-hidden="true" />
          Note: Results are calculated as per the selected result pattern and penalty settings.
        </p>
      </Panel>
    </AdminLayout>);

}