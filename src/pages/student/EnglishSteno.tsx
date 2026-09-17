import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeadphonesIcon,
  ArrowRightIcon,
  FileTextIcon,
  BriefcaseIcon,
  UsersIcon,
  AwardIcon,
  BookOpenCheckIcon,
  BarChart3Icon,
  TargetIcon,
  CheckCircle2Icon } from
'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';
import { dictationCategories } from '../../data/steno';

const categoryIcons = [
HeadphonesIcon,
HeadphonesIcon,
HeadphonesIcon,
HeadphonesIcon,
FileTextIcon,
BriefcaseIcon,
UsersIcon,
AwardIcon];


const footerFeatures = [
{
  icon: BookOpenCheckIcon,
  title: 'Improve Your Skills',
  text: 'Regular practice with our expert dictations',
  color: '#0D6EFD'
},
{
  icon: BarChart3Icon,
  title: 'Track Progress',
  text: 'Detailed analysis and performance reports',
  color: '#198754'
},
{
  icon: TargetIcon,
  title: 'All Levels',
  text: 'From beginner to expert level dictations',
  color: '#6F42C1'
},
{
  icon: CheckCircle2Icon,
  title: 'Exam Focused',
  text: 'Based on latest exam patterns and standards',
  color: '#F59E0B'
}];


export function EnglishSteno() {
  return (
    <StudentLayout showSearch>
      <p className="mb-1 flex items-center gap-2 text-[13px] font-semibold text-primary">
        <FileTextIcon className="h-4 w-4" aria-hidden="true" /> English Steno Exam
      </p>

      <div className="mb-5 flex flex-wrap items-start gap-4">
        <div>
          <h2 className="font-display text-[30px] font-bold leading-tight text-navy-800">
            English Steno Dictations
          </h2>
          <p className="mt-1 text-[13px] text-slate-500">
            Practice English Stenography dictations &amp; improve your speed, accuracy and
            transcription skills.
          </p>
        </div>
        <button
          type="button"
          className="ml-auto flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-[12.5px] font-semibold text-navy-800 shadow-card transition-colors duration-150 hover:bg-slate-50">
          
          <span className="grid h-7 w-7 place-items-center rounded bg-primary-50 text-primary">
            <FileTextIcon className="h-4 w-4" aria-hidden="true" />
          </span>
          Steno Guide <span className="font-normal text-slate-500">(Official PDF)</span>
        </button>
      </div>

      <div className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dictationCategories.map((cat, i) => {
          const Icon = categoryIcons[i];
          return (
            <article
              key={cat.id}
              className={`flex flex-col rounded-xl border border-slate-200 ${cat.cardBg} p-4 shadow-card`}>
              
              <div className="flex items-start">
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl text-white"
                  style={{ backgroundColor: cat.iconBg }}>
                  
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="ml-auto grid h-8 w-8 place-items-center rounded-full border border-slate-200 bg-white text-slate-500">
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>

              <h3 className="mt-4 font-display text-[14.5px] font-bold leading-snug text-navy-800">
                {cat.title}
              </h3>
              <p className="mt-1 text-[12px] text-slate-500">{cat.subtitle}</p>

              <ul className="mt-2.5 flex flex-wrap gap-1.5">
                {cat.tags.map((tag) =>
                <li
                  key={tag.label}
                  className={`flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-[2px] text-[10.5px] font-medium ${tag.tone}`}>
                  
                    <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
                    {tag.label}
                  </li>
                )}
              </ul>

              <Link
                to="/steno/kailash-chandra"
                className={`mt-auto pt-4 text-[12.5px] font-semibold ${cat.accent} transition-colors duration-150 hover:underline`}>
                
                Practice Now →
              </Link>
            </article>);

        })}
      </div>

      <section className="grid gap-5 rounded-xl border border-slate-200 bg-white p-5 shadow-card sm:grid-cols-2 xl:grid-cols-4">
        {footerFeatures.map((f, i) =>
        <div
          key={f.title}
          className={`flex items-start gap-3 ${i > 0 ? 'xl:border-l xl:border-slate-100 xl:pl-5' : ''}`}>
          
            <span
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg"
            style={{ backgroundColor: `${f.color}1A`, color: f.color }}>
            
              <f.icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[13px] font-semibold text-navy-800">{f.title}</p>
              <p className="text-[11.5px] leading-snug text-slate-500">{f.text}</p>
            </div>
          </div>
        )}
      </section>
    </StudentLayout>);

}