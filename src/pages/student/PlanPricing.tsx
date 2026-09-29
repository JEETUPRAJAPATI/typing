import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  CrownIcon,
  ShieldIcon,
  ZapIcon,
  ClockIcon,
  TagIcon,
  CheckIcon,
  XIcon,
  InfoIcon,
  StarIcon,
  PlusIcon,
  MinusIcon,
  CompassIcon,
  TargetIcon,
  BarChart3Icon,
  ShieldCheckIcon,
  LockIcon,
  MessageCircleIcon,
  KeyboardIcon,
  PenLineIcon,
  Building2Icon } from
'lucide-react';

interface Plan {
  name: 'Gold Pass' | 'Silver Pass';
  tagline: string;
  discount: string;
  originalPrice: string;
  price: string;
  validity: string;
  perMonth: string;
  features: {label: string;included: boolean;}[];
  moreCount: number;
  popular?: boolean;
}

interface Category {
  key: string;
  navLabel: string;
  navIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  heading: string;
  checks: string[];
  gold: Plan;
  silver: Plan;
}

const categories: Category[] = [
{
  key: 'typing',
  navLabel: 'Typing Pass',
  navIcon: KeyboardIcon,
  heading: 'Typing',
  checks: ['5000+ typing passages', 'AI-enabled mistake explanations', 'Practice at your preferred speed'],
  gold: {
    name: 'Gold Pass',
    tagline: 'Best for serious aspirants — full access for 1 year.',
    discount: '67% OFF',
    originalPrice: '₹4,999',
    price: '₹1,649',
    validity: '365 days',
    perMonth: '₹136/month',
    popular: true,
    moreCount: 16,
    features: [
    { label: 'Access to SUPER 60 Passages ⭐', included: true },
    { label: 'Access to 5000+ Typing Passages', included: true },
    { label: 'Access to live test simulator', included: true },
    { label: 'This Pass Will give you access to all English & Hindi Typing Tests', included: true },
    { label: 'A.I. Enabled Explanation of Mistakes', included: true },
    { label: 'Flex Version - Evaluate only what you type', included: true }]

  },
  silver: {
    name: 'Silver Pass',
    tagline: '3-month intensive practice for upcoming skill tests.',
    discount: '21% OFF',
    originalPrice: '₹1,332',
    price: '₹1,049',
    validity: '90 days',
    perMonth: '₹350/month',
    moreCount: 16,
    features: [
    { label: 'Access to 3000+ Typing Passages', included: true },
    { label: 'Access to live test simulator', included: true },
    { label: 'This Pass Will give you access to all English Typing Tests', included: true },
    { label: 'A.I. Enabled Explanation of Mistakes', included: true },
    { label: 'Flex Version - Evaluate only what you type', included: true },
    { label: 'Access to SUPER 60 Passages ⭐', included: false }]

  }
},
{
  key: 'eng-steno',
  navLabel: 'English Steno',
  navIcon: PenLineIcon,
  heading: 'English Steno',
  checks: ['2500+ dictations', 'AI-enabled mistake explanations', 'Practice at your preferred speed'],
  gold: {
    name: 'Gold Pass',
    tagline: 'Best for serious aspirants — full access for 1 year.',
    discount: '67% OFF',
    originalPrice: '₹4,999',
    price: '₹1,649',
    validity: '365 days',
    perMonth: '₹136/month',
    popular: true,
    moreCount: 16,
    features: [
    { label: 'Access to SUPER 60 Dictations ⭐', included: true },
    { label: 'Access to 2000+ Dictations', included: true },
    { label: 'Access to typing practice feature', included: true },
    { label: 'This Pass Will give you access to all English Dictations available on the website', included: true },
    { label: 'A.I. Enabled Explanation of Mistakes', included: true },
    { label: 'Flex Version - Evaluate only what you type', included: true }]

  },
  silver: {
    name: 'Silver Pass',
    tagline: '3-month intensive practice for upcoming skill tests.',
    discount: '21% OFF',
    originalPrice: '₹1,332',
    price: '₹1,049',
    validity: '90 days',
    perMonth: '₹350/month',
    moreCount: 16,
    features: [
    { label: 'Access to 2000+ Dictations', included: true },
    { label: 'Access to typing practice feature', included: true },
    { label: 'This Pass Will give you access to all English Dictations available on the website', included: true },
    { label: 'A.I. Enabled Explanation of Mistakes', included: true },
    { label: 'Flex Version - Evaluate only what you type', included: true },
    { label: 'Access to SUPER 60 Dictations ⭐', included: false }]

  }
},
{
  key: 'hindi-steno',
  navLabel: 'Hindi Steno',
  navIcon: Building2Icon,
  heading: 'Hindi Steno',
  checks: ['2000+ dictations', 'AI-enabled mistake explanations', 'Practice at your preferred speed'],
  gold: {
    name: 'Gold Pass',
    tagline: 'Best for serious aspirants — full access for 1 year.',
    discount: '67% OFF',
    originalPrice: '₹4,499',
    price: '₹1,499',
    validity: '365 days',
    perMonth: '₹125/month',
    popular: true,
    moreCount: 16,
    features: [
    { label: 'Access to SUPER 60 Dictations ⭐', included: true },
    { label: 'Access to 1800+ Hindi Dictations', included: true },
    { label: 'Access to typing practice feature', included: true },
    { label: 'This Pass Will give you access to all Hindi Dictations available on the website', included: true },
    { label: 'A.I. Enabled Explanation of Mistakes', included: true },
    { label: 'Flex Version - Evaluate only what you type', included: true }]

  },
  silver: {
    name: 'Silver Pass',
    tagline: '3-month intensive practice for upcoming skill tests.',
    discount: '21% OFF',
    originalPrice: '₹1,199',
    price: '₹949',
    validity: '90 days',
    perMonth: '₹316/month',
    moreCount: 16,
    features: [
    { label: 'Access to 1800+ Hindi Dictations', included: true },
    { label: 'Access to typing practice feature', included: true },
    { label: 'This Pass Will give you access to all Hindi Dictations available on the website', included: true },
    { label: 'A.I. Enabled Explanation of Mistakes', included: true },
    { label: 'Flex Version - Evaluate only what you type', included: true },
    { label: 'Access to SUPER 60 Dictations ⭐', included: false }]

  }
}];


const whyCards = [
{ icon: CompassIcon, title: 'Practice at Any Speed', desc: 'Slow it down or speed it up. Practise at the pace you actually need.', color: '#2563EB' },
{ icon: TargetIcon, title: 'Exam-Focused Practice', desc: 'Work with dictations and tools designed around real shorthand preparation.', color: '#EA580C' },
{ icon: BarChart3Icon, title: 'Performance Insights', desc: 'Understand mistakes, identify gaps and make every practice session useful.', color: '#0EA5E9' },
{ icon: ShieldCheckIcon, title: 'Trusted Platform', desc: 'A focused practice experience used by shorthand aspirants across India.', color: '#16A34A' }];


const faqs = [
{ q: 'What is the difference between the available passes?', a: 'Gold Pass gives you full 1-year access including SUPER 60 dictations, while Silver Pass is a 90-day plan focused on core practice features without SUPER 60 content.' },
{ q: 'Can I view every feature before purchasing?', a: "Yes, click 'Details' under any plan to see the complete feature list before you buy." },
{ q: 'What happens if I already have an active pass?', a: 'Your new purchase extends your access — remaining days from your current plan are added on top of the new plan duration.' },
{ q: 'Is payment access activated immediately?', a: 'Yes, access is activated instantly after your payment is verified — usually within a few seconds.' }];


export function PlanPricing() {
  const [activeKey, setActiveKey] = useState(categories[1].key);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const active = categories.find((c) => c.key === activeKey) ?? categories[0];

  return (
    <div className="min-h-screen bg-[#F4F6FB] pb-10">
      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
        <Link to="/" className="mb-4 inline-block text-[14px] font-medium text-primary hover:text-primary-700">
          ← Back to Home
        </Link>

        {/* Top banner */}
        <section className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-[#EAF1FF] via-[#F3F0FF] to-[#FFF6E5] shadow-card">
          <div className="grid gap-4 p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="font-display text-[20px] font-bold italic text-navy-800">Stenoshala</p>
              <h1 className="mt-1 font-display text-[30px] font-extrabold leading-tight text-navy-900 sm:text-[38px]">
                <span className="text-[#D97706]">550+</span> Selections in
                <br />
                SSC Steno 2025 Exams
              </h1>
              <p className="mt-2 font-display text-[18px] italic text-slate-500">— Next can be you —</p>
              <a
                href="#join"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-2.5 text-[14.5px] font-bold text-navy-900 shadow-lg transition-opacity duration-150 hover:opacity-90">

                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" /> Join Stenoshala Today
              </a>
            </div>
            <div className="hidden justify-center lg:flex">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&q=80"
                alt="Successful students"
                className="h-[180px] w-full max-w-[420px] rounded-xl object-cover shadow-lg" />

            </div>
          </div>
        </section>

        {/* Heading + toggle */}
        <div className="mb-8 text-center">
          <h2 className="font-display text-[30px] font-extrabold text-navy-900 sm:text-[36px]">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent">
              {active.heading}
            </span>{' '}
            Pass
          </h2>
          <p className="mt-1.5 text-[15px] text-slate-500">
            Unlock the practice platform trusted by thousands. Pick a plan and start today.
          </p>

          <div className="mt-3.5 flex flex-wrap justify-center gap-x-5 gap-y-1.5">
            {active.checks.map((c) =>
            <span key={c} className="flex items-center gap-1.5 text-[13.5px] text-slate-600">
                <CheckIcon className="h-3.5 w-3.5 text-success" aria-hidden="true" /> {c}
              </span>
            )}
          </div>

          <div className="mt-5 inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-card">
            {categories.map((c) => {
              const isActive = c.key === activeKey;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setActiveKey(c.key)}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[14px] font-semibold transition-colors duration-150 ${
                  isActive ?
                  'bg-gradient-to-r from-primary to-violet-600 text-white shadow' :
                  'text-slate-500 hover:text-navy-800'}`
                  }>

                  <c.navIcon className="h-3.5 w-3.5" aria-hidden="true" /> {c.navLabel}
                </button>);

            })}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="mb-10 grid gap-5 md:grid-cols-2">
          {[active.gold, active.silver].map((plan) =>
          <div
            key={plan.name}
            className={`relative rounded-2xl border p-6 shadow-card ${
            plan.popular ?
            'border-amber-200 bg-gradient-to-b from-amber-50/60 to-white' :
            'border-slate-200 bg-white'}`
            }>

              {plan.popular &&
            <span className="absolute -top-3 left-6 flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-[11.5px] font-bold text-navy-900 shadow">
                  <StarIcon className="h-3 w-3 fill-current" aria-hidden="true" /> MOST POPULAR
                </span>
            }

              <div className="flex items-center gap-2.5">
                <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg text-white ${
                plan.popular ? 'bg-amber-400' : 'bg-slate-400'}`
                }>

                  {plan.popular ?
                <CrownIcon className="h-5 w-5" aria-hidden="true" /> :

                <ShieldIcon className="h-5 w-5" aria-hidden="true" />
                }
                </span>
                <h3 className="font-display text-[20px] font-bold text-navy-800">{plan.name}</h3>
              </div>
              <p className="mt-1.5 text-[13.5px] text-slate-500">{plan.tagline}</p>

              <span className="mt-4 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[11.5px] font-bold text-emerald-700">
                <ZapIcon className="h-3 w-3" aria-hidden="true" /> {plan.discount}
              </span>
              <p className="mt-2 text-[14px] text-slate-400 line-through">{plan.originalPrice}</p>
              <p className="font-display text-[36px] font-extrabold text-navy-900">{plan.price}</p>
              <p className="text-[12.5px] text-slate-400">+ 18% GST</p>

              <div className="mt-2.5 flex items-center gap-4 text-[13px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ClockIcon className="h-3.5 w-3.5" aria-hidden="true" /> {plan.validity}
                </span>
                <span className="flex items-center gap-1 rounded bg-emerald-50 px-2 py-[3px] font-semibold text-emerald-700">
                  <TagIcon className="h-3 w-3" aria-hidden="true" /> {plan.perMonth}
                </span>
              </div>

              <ul className="mt-4 space-y-2.5 border-t border-slate-100 pt-4">
                {plan.features.map((f) =>
              <li key={f.label} className="flex items-start gap-2 text-[13.5px]">
                    {f.included ?
                <CheckIcon className="mt-[2px] h-4 w-4 shrink-0 text-success" aria-hidden="true" /> :

                <XIcon className="mt-[2px] h-4 w-4 shrink-0 text-rose-400" aria-hidden="true" />
                }
                    <span className={f.included ? 'text-slate-700' : 'text-slate-400 line-through'}>
                      {f.label}
                    </span>
                    {f.label.includes('SUPER 60') && f.included &&
                <span className="ml-auto flex shrink-0 items-center gap-1 rounded-full border border-primary-200 px-2 py-[2px] text-[11px] font-semibold text-primary">
                        <InfoIcon className="h-2.5 w-2.5" aria-hidden="true" /> Know More
                      </span>
                }
                  </li>
              )}
                <li className="flex items-center gap-2 text-[13px] text-slate-400">
                  <PlusIcon className="h-3.5 w-3.5" aria-hidden="true" /> +{plan.moreCount} more features
                </li>
              </ul>

              <button
              type="button"
              className={`mt-5 flex w-full items-center justify-center gap-2 rounded-md py-3 text-[14.5px] font-bold transition-opacity duration-150 hover:opacity-90 ${
              plan.popular ?
              'bg-gradient-to-r from-amber-400 to-amber-500 text-navy-900' :
              'border border-primary text-primary'}`
              }>

                Buy Now <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </button>
              <button type="button" className="mt-2 block w-full text-center text-[13px] font-semibold text-primary hover:text-primary-700">
                Details
              </button>
            </div>
          )}
        </div>

        {/* Compare plans */}
        <div className="mb-10 text-center">
          <p className="text-[12px] font-bold uppercase tracking-wide text-primary">Compare Plans</p>
          <h3 className="mt-1 font-display text-[26px] font-extrabold text-navy-900">
            See the difference at a glance
          </h3>
          <p className="mt-1 text-[14px] text-slate-500">
            The comparison below is built automatically from the currently visible plan data.
          </p>

          <div className="mt-5 overflow-hidden overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-card">
            <table className="w-full min-w-[560px] text-left text-[13.5px]">
              <thead className="bg-slate-50 text-[12.5px] font-semibold text-slate-500">
                <tr>
                  <th scope="col" className="px-4 py-3">Feature</th>
                  <th scope="col" className="px-4 py-3 text-center text-amber-600">{active.gold.name}</th>
                  <th scope="col" className="px-4 py-3 text-center">{active.silver.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="flex items-center gap-1.5 px-4 py-3 font-medium text-navy-800">
                    <ClockIcon className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" /> Validity
                  </td>
                  <td className="px-4 py-3 text-center text-slate-600">{active.gold.validity}</td>
                  <td className="px-4 py-3 text-center text-slate-600">{active.silver.validity}</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-1.5 px-4 py-3 font-medium text-navy-800">
                    ₹ Plan price
                  </td>
                  <td className="px-4 py-3 text-center text-slate-600">
                    {active.gold.price} · {active.gold.perMonth}
                  </td>
                  <td className="px-4 py-3 text-center text-slate-600">
                    {active.silver.price} · {active.silver.perMonth}
                  </td>
                </tr>
                {active.gold.features.map((f) => {
                  const silverMatch = active.silver.features.find((sf) => sf.label === f.label);
                  return (
                    <tr key={f.label}>
                      <td className="px-4 py-3 font-medium text-navy-800">{f.label.replace(' ⭐', '')}</td>
                      <td className="px-4 py-3 text-center">
                        {f.included ?
                      <span className="inline-flex items-center gap-1 text-emerald-600">
                            <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" /> Included
                          </span> :

                      <span className="text-slate-400">Not Included</span>
                      }
                      </td>
                      <td className="px-4 py-3 text-center">
                        {silverMatch?.included ?
                      <span className="inline-flex items-center gap-1 text-emerald-600">
                            <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" /> Included
                          </span> :

                      <span className="text-slate-400">Not Included</span>
                      }
                      </td>
                    </tr>);

                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Stenoshala */}
        <div className="mb-10 text-center">
          <p className="text-[12px] font-bold uppercase tracking-wide text-primary">Why Stenoshala?</p>
          <h3 className="mt-1 font-display text-[26px] font-extrabold text-navy-900">
            Built for serious shorthand practice
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {whyCards.map((w) =>
            <div key={w.title} className="rounded-xl border border-slate-200 bg-white p-4 text-left shadow-card">
                <span
                className="grid h-10 w-10 place-items-center rounded-full"
                style={{ backgroundColor: `${w.color}1A`, color: w.color }}>

                  <w.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-2.5 text-[14.5px] font-bold text-navy-800">{w.title}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-500">{w.desc}</p>
              </div>
            )}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-10 text-center">
          <p className="text-[12px] font-bold uppercase tracking-wide text-primary">Need Help?</p>
          <h3 className="mt-1 font-display text-[26px] font-extrabold text-navy-900">
            Frequently Asked Questions
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {faqs.map((f, i) =>
            <div key={f.q} className="rounded-xl border border-slate-200 bg-white text-left shadow-card">
                <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-[14.5px] font-semibold text-navy-800">

                  {f.q}
                  {openFaq === i ?
                <MinusIcon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" /> :

                <PlusIcon className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                }
                </button>
                {openFaq === i &&
              <p className="border-t border-slate-100 px-4 py-3 text-[13.5px] leading-relaxed text-slate-600">
                    {f.a}
                  </p>
              }
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-slate-500">
          <span className="flex items-center gap-1.5">
            <LockIcon className="h-3.5 w-3.5" aria-hidden="true" /> Secure payment flow
          </span>
          <span className="flex items-center gap-1.5">
            <CheckIcon className="h-3.5 w-3.5 text-success" aria-hidden="true" /> Instant plan access after
            verification
          </span>
          <span className="flex items-center gap-1.5">
            <MessageCircleIcon className="h-3.5 w-3.5" aria-hidden="true" /> WhatsApp Us at 8447949206
          </span>
        </div>
        <p className="mt-3 text-center text-[12.5px] italic text-slate-400">Stenoshala · Practice with purpose</p>
      </div>
    </div>);

}
