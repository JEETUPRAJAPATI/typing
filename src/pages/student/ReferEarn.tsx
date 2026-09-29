import React, { useState } from 'react';
import {
  GiftIcon,
  UserIcon,
  ArrowUpIcon,
  LinkIcon,
  CopyIcon,
  WalletIcon,
  InfoIcon,
  SendIcon,
  FileTextIcon,
  CheckIcon,
  UsersIcon } from
'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';

const stats = [
{ label: 'Total Referrals', value: '0', color: 'text-primary' },
{ label: 'Total Earned', value: '₹0.00', color: 'text-success' },
{ label: 'Pending Balance', value: '₹0.00', color: 'text-[#D97706]' },
{ label: 'Paid Out', value: '₹0.00', color: 'text-primary' }];


const steps = [
{ n: 1, title: 'Copy Your Link', desc: 'Grab your unique referral link from above' },
{ n: 2, title: 'Share With Friends', desc: 'Send via WhatsApp, email, or social media' },
{ n: 3, title: 'They Subscribe', desc: 'Your friend signs up and buys any plan' },
{ n: 4, title: 'You Earn', desc: 'Commission credited to your wallet instantly' }];


const terms = [
"Your referral code also works as a coupon: anyone who enters it while buying a plan gets 10% OFF. You earn commission only when it is a new user's first plan purchase — not on repeat plans or old accounts.",
'Only new users (with no prior subscriptions) are counted for commissions. Referring the same user multiple times will not earn additional commissions.',
'Your commission rate is 10% per successful referral.',
'The minimum withdrawal amount for referral earnings is ₹100.',
"Commissions are credited only after the referred user's subscription payment is marked as 'completed'.",
'TypingMitra.in reserves the right to verify referrals and withhold commissions for fraudulent or invalid referrals.'];


const referralCode = 'EZ84725E59F';
const referralLink = `https://eztyping.com/subscribe?ref=${referralCode}`;

export function ReferEarn() {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard?.writeText(referralLink).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <StudentLayout showDownloadApp>
      <div className="mb-4">
        <h2 className="flex items-center gap-2 font-display text-[22px] font-bold text-navy-800">
          <GiftIcon className="h-6 w-6 text-emerald-600" aria-hidden="true" /> Refer &amp; Earn
        </h2>
        <p className="text-[12.5px] text-slate-500">
          Share your referral link, earn commission on every successful payment.
        </p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-[11px] font-semibold text-primary-700">
            <UserIcon className="h-3 w-3" aria-hidden="true" /> Free Referrer — 10% Commission
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold text-[#B45309]">
            <ArrowUpIcon className="h-3 w-3" aria-hidden="true" /> Upgrade for 15%
          </span>
        </div>
      </div>

      <section className="mb-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 p-5 text-white shadow-card">
        <p className="mb-2 flex items-center gap-2 text-[13px] font-semibold">
          <LinkIcon className="h-4 w-4" aria-hidden="true" /> Your Referral Link
        </p>
        <div className="flex flex-wrap items-center gap-2.5 rounded-lg bg-white/15 p-2.5">
          <span className="min-w-0 flex-1 truncate px-1.5 text-[13px]">{referralLink}</span>
          <button
            type="button"
            onClick={copyLink}
            className="flex shrink-0 items-center gap-1.5 rounded-md bg-white px-3.5 py-2 text-[12px] font-semibold text-violet-700 transition-colors duration-150 hover:bg-violet-50">

            <CopyIcon className="h-3.5 w-3.5" aria-hidden="true" /> {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <p className="text-[12.5px]">
            Your Code: <span className="font-display text-[14px] font-bold">{referralCode}</span>
          </p>
          <a
            href="#whatsapp"
            className="flex items-center gap-1.5 rounded-md bg-[#25D366] px-3.5 py-1.5 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-[#1ebc59]">

            <SendIcon className="h-3.5 w-3.5" aria-hidden="true" /> WhatsApp
          </a>
          <a
            href="#telegram"
            className="flex items-center gap-1.5 rounded-md bg-[#229ED9] px-3.5 py-1.5 text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-[#1c8cc1]">

            <SendIcon className="h-3.5 w-3.5" aria-hidden="true" /> Telegram
          </a>
        </div>
      </section>

      <div className="mb-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) =>
        <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-card">
            <p className="text-[10.5px] font-semibold uppercase tracking-wide text-slate-500">{s.label}</p>
            <p className={`mt-1 font-display text-[20px] font-bold ${s.color}`}>{s.value}</p>
          </div>
        )}
      </div>

      <section className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-card">
        <h3 className="mb-2.5 flex items-center gap-2 font-display text-[14px] font-semibold text-navy-800">
          <WalletIcon className="h-4 w-4 text-success" aria-hidden="true" /> Request Payout
        </h3>
        <p className="flex items-center gap-2 rounded-md bg-slate-50 px-3 py-2.5 text-[12px] text-slate-600">
          <InfoIcon className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
          Minimum ₹100 required to request a payout. Current balance:{' '}
          <span className="font-semibold text-navy-800">₹0.00</span>
        </p>
      </section>

      <section className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-card">
        <h3 className="font-display text-[14px] font-semibold text-navy-800">How It Works</h3>
        <p className="mb-3.5 text-[12px] text-slate-500">Earning is as easy as 1-2-3-4</p>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((s) =>
          <div key={s.n} className="text-center">
              <span className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-violet-600 font-display text-[14px] font-bold text-white">
                {s.n}
              </span>
              <p className="mt-2 text-[12.5px] font-semibold text-navy-800">{s.title}</p>
              <p className="mt-0.5 text-[11px] text-slate-500">{s.desc}</p>
            </div>
          )}
        </div>
      </section>

      <section className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-card">
        <h3 className="mb-2.5 flex items-center gap-2 font-display text-[14px] font-semibold text-navy-800">
          <FileTextIcon className="h-4 w-4 text-primary" aria-hidden="true" /> Terms and Conditions
        </h3>
        <ul className="space-y-1.5">
          {terms.map((t) =>
          <li key={t} className="flex items-start gap-1.5 text-[11.5px] text-slate-600">
              <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" aria-hidden="true" /> {t}
            </li>
          )}
        </ul>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
        <h3 className="flex items-center gap-2 font-display text-[14px] font-semibold text-navy-800">
          <UsersIcon className="h-4 w-4 text-primary" aria-hidden="true" /> Your Referrals
        </h3>
        <p className="mb-2.5 text-[12px] text-slate-500">Track everyone who joined through your link</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-[11px]">
            <thead className="border-b border-slate-200 font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th scope="col" className="pb-2">Name</th>
                <th scope="col" className="pb-2">Plan Purchased</th>
                <th scope="col" className="pb-2">Commission Earned</th>
                <th scope="col" className="pb-2">Date (IST)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="py-6 text-center text-[12px] text-slate-400">
                  No referrals yet. Share your link to start earning!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </StudentLayout>);

}
