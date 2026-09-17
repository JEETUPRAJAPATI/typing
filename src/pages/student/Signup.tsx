import React from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, MailIcon, SmartphoneIcon, LockIcon, EyeIcon, UsersIcon } from 'lucide-react';
import { LOGO_URL, COLLEGE_NAME } from '../../data/brand';

const fields = [
{ id: 'fullName', label: 'Full Name', placeholder: 'Enter your full name', icon: UserIcon, type: 'text' },
{
  id: 'email',
  label: 'Email ID (Login ID)',
  placeholder: 'Enter your email address',
  icon: MailIcon,
  type: 'email',
  help: 'This email will be your Login ID'
},
{
  id: 'mobile',
  label: 'Mobile Number',
  placeholder: 'Enter 10 digit mobile number',
  icon: SmartphoneIcon,
  type: 'tel'
},
{ id: 'username', label: 'Username', placeholder: 'Choose a username', icon: UserIcon, type: 'text' }];


const passwordFields = [
{ id: 'password', label: 'Password', placeholder: 'Create a password' },
{ id: 'confirmPassword', label: 'Confirm Password', placeholder: 'Confirm your password' }];


export function Signup() {
  return (
    <div className="flex min-h-screen w-full items-start justify-center bg-canvas px-4 py-8">
      <div className="w-full max-w-[460px]">
        <div className="mb-6 text-center">
          <img
            src={LOGO_URL}
            alt=""
            className="mx-auto h-16 w-16 rounded-full bg-white object-contain p-[2px]" />
          
          <h1 className="mt-3 font-display text-[19px] font-bold text-navy-800">{COLLEGE_NAME}</h1>
          <p className="mt-1 font-display text-[15px] font-semibold text-[#6D28D9]">
            Student Self Registration
          </p>
          <p className="mt-0.5 text-[12.5px] text-slate-500">
            Create your account to start learning
          </p>
        </div>

        <form className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
          <h2 className="font-display text-[17px] font-bold text-navy-800">Sign Up</h2>
          <p className="mt-0.5 text-[12px] text-slate-500">Create your student account</p>

          <button
            type="button"
            className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-md border border-slate-300 py-2.5 text-[13px] font-medium text-navy-800 transition-colors duration-150 hover:bg-slate-50">
            
            <span className="font-display text-[15px] font-bold text-[#4285F4]" aria-hidden="true">
              G
            </span>
            Continue with Google
          </button>

          <div className="my-4 flex items-center gap-3">
            <span className="h-px flex-1 bg-slate-200" />
            <span className="text-[11px] font-medium text-slate-400">OR</span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="space-y-3.5">
            {fields.map((f) =>
            <div key={f.id}>
                <label
                htmlFor={f.id}
                className="mb-1.5 block text-[12.5px] font-semibold text-navy-800">
                
                  {f.label} <span className="text-danger">*</span>
                </label>
                <div className="relative">
                  <f.icon
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden="true" />
                
                  <input
                  id={f.id}
                  type={f.type}
                  required
                  placeholder={f.placeholder}
                  className="w-full rounded-md border border-slate-300 py-2.5 pl-9 pr-3 text-[13px] outline-none transition-colors duration-150 placeholder:text-slate-400 focus:border-primary" />
                
                </div>
                {f.help && <p className="mt-1 text-[11px] text-slate-500">{f.help}</p>}
              </div>
            )}

            {passwordFields.map((f) =>
            <div key={f.id}>
                <label
                htmlFor={f.id}
                className="mb-1.5 block text-[12.5px] font-semibold text-navy-800">
                
                  {f.label} <span className="text-danger">*</span>
                </label>
                <div className="relative">
                  <LockIcon
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden="true" />
                
                  <input
                  id={f.id}
                  type="password"
                  required
                  placeholder={f.placeholder}
                  className="w-full rounded-md border border-slate-300 py-2.5 pl-9 pr-10 text-[13px] outline-none transition-colors duration-150 placeholder:text-slate-400 focus:border-primary" />
                
                  <button
                  type="button"
                  aria-label={`Show ${f.label.toLowerCase()}`}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-150 hover:text-slate-600">
                  
                    <EyeIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}
          </div>

          <label className="mt-4 flex items-start gap-2 text-[12px] text-slate-600">
            <input
              type="checkbox"
              className="mt-[2px] h-3.5 w-3.5 rounded border-slate-300 accent-primary" />
            
            <span>
              I agree to the{' '}
              <a href="#terms" className="text-primary hover:underline">
                Terms &amp; Conditions
              </a>{' '}
              and{' '}
              <a href="#privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </span>
          </label>

          <button
            type="submit"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#7C3AED] py-3 text-[13.5px] font-semibold text-white transition-colors duration-150 hover:bg-[#6D28D9]">
            
            <UsersIcon className="h-4 w-4" aria-hidden="true" /> Create My Account
          </button>

          <p className="mt-3 text-center text-[12.5px] text-slate-600">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-primary hover:underline">
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>);

}