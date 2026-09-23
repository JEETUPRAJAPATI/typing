import React, { useState } from 'react';
import {
  CameraIcon,
  UsersIcon,
  ClockIcon,
  CalendarClockIcon,
  MonitorIcon,
  MonitorSmartphoneIcon,
  EyeIcon,
  RotateCcwIcon,
  SaveIcon,
  CheckCircle2Icon,
  InfoIcon } from
'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';

const sectionTitle = (n: number, title: string) =>
<h3 className="mb-3.5 flex items-center gap-2 border-b border-slate-100 pb-2 font-display text-[13px] font-semibold text-navy-800">
    <UsersIcon className="h-4 w-4 text-primary" aria-hidden="true" />
    {n}. {title}
  </h3>;


export function AddStudent() {
  const [loginWindow, setLoginWindow] = useState<'anytime' | 'fixed'>('anytime');
  const [loginType, setLoginType] = useState<'single' | 'multiple'>('multiple');
  const [status, setStatus] = useState<'active' | 'inactive'>('active');

  return (
    <AdminLayout searchPlaceholder="Search by name, roll no., username, email...">
      <div className="mb-4">
        <h2 className="font-display text-[26px] font-bold leading-tight text-navy-800">
          Add New Student
        </h2>
        <p className="text-[12.5px] text-slate-500">Fill the details below to add a new student.</p>
      </div>

      <form className="space-y-4">
        {/* 1. Personal information */}
        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
          {sectionTitle(1, 'Personal Information')}
          <div className="grid gap-4 lg:grid-cols-[150px_1fr]">
            <div>
              <p className="mb-1.5 text-[12px] font-semibold text-navy-800">Student Photo</p>
              <button
                type="button"
                className="flex h-[132px] w-full flex-col items-center justify-center gap-1.5 rounded-md border border-slate-300 transition-colors duration-150 hover:border-primary hover:bg-primary-50/40">
                
                <CameraIcon className="h-6 w-6 text-slate-500" aria-hidden="true" />
                <span className="text-[11.5px] font-semibold text-navy-800">Upload Photo</span>
                <span className="text-[10.5px] text-slate-400">JPG, PNG (Max 2MB)</span>
              </button>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-3">
              <label className="block">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                  Student Name <span className="text-danger">*</span>
                </span>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] outline-none focus:border-primary" />
                
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                  Roll No. <span className="text-danger">*</span>
                </span>
                <input
                  type="text"
                  placeholder="Enter roll number"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] outline-none focus:border-primary" />
                
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                  Username (Login ID) <span className="text-danger">*</span>
                </span>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] outline-none focus:border-primary" />
                
                <span className="mt-1 block text-[11px] text-slate-500">
                  This will be used as username
                </span>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                  Email ID (Login ID) <span className="text-danger">*</span>
                </span>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] outline-none focus:border-primary" />
                
                <span className="mt-1 block text-[11px] text-slate-500">
                  Students will login using this email ID
                </span>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                  Mobile Number <span className="text-danger">*</span>
                </span>
                <input
                  type="tel"
                  placeholder="Enter 10 digit mobile number"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] outline-none focus:border-primary" />
                
              </label>
            </div>
          </div>

          <div className="mt-3.5 grid gap-3.5 lg:grid-cols-[1fr_180px_180px_150px]">
            <label className="block">
              <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                Address <span className="text-danger">*</span>
              </span>
              <textarea
                rows={2}
                maxLength={250}
                placeholder="Enter address"
                className="w-full resize-none rounded-md border border-slate-300 px-3 py-2 text-[12.5px] outline-none focus:border-primary" />
              
              <span className="mt-1 block text-right text-[11px] text-slate-400">0 / 250</span>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                City <span className="text-danger">*</span>
              </span>
              <input
                type="text"
                placeholder="Enter city"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] outline-none focus:border-primary" />
              
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                State <span className="text-danger">*</span>
              </span>
              <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] text-slate-600 outline-none focus:border-primary">
                <option>-- Select State --</option>
                <option>Delhi</option>
                <option>Uttar Pradesh</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                Pin Code <span className="text-danger">*</span>
              </span>
              <input
                type="text"
                placeholder="Enter pin code"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] outline-none focus:border-primary" />
              
            </label>
          </div>
        </section>

        {/* 2. Course & access */}
        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
          {sectionTitle(2, 'Course & Access Information')}
          <div className="grid gap-4 lg:grid-cols-[220px_1fr_1fr]">
            <label className="block">
              <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                Course / Type <span className="text-danger">*</span>
              </span>
              <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] text-slate-600 outline-none focus:border-primary">
                <option>-- Select Course / Type --</option>
                <option>English Typing</option>
                <option>Hindi Typing</option>
                <option>English Steno</option>
                <option>Hindi Steno</option>
              </select>
            </label>

            <div>
              <p className="mb-1.5 text-[12px] font-semibold text-navy-800">
                Login Window <span className="text-danger">*</span>
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                { id: 'anytime' as const, icon: ClockIcon, label: 'Anytime', desc: 'Student can login any time' },
                { id: 'fixed' as const, icon: CalendarClockIcon, label: 'Fixed Time', desc: 'Student can login only in selected time slot' }].
                map((opt) => {
                  const active = loginWindow === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setLoginWindow(opt.id)}
                      aria-pressed={active}
                      className={`relative flex flex-col items-center gap-1.5 rounded-lg border px-3 py-3 text-center transition-colors duration-150 ${
                      active ? 'border-primary bg-primary-50' : 'border-slate-200 hover:border-primary'}`
                      }>

                      <opt.icon
                        className={`h-5 w-5 ${active ? 'text-primary' : 'text-slate-500'}`}
                        aria-hidden="true" />

                      <span className="text-[12px] font-semibold text-navy-800">{opt.label}</span>
                      <span className="text-[10.5px] leading-snug text-slate-500">{opt.desc}</span>
                      {active &&
                      <CheckCircle2Icon
                        className="absolute right-1.5 top-1.5 h-4 w-4 fill-primary text-white"
                        aria-hidden="true" />

                      }
                    </button>);

                })}
              </div>
            </div>

            <div>
              <p className="mb-1.5 text-[12px] font-semibold text-navy-800">
                Login Type <span className="text-danger">*</span>
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                { id: 'single' as const, icon: MonitorIcon, label: 'Single Device', desc: 'Student can login on one device only' },
                { id: 'multiple' as const, icon: MonitorSmartphoneIcon, label: 'Multiple Device', desc: 'Student can login on multiple devices' }].
                map((opt) => {
                  const active = loginType === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setLoginType(opt.id)}
                      aria-pressed={active}
                      className={`relative flex flex-col items-center gap-1.5 rounded-lg border px-3 py-3 text-center transition-colors duration-150 ${
                      active ? 'border-primary bg-primary-50' : 'border-slate-200 hover:border-primary'}`
                      }>

                      <opt.icon
                        className={`h-5 w-5 ${active ? 'text-primary' : 'text-slate-500'}`}
                        aria-hidden="true" />

                      <span className="text-[12px] font-semibold text-navy-800">{opt.label}</span>
                      <span className="text-[10.5px] leading-snug text-slate-500">{opt.desc}</span>
                      {active &&
                      <CheckCircle2Icon
                        className="absolute right-1.5 top-1.5 h-4 w-4 fill-primary text-white"
                        aria-hidden="true" />

                      }
                    </button>);

                })}
              </div>
            </div>
          </div>

          <p className="mt-3.5 text-[12px] font-semibold text-navy-800">
            Fix Time Slot (If Fixed Time Selected)
          </p>
          <div className="mt-1.5 grid gap-3.5 sm:grid-cols-3">
            <label className="block">
              <span className="mb-1.5 block text-[11.5px] font-medium text-slate-600">From Time</span>
              <span className="relative block">
                <input
                  type="text"
                  placeholder="--:-- --"
                  disabled={loginWindow !== 'fixed'}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 pr-8 text-[12.5px] outline-none focus:border-primary disabled:bg-slate-50 disabled:text-slate-400" />
                
                <ClockIcon
                  className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                  aria-hidden="true" />
                
              </span>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[11.5px] font-medium text-slate-600">To Time</span>
              <span className="relative block">
                <input
                  type="text"
                  placeholder="--:-- --"
                  disabled={loginWindow !== 'fixed'}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 pr-8 text-[12.5px] outline-none focus:border-primary disabled:bg-slate-50 disabled:text-slate-400" />
                
                <ClockIcon
                  className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                  aria-hidden="true" />
                
              </span>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[11.5px] font-medium text-slate-600">
                Time Zone (Optional)
              </span>
              <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] text-slate-600 outline-none focus:border-primary">
                <option>-- Select Time Zone --</option>
                <option>IST (UTC +5:30)</option>
              </select>
            </label>
          </div>
        </section>

        {/* 3. Password & status */}
        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
          {sectionTitle(3, 'Password & Status')}
          <div className="grid gap-3.5 sm:grid-cols-3">
            {[
            { id: 'password', label: 'Password', placeholder: 'Enter password' },
            { id: 'confirm', label: 'Confirm Password', placeholder: 'Confirm password' }].
            map((f) =>
            <label key={f.id} className="block">
                <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                  {f.label} <span className="text-danger">*</span>
                </span>
                <span className="relative block">
                  <input
                  type="password"
                  placeholder={f.placeholder}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 pr-9 text-[12.5px] outline-none focus:border-primary" />
                
                  <EyeIcon
                  className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                  aria-hidden="true" />
                
                </span>
              </label>
            )}
            <fieldset>
              <legend className="mb-1.5 text-[12px] font-semibold text-navy-800">
                Status <span className="text-danger">*</span>
              </legend>
              <div className="flex gap-5 pt-1.5">
                {(['active', 'inactive'] as const).map((s) =>
                <label key={s} className="flex items-center gap-2 text-[12.5px] capitalize text-slate-600">
                    <input
                    type="radio"
                    name="studentStatus"
                    checked={status === s}
                    onChange={() => setStatus(s)}
                    className="h-3.5 w-3.5 accent-primary" />
                  
                    {s}
                  </label>
                )}
              </div>
            </fieldset>
          </div>
        </section>

        {/* 4. Other information */}
        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
          {sectionTitle(4, 'Other Information (Optional)')}
          <div className="grid gap-3.5 sm:grid-cols-3">
            <label className="block">
              <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                Parent / Guardian Name
              </span>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] outline-none focus:border-primary" />
              
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">
                Parent Mobile Number
              </span>
              <input
                type="tel"
                placeholder="Enter mobile number"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-[12.5px] outline-none focus:border-primary" />
              
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[12px] font-semibold text-navy-800">Remarks</span>
              <textarea
                rows={2}
                maxLength={150}
                placeholder="Enter remarks"
                className="w-full resize-none rounded-md border border-slate-300 px-3 py-2 text-[12.5px] outline-none focus:border-primary" />
              
              <span className="mt-1 block text-right text-[11px] text-slate-400">0 / 150</span>
            </label>
          </div>
          <p className="mt-3 flex items-start gap-2 rounded-md border border-primary-100 bg-primary-50 px-3 py-2 text-[11.5px] text-primary-700">
            <InfoIcon className="mt-[1px] h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Students can also self-register from the website. Self-registered accounts appear under
            Pending Requests until approved.
          </p>
        </section>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="reset"
            className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-[12.5px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
            
            <RotateCcwIcon className="h-4 w-4" aria-hidden="true" /> Reset
          </button>
          <button
            type="button"
            className="ml-auto rounded-md border border-slate-300 bg-white px-5 py-2.5 text-[12.5px] font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50">
            
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
            
            <SaveIcon className="h-4 w-4" aria-hidden="true" /> Save Student
          </button>
        </div>
      </form>
    </AdminLayout>);

}