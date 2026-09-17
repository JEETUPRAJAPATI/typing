import React from 'react';
import {
  TrophyIcon,
  DownloadIcon,
  PrinterIcon,
  RotateCcwIcon,
  UserIcon,
  FileTextIcon,
  SettingsIcon,
  SparklesIcon,
  ArrowLeftIcon,
  SearchCheckIcon,
  GitCompareIcon,
  Share2Icon,
  CheckSquareIcon,
  XSquareIcon,
  PlusSquareIcon,
  MinusSquareIcon,
  SpaceIcon,
  HelpCircleIcon,
  CheckCircle2Icon,
  GaugeIcon,
  TargetIcon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';
import { Panel } from '../../components/common/Pill';

const candidate = [
{ label: 'User ID', value: 'STU1001' },
{ label: 'Course', value: 'Typing English' },
{ label: 'Roll No.', value: '2501001' },
{ label: 'Login Time', value: '25 May 2026, 10:00 AM' }];


const testInfo = [
{ label: 'Exam Name', value: 'DSSSB LDC Typing Test' },
{ label: 'Test No.', value: 'Test 07' },
{ label: 'Test Type', value: 'Live Test', pill: true },
{ label: 'Test Date', value: '25 May 2026, 10:00 AM' },
{ label: 'Result Date', value: '25 May 2026, 10:15 AM' },
{ label: 'Keyboard Layout', value: 'Inscript' },
{ label: 'Language', value: 'English' }];


const testSettings = [
{ label: 'Font Group', value: 'English - Medium' },
{ label: 'Backspace Mode', value: 'Current Word Backspace' },
{ label: 'Result Pattern', value: 'Standard Result Pattern' },
{ label: 'Speed Source', value: 'Typed Words (WPM)' },
{ label: 'Time Duration', value: '10 Minutes' },
{ label: 'Total Words', value: '410' }];


const overview = [
{ icon: FileTextIcon, label: 'Original Words', value: '410', color: '#0D6EFD' },
{ icon: UserIcon, label: 'Typed Words', value: '406', color: '#6F42C1' },
{ icon: XSquareIcon, label: 'Full Mistakes', value: '4', color: '#DC3545' },
{ icon: MinusSquareIcon, label: 'Half Mistakes', value: '3', color: '#F59E0B' },
{ icon: HelpCircleIcon, label: 'Punctuation Mistakes', value: '2', color: '#0EA5E9' },
{ icon: TargetIcon, label: 'Accuracy', value: '96.58%', color: '#198754' },
{ icon: GaugeIcon, label: 'Gross Speed (Typed Words)', value: '58 WPM', color: '#6F42C1' }];


const summary = [
{ icon: CheckSquareIcon, label: 'Correct Words', value: '384 (94.15%)', color: '#198754' },
{ icon: XSquareIcon, label: 'Incorrect Words', value: '7 (1.71%)', color: '#DC3545' },
{ icon: PlusSquareIcon, label: 'Extra Words', value: '2 (0.49%)', color: '#0D6EFD' },
{ icon: MinusSquareIcon, label: 'Missing Words', value: '4 (0.98%)', color: '#F59E0B' },
{ icon: SpaceIcon, label: 'Extra Spaces', value: '2 (0.49%)', color: '#0EA5E9' },
{ icon: HelpCircleIcon, label: 'Punctuation Mistakes', value: '2 (0.49%)', color: '#6F42C1' }];


const legend = [
{ label: 'Correct', color: '#198754' },
{ label: 'Spelling Mistake', color: '#DC3545' },
{ label: 'Omission', color: '#F59E0B' },
{ label: 'Addition', color: '#0D6EFD' },
{ label: 'Punctuation Error', color: '#0EA5E9' },
{ label: 'Transposition', color: '#F97316' },
{ label: 'Extra Space', color: '#6F42C1' },
{ label: 'Repetition', color: '#EC4899' },
{ label: 'Half Error', color: '#EAB308' }];


const coachRows = [
{ key: 'a.', label: 'Spelling Mistake', count: 1, penalty: '0.50' },
{ key: 'b.', label: 'Omission Mistake', count: 1, penalty: '0.60' },
{ key: 'c.', label: 'Addition Mistake', count: 1, penalty: '0.40' },
{ key: 'd.', label: 'Punctuation Error', count: 2, penalty: '0.40' },
{ key: 'e.', label: 'Transposition Error', count: 0, penalty: '0.00' },
{ key: 'f.', label: 'Extra Space Error', count: 1, penalty: '0.20' },
{ key: 'g.', label: 'Repetition Errors', count: 1, penalty: '0.20' },
{ key: 'h.', label: 'Half Error', count: 2, penalty: '1.50' }];


const aiBullets = [
'Strengths & Weaknesses',
'Speed & Accuracy Insights',
'Mistake Pattern Analysis',
'Personalized Improvement Tips',
'Compare with Top Performers'];


const actions = [
{ label: 'Back to Result List', icon: ArrowLeftIcon, tone: 'border-emerald-300 text-emerald-700' },
{ label: 'Click to Check Mistake', icon: SearchCheckIcon, tone: 'border-rose-300 text-rose-600' },
{ label: 'Click to Compare Passage', icon: GitCompareIcon, tone: 'border-primary text-primary' },
{ label: 'View Leaderboard', icon: TrophyIcon, tone: 'border-violet-300 text-violet-700' },
{ label: 'Re-Attempt Test', icon: RotateCcwIcon, tone: 'border-amber-300 text-amber-700' },
{ label: 'Download Result (PDF)', icon: DownloadIcon, tone: 'border-primary text-primary' },
{ label: 'Share Result', icon: Share2Icon, tone: 'border-slate-300 text-slate-600' }];


export function TypingResult() {
  return (
    <AdminLayout searchPlaceholder="Search test name, exam name..." showActionButtons={false}>
      <div className="mb-4 flex flex-wrap items-start gap-4">
        <div className="flex items-start gap-3">
          <TrophyIcon className="h-8 w-8 text-primary" aria-hidden="true" />
          <div>
            <h2 className="font-display text-[26px] font-bold leading-tight text-navy-800">
              Typing Test Result
            </h2>
            <p className="text-[12.5px] text-slate-500">View your detailed performance and analysis</p>
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <Breadcrumbs
          crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Test Analysis (Results)', to: '/test-analysis' },
          { label: 'Typing', to: '/test-analysis/typing' },
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

      <div className="grid gap-4 xl:grid-cols-[1fr_280px]">
        <div className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-3">
            <Panel
              title="Candidate Details"
              right={<UserIcon className="h-4 w-4 text-slate-400" aria-hidden="true" />}>
              
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

            <Panel title="Test Information">
              <dl className="space-y-1 text-[11.5px]">
                {testInfo.map((t) =>
                <div key={t.label} className="flex gap-1.5">
                    <dt className="w-[96px] shrink-0 text-slate-500">{t.label}</dt>
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

            <Panel title="Test Settings">
              <dl className="space-y-1 text-[11.5px]">
                {testSettings.map((t) =>
                <div key={t.label} className="flex gap-1.5">
                    <dt className="w-[108px] shrink-0 text-slate-500">{t.label}</dt>
                    <dd className="font-medium text-navy-800">: {t.value}</dd>
                  </div>
                )}
              </dl>
            </Panel>
          </div>

          <Panel title="Result Overview">
            <ul className="grid gap-3 sm:grid-cols-3 xl:grid-cols-7">
              {overview.map((o) =>
              <li
                key={o.label}
                className="rounded-lg border border-slate-200 p-2.5 text-center">
                
                  <o.icon
                  className="mx-auto h-4 w-4"
                  style={{ color: o.color }}
                  aria-hidden="true" />
                
                  <p className="mt-1 text-[10.5px] leading-snug text-slate-500">{o.label}</p>
                  <p className="font-display text-[18px] font-bold text-navy-800">{o.value}</p>
                </li>
              )}
            </ul>
          </Panel>

          <Panel title="Detailed Result Summary">
            <ul className="grid gap-3 sm:grid-cols-3 xl:grid-cols-6">
              {summary.map((s) =>
              <li key={s.label} className="rounded-lg border border-slate-200 p-2.5">
                  <s.icon className="h-4 w-4" style={{ color: s.color }} aria-hidden="true" />
                  <p className="mt-1 text-[10.5px] leading-snug text-slate-500">{s.label}</p>
                  <p className="font-display text-[14px] font-bold text-navy-800">{s.value}</p>
                </li>
              )}
            </ul>
          </Panel>

          <Panel title="Your Typed Text">
            <div className="mb-3 flex flex-wrap items-center gap-2">
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
                View Mode:
                <span className="rounded bg-primary px-2.5 py-1 text-[11px] font-semibold text-white">
                  Highlighted
                </span>
                <span className="rounded border border-slate-300 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                  Plain Text
                </span>
              </span>
            </div>

            <div className="grid gap-3 lg:grid-cols-[1fr_230px]">
              <p className="text-[13px] leading-[2.1] text-navy-900">
                Honourable Chairman, I rise to speak on the{' '}
                <mark className="bg-amber-100 px-0.5">Interim Budget</mark> presented by the{' '}
                <mark className="bg-rose-100 px-0.5 line-through">the</mark> Hon&apos;ble Minister of
                Finance. Budget comes at a crucial time when our economy is showing signs of{' '}
                <mark className="bg-emerald-100 px-0.5">recovery</mark>,{' '}
                <mark className="bg-primary-100 px-0.5">but</mark> challenges remain. The Government
                has taken several bold steps to ensure fiscal discipline, promote growth, and{' '}
                <mark className="bg-amber-100 px-0.5">support</mark> the{' '}
                <mark className="bg-rose-100 px-0.5">common</mark> man. I appreciate the focus on{' '}
                <mark className="bg-amber-100 px-0.5">infrastructure</mark>, digital India,{' '}
                <mark className="bg-emerald-100 px-0.5">and</mark> employment generation. However,{' '}
                <mark className="bg-rose-100 px-0.5">more</mark> needs to be done for{' '}
                <mark className="bg-amber-100 px-0.5">education</mark>,{' '}
                <mark className="bg-amber-100 px-0.5">healthcare</mark>, and rural development. I hope
                the final Budget will address these concerns. Thank you.
              </p>

              <div className="rounded-lg border border-slate-200 p-2.5">
                <div className="flex items-center gap-1.5 border-b border-slate-100 pb-1.5 text-[10.5px] font-semibold text-navy-800">
                  <SparklesIcon className="h-3 w-3 text-violet-600" aria-hidden="true" /> AI Coach
                  <span className="ml-auto text-slate-500">Count</span>
                  <span className="w-[62px] text-right text-slate-500">Penalty (WPM)</span>
                </div>
                <ul className="divide-y divide-slate-100">
                  {coachRows.map((r) =>
                  <li key={r.key} className="flex items-center gap-1.5 py-1 text-[10.5px]">
                      <span className="text-slate-400">{r.key}</span>
                      <span className="min-w-0 truncate text-rose-600">{r.label}</span>
                      <span className="ml-auto w-5 text-right font-medium text-navy-800">
                        {r.count}
                      </span>
                      <span className="w-[62px] text-right font-medium text-navy-800">
                        {r.penalty}
                      </span>
                    </li>
                  )}
                </ul>
                <p className="mt-1.5 flex items-center gap-1.5 border-t border-slate-200 pt-1.5 text-[10.5px] font-bold text-danger">
                  i. Total Errors
                  <span className="ml-auto w-5 text-right">9</span>
                  <span className="w-[62px] text-right">2.40 WPM</span>
                </p>
              </div>
            </div>
          </Panel>

          <Panel title="Action Panel">
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
            <p className="mt-3 rounded bg-slate-50 px-3 py-2 text-[11.5px] text-slate-500">
              Note: Results are calculated as per the selected result pattern and penalty settings.
            </p>
          </Panel>
        </div>

        {/* Right rail */}
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-card">
            <TrophyIcon className="mx-auto h-16 w-16 text-warn" aria-hidden="true" />
            <p className="mx-auto mt-2 w-fit rounded bg-success px-4 py-1.5 font-display text-[13px] font-bold text-white">
              QUALIFIED
            </p>
            <p className="mt-3 text-[12.5px] font-semibold text-navy-800">Your Rank</p>
            <p className="font-display text-[30px] font-extrabold text-primary">12 / 856</p>
            <p className="text-[11.5px] text-slate-500">Minimum Qualifying Speed : 35 WPM</p>
          </div>

          <Panel>
            <p className="flex items-center gap-2 font-display text-[13.5px] font-semibold text-navy-800">
              <SparklesIcon className="h-4 w-4 text-violet-600" aria-hidden="true" /> AI Coach - Deep
              Analysis
              <span className="rounded bg-violet-600 px-1.5 py-[1px] text-[9px] font-bold text-white">
                NEW
              </span>
            </p>
            <p className="mt-1.5 text-[11.5px] text-slate-500">
              Get AI-powered insights to improve your performance.
            </p>
            <ul className="mt-3 space-y-1.5">
              {aiBullets.map((b) =>
              <li key={b} className="flex items-center gap-2 text-[12px] text-slate-600">
                  <CheckCircle2Icon className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
                  {b}
                </li>
              )}
            </ul>
            <button
              type="button"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-violet-300 py-2.5 text-[12.5px] font-semibold text-violet-700 transition-colors duration-150 hover:bg-violet-50">
              
              <SparklesIcon className="h-4 w-4" aria-hidden="true" /> Start AI Deep Analysis
            </button>
          </Panel>

          <Panel title="Compare Your Performance">
            <ul className="space-y-2 text-[11.5px]">
              <li className="rounded border border-primary-100 bg-primary-50 px-2.5 py-2">
                <span className="font-semibold text-primary-700">Your Performance</span>
                <span className="float-right text-navy-800">58 WPM | 96.58% Accuracy</span>
              </li>
              <li className="rounded border border-emerald-100 bg-emerald-50 px-2.5 py-2">
                <span className="font-semibold text-emerald-700">Topper (Aman Kumar)</span>
                <span className="float-right text-navy-800">72.80 WPM | 96.50% Accuracy</span>
              </li>
              <li className="rounded border border-rose-100 bg-rose-50 px-2.5 py-2">
                <span className="font-semibold text-rose-700">Difference</span>
                <span className="float-right text-navy-800">-14.80 WPM | -0.08% Accuracy</span>
              </li>
            </ul>
          </Panel>

          <Panel title="Test Settings">
            <p className="flex items-center gap-2 text-[11.5px] text-slate-500">
              <SettingsIcon className="h-3.5 w-3.5" aria-hidden="true" />
              Standard Result Pattern applied
            </p>
          </Panel>
        </div>
      </div>
    </AdminLayout>);

}