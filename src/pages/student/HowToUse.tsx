import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircleIcon,
  UserPlusIcon,
  LayersIcon,
  PlayCircleIcon,
  BarChart3Icon,
  SparklesIcon,
  HeadphonesIcon,
  ChevronDownIcon,
  ChevronUpIcon } from
'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';
import { Breadcrumbs } from '../../components/common/PageHeading';

const steps = [
{ icon: UserPlusIcon, title: '1. Create your account', text: 'Sign up with your name, mobile number and course. Keep your roll number handy, it appears on every result.', to: '/login', cta: 'Sign up / Login', tone: 'bg-primary-50 text-primary-700' },
{ icon: LayersIcon, title: '2. Pick an exam', text: 'Choose Typing Exam, English Steno, Hindi Steno or a Live Test. Filter by exam pattern such as SSC, Court or Delhi Police.', to: '/typing-exam', cta: 'Browse exams', tone: 'bg-emerald-50 text-emerald-700' },
{ icon: PlayCircleIcon, title: '3. Take the test', text: 'Read the instructions carefully, then start. The timer begins as soon as the test loads. Submit before the timer ends, or it submits automatically.', to: '/live-test/typing', cta: 'Open live tests', tone: 'bg-rose-50 text-rose-700' },
{ icon: BarChart3Icon, title: '4. Review your result', text: 'See speed, accuracy, mistakes and rank. Highlighted passages show exactly where you went wrong.', to: '/test-analysis', cta: 'View results', tone: 'bg-indigo-50 text-indigo-700' },
{ icon: SparklesIcon, title: '5. Improve with AI analysis', text: 'The AI coach points out your weak areas, suggests what to practise and sets a target WPM for your next level.', to: '/result/typing/ai-analysis', cta: 'Open AI coach', tone: 'bg-violet-50 text-violet-700' },
{ icon: HeadphonesIcon, title: '6. Get help', text: 'Stuck anywhere? Raise a support ticket with screenshots or a short video, or message us on WhatsApp.', to: '/support', cta: 'Contact support', tone: 'bg-amber-50 text-amber-700' }];


const faqs = [
{ q: 'Do I need to pay to start?', a: 'Each exam has one free test a day. Premium tests unlock after you subscribe from the Plan & Pricing page.' },
{ q: 'How many times can I re-attempt a test?', a: 'Live tests allow up to 3 attempts. Your latest result is the one shown in Test Analysis.' },
{ q: 'When do I get my result PDF?', a: 'Result PDFs are published after the session ends, usually within 20–25 minutes. You will also see them in the Telegram group.' },
{ q: 'Why does my typing show mistakes I did not make?', a: 'Check the Result Mode and Mistake Policy for your exam on the exam page. Spacing, punctuation and capitalisation can be counted differently per pattern.' },
{ q: 'Can I use a mobile phone?', a: 'Tests are designed for a desktop or laptop keyboard. Use fullscreen mode for the best experience.' },
{ q: 'My test froze or my result is missing. What now?', a: 'Refresh once, then raise a ticket from the Support page with your roll number and the test name. We reply as soon as possible.' }];


export function HowToUse() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <StudentLayout>
      <div className="mb-4 flex flex-wrap items-start gap-4">
        <div>
          <h2 className="flex items-center gap-2 font-display text-[24px] font-bold text-navy-800">
            <HelpCircleIcon className="h-6 w-6 text-primary" aria-hidden="true" /> How to use?
          </h2>
          <p className="text-[12.5px] text-slate-500">A quick walkthrough from signing up to reading your results.</p>
        </div>
        <div className="ml-auto">
          <Breadcrumbs crumbs={[{ label: 'Home', to: '/' }, { label: 'How to use?' }]} />
        </div>
      </div>

      <section className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {steps.map((s) =>
        <article key={s.title} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-card">
            <span className={`grid h-11 w-11 place-items-center rounded-full ${s.tone}`}>
              <s.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-3 font-display text-[14.5px] font-bold text-navy-800">{s.title}</h3>
            <p className="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-slate-600">{s.text}</p>
            <Link
            to={s.to}
            className="mt-4 inline-flex w-fit items-center rounded-md border border-primary px-3.5 py-1.5 text-[12px] font-semibold text-primary transition-colors duration-150 hover:bg-primary-50">

              {s.cta} →
            </Link>
          </article>
        )}
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
        <h3 className="mb-3 font-display text-[16px] font-bold text-navy-800">Frequently asked questions</h3>
        <ul className="divide-y divide-slate-100">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <li key={f.q} className="py-3">
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-3 text-left">

                  <span className="text-[13px] font-semibold text-navy-800">{f.q}</span>
                  {open ?
                  <ChevronUpIcon className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" /> :

                  <ChevronDownIcon className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                  }
                </button>
                {open && <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600">{f.a}</p>}
              </li>);

          })}
        </ul>
      </section>
    </StudentLayout>);

}
