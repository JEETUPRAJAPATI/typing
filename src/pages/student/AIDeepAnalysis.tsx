import React from 'react';
import { Link } from 'react-router-dom';
import {
  BrainIcon,
  ArrowLeftIcon,
  ZapIcon,
  TargetIcon,
  AlertTriangleIcon,
  ActivityIcon,
  TrophyIcon,
  BotIcon,
  PlayCircleIcon,
  FileTextIcon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Panel } from '../../components/common/Pill';

const metrics = [
{ icon: ZapIcon, label: 'Speed Level', value: 'Good', sub: '58 WPM', color: '#0D6EFD' },
{ icon: TargetIcon, label: 'Accuracy Level', value: 'Excellent', sub: '96.58%', color: '#198754' },
{ icon: AlertTriangleIcon, label: 'Mistake Control', value: 'Needs Attention', sub: '7 incorrect words', color: '#D97706' },
{ icon: ActivityIcon, label: 'Consistency', value: 'Good', sub: 'Stable performance', color: '#7C3AED' }];


const mistakePattern = [
{ label: 'Spelling Mistake', count: 1, pct: 14.3, color: '#0D6EFD' },
{ label: 'Omission Mistake', count: 1, pct: 14.3, color: '#198754' },
{ label: 'Addition Mistake', count: 1, pct: 14.3, color: '#D97706' },
{ label: 'Punctuation Error', count: 2, pct: 28.6, color: '#7C3AED' },
{ label: 'Extra Space Error', count: 1, pct: 14.3, color: '#0EA5E9' },
{ label: 'Repetition Error', count: 1, pct: 14.3, color: '#DC2626' }];


const recommendations = [
{ n: 1, title: 'Practice Difficult Words', text: 'Focus on the 7 incorrect words. Repeated practice will reduce mistakes and improve confidence.' },
{ n: 2, title: 'Focus on Punctuation & Spacing', text: 'You made 2 punctuation errors and 1 extra space error. Practice punctuation-focused exercises and proper spacing.' },
{ n: 3, title: 'Take Timed Speed Drills', text: 'Do 15-20 minute daily speed drills. Gradually increase the target speed from 58 WPM to 70 WPM.' }];


const plan = [
{ week: 1, title: 'Accuracy Focus', color: '#0D6EFD', items: ['Review incorrect words', 'Practice punctuation', 'Daily 10 min drills'], goal: '97%+ accuracy' },
{ week: 2, title: 'Speed Building', color: '#198754', items: ['Increase typing speed', '15 min daily practice', 'Use speed tests'], goal: '62-65 WPM' },
{ week: 3, title: 'Mixed Practice', color: '#7C3AED', items: ['Full paragraph practice', 'Focus on weak areas', 'Maintain accuracy'], goal: '66-68 WPM' },
{ week: 4, title: 'Mock Tests', color: '#F59E0B', items: ['Take full-length tests', 'Track progress', 'Build consistency'], goal: '70+ WPM' }];


const quickStats = [
{ label: 'Total Words', value: '410' },
{ label: 'Correct Words', value: '396' },
{ label: 'Incorrect Words', value: '7' },
{ label: 'Accuracy', value: '96.58%' },
{ label: 'Speed', value: '58 WPM' }];


export function AIDeepAnalysis() {
  return (
    <AdminLayout searchPlaceholder="Search test name, exam name..." showActionButtons={false}>
      <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-100 text-violet-600">
            <BrainIcon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="flex items-center gap-2 font-display text-[22px] font-bold leading-tight text-navy-800">
              AI Deep Analysis
              <span className="rounded bg-violet-600 px-1.5 py-[2px] text-[9px] font-bold text-white">
                AI POWERED
              </span>
            </h2>
            <p className="text-[12.5px] text-slate-500">Smart insights. Better practice. Faster progress.</p>
          </div>
        </div>
        <Link
          to="/test-analysis/typing"
          className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-2 text-[12px] font-medium text-navy-800 transition-colors duration-150 hover:bg-slate-50">

          <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" /> Back to Results
        </Link>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_280px]">
        <div className="space-y-4">
          <Panel title="Executive Summary">
            <p className="text-[12.5px] leading-relaxed text-slate-600">
              You typed at <span className="font-semibold text-navy-800">58 WPM</span> with{' '}
              <span className="font-semibold text-navy-800">96.58% accuracy</span>. Your accuracy is
              excellent, which shows good focus and control. However, your speed is below the target
              (70 WPM). With a little more practice and regular drills, you can improve your speed and
              achieve your goal.
            </p>
          </Panel>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((m) =>
            <div key={m.label} className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-card">
                <m.icon className="h-4 w-4" style={{ color: m.color }} aria-hidden="true" />
                <p className="mt-1.5 text-[11px] text-slate-500">{m.label}</p>
                <p className="font-display text-[14px] font-bold" style={{ color: m.color }}>
                  {m.value}
                </p>
                <p className="text-[10.5px] text-slate-500">{m.sub}</p>
              </div>
            )}
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <Panel title="Performance Analysis">
              <div className="mb-2 flex items-center justify-between text-[11.5px]">
                <span className="text-slate-500">Your speed vs target</span>
                <span className="flex items-center gap-2">
                  <span className="rounded bg-primary-50 px-2 py-[2px] font-semibold text-primary-700">
                    Current: 58 WPM
                  </span>
                  <span className="rounded bg-violet-50 px-2 py-[2px] font-semibold text-violet-700">
                    Target: 70 WPM
                  </span>
                </span>
              </div>
              <div className="relative h-2 rounded-full bg-slate-100">
                <span className="absolute inset-y-0 left-0 rounded-full bg-primary" style={{ width: '58%' }} />
                <span
                  className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-primary shadow"
                  style={{ left: 'calc(58% - 8px)' }} />

                <span
                  className="absolute top-1/2 h-4 w-[3px] -translate-y-1/2 bg-violet-600"
                  style={{ left: '70%' }} />

              </div>
              <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
              <p className="mt-3 rounded-md bg-slate-50 p-2.5 text-[11.5px] text-slate-600">
                You are 12 WPM below your target. Keep practicing to reach 70 WPM.
              </p>
            </Panel>

            <Panel title="Mistake Pattern Analysis">
              <p className="mb-2 text-[11px] text-slate-500">Breakdown of your 7 incorrect words</p>
              <ul className="space-y-2">
                {mistakePattern.map((m) =>
                <li key={m.label}>
                    <div className="mb-1 flex items-center justify-between text-[11.5px]">
                      <span className="text-slate-600">{m.label}</span>
                      <span className="font-medium text-navy-800">
                        {m.count} ({m.pct.toFixed(1)}%)
                      </span>
                    </div>
                    <span className="block h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <span
                      className="block h-full rounded-full"
                      style={{ width: `${m.pct}%`, backgroundColor: m.color }} />

                    </span>
                  </li>
                )}
              </ul>
            </Panel>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <Panel title="AI Recommendations">
              <ul className="space-y-3">
                {recommendations.map((r) =>
                <li key={r.n} className="flex gap-2.5">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-[11px] font-bold text-white">
                      {r.n}
                    </span>
                    <span>
                      <span className="block text-[12.5px] font-semibold text-navy-800">{r.title}</span>
                      <span className="block text-[11.5px] text-slate-500">{r.text}</span>
                    </span>
                  </li>
                )}
              </ul>
            </Panel>

            <Panel title="30-Day Improvement Plan">
              <p className="mb-2 text-[11px] text-slate-500">A simple 4-week plan to reach your goal</p>
              <div className="grid grid-cols-2 gap-2.5">
                {plan.map((p) =>
                <div key={p.week} className="rounded-lg border border-slate-200 p-2.5">
                    <span
                    className="mb-1.5 grid h-6 w-6 place-items-center rounded-full text-[11px] font-bold text-white"
                    style={{ backgroundColor: p.color }}>

                      {p.week}
                    </span>
                    <p className="text-[11.5px] font-semibold text-navy-800">Week {p.week}: {p.title}</p>
                    <ul className="mt-1 space-y-0.5 text-[10.5px] text-slate-500">
                      {p.items.map((it) => <li key={it}>• {it}</li>)}
                    </ul>
                    <p className="mt-1.5 text-[10.5px] font-medium text-primary">Goal: {p.goal}</p>
                  </div>
                )}
              </div>
            </Panel>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="flex items-center gap-2 text-[12.5px] font-medium text-amber-800">
              <TrophyIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
              You're doing great, Vikas! With focused practice and the right strategy, you can easily
              reach 70+ WPM while maintaining your excellent accuracy.
            </p>
            <p className="font-display text-[13px] italic text-amber-700">Keep Typing... Keep Growing! →</p>
          </div>
        </div>

        <div className="space-y-4">
          <Panel>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-violet-600 text-white">
                <BotIcon className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-[13.5px] font-semibold text-navy-800">
                  AI Coach
                </span>
                <span className="rounded bg-violet-50 px-1.5 py-[1px] text-[9px] font-bold text-violet-700">
                  Your Personal Coach
                </span>
              </span>
            </div>
            <p className="mt-3 rounded-lg bg-slate-50 p-3 text-[11.5px] leading-relaxed text-slate-600">
              Hi Vikas! 👋 Great job! Your accuracy is excellent (96.58%). To reach your next level,
              focus on increasing your speed to 70 WPM. Practice difficult words and pay extra attention
              to punctuation and spacing errors. With consistent practice, you'll get there very soon!
            </p>
            <Link
              to="/result/typing/practice"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">

              <PlayCircleIcon className="h-4 w-4" aria-hidden="true" /> Practice Now
            </Link>
            <Link
              to="/result/typing/detailed-report"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-md border border-slate-300 py-2.5 text-[12.5px] font-semibold text-navy-800 transition-colors duration-150 hover:bg-slate-50">

              <FileTextIcon className="h-4 w-4" aria-hidden="true" /> View Detailed Report
            </Link>
          </Panel>

          <Panel title="Quick Stats">
            <ul className="space-y-2">
              {quickStats.map((q) =>
              <li key={q.label} className="flex items-center justify-between text-[12px]">
                  <span className="text-slate-500">{q.label}</span>
                  <span className="font-semibold text-navy-800">{q.value}</span>
                </li>
              )}
            </ul>
          </Panel>
        </div>
      </div>
    </AdminLayout>);

}
