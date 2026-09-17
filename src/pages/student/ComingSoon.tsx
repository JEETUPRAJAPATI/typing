import React from 'react';
import { Link } from 'react-router-dom';
import { ConstructionIcon } from 'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';

interface ComingSoonProps {
  title: string;
}

export function ComingSoon({ title }: ComingSoonProps) {
  return (
    <StudentLayout>
      <div className="grid place-items-center rounded-xl border border-slate-200 bg-white p-16 text-center shadow-card">
        <ConstructionIcon className="h-10 w-10 text-slate-300" aria-hidden="true" />
        <h2 className="mt-3 font-display text-[20px] font-bold text-navy-800">{title}</h2>
        <p className="mt-1 max-w-[420px] text-[13px] text-slate-500">
          This screen is not part of the shared design yet. Share the layout and it will be built to
          match exactly.
        </p>
        <Link
          to="/"
          className="mt-4 rounded-md bg-primary px-4 py-2 text-[12.5px] font-semibold text-white transition-colors duration-150 hover:bg-primary-700">
          
          Back to Home
        </Link>
      </div>
    </StudentLayout>);

}