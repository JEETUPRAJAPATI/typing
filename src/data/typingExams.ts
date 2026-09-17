export interface ExamPattern {
  id: string;
  label: string;
}

export const examPatterns: ExamPattern[] = [
{ id: 'all', label: 'All Exam' },
{ id: 'delhi', label: 'Delhi' },
{ id: 'up', label: 'UP' },
{ id: 'mp', label: 'MP' },
{ id: 'rajasthan', label: 'Rajasthan' },
{ id: 'haryana', label: 'Haryana' },
{ id: 'bihar', label: 'Bihar' },
{ id: 'other', label: 'Other State' }];


export interface TypingExam {
  id: string;
  name: string;
  lines: string[];
  tone: string;
  arrowBg: string;
  arrowText: string;
  state: string;
}

export const typingExams: TypingExam[] = [
{
  id: 'ssc-cgl',
  name: 'SSC CGL Typing Test',
  lines: ['Staff Selection Commission', 'Combined Graduate Level'],
  tone: 'bg-rose-50',
  arrowBg: 'bg-rose-100',
  arrowText: 'text-rose-600',
  state: 'all'
},
{
  id: 'ssc-chsl',
  name: 'SSC CHSL Typing Test',
  lines: ['Staff Selection Commission', 'Combined Higher Secondary Level'],
  tone: 'bg-white',
  arrowBg: 'bg-emerald-100',
  arrowText: 'text-emerald-600',
  state: 'all'
},
{
  id: 'delhi-police-hc',
  name: 'Delhi Police HC Typing Test',
  lines: ['Head Constable (Ministerial)'],
  tone: 'bg-white',
  arrowBg: 'bg-primary-100',
  arrowText: 'text-primary-700',
  state: 'delhi'
},
{
  id: 'up-police',
  name: 'UP Police Constable Typing Test',
  lines: ['Uttar Pradesh Police Constable'],
  tone: 'bg-amber-50',
  arrowBg: 'bg-amber-100',
  arrowText: 'text-amber-600',
  state: 'up'
},
{
  id: 'railway-ntpc',
  name: 'Railway NTPC Typing Test',
  lines: ['Non Technical Popular Categories'],
  tone: 'bg-white',
  arrowBg: 'bg-primary-100',
  arrowText: 'text-primary-700',
  state: 'all'
},
{
  id: 'ssc-mts',
  name: 'SSC MTS Typing Test',
  lines: ['Staff Selection Commission', 'Multi Tasking Staff'],
  tone: 'bg-white',
  arrowBg: 'bg-rose-100',
  arrowText: 'text-rose-600',
  state: 'all'
},
{
  id: 'rajasthan-cet',
  name: 'Rajasthan CET Typing Test',
  lines: ['Rajasthan Common Eligibility Test'],
  tone: 'bg-white',
  arrowBg: 'bg-amber-100',
  arrowText: 'text-amber-600',
  state: 'rajasthan'
},
{
  id: 'haryana-cet',
  name: 'Haryana CET Typing Test',
  lines: ['Haryana Common Eligibility Test'],
  tone: 'bg-white',
  arrowBg: 'bg-emerald-100',
  arrowText: 'text-emerald-600',
  state: 'haryana'
},
{
  id: 'mp-vyapam',
  name: 'MP Vyapam Typing Test',
  lines: ['Madhya Pradesh Vyapam'],
  tone: 'bg-white',
  arrowBg: 'bg-amber-100',
  arrowText: 'text-amber-600',
  state: 'mp'
},
{
  id: 'bihar-ssc',
  name: 'Bihar SSC Typing Test',
  lines: ['Bihar Staff Selection Commission'],
  tone: 'bg-white',
  arrowBg: 'bg-primary-100',
  arrowText: 'text-primary-700',
  state: 'bihar'
},
{
  id: 'jharkhand-ssc',
  name: 'Jharkhand SSC Typing Test',
  lines: ['Jharkhand Staff Selection Commission'],
  tone: 'bg-white',
  arrowBg: 'bg-emerald-100',
  arrowText: 'text-emerald-600',
  state: 'other'
},
{
  id: 'odisha-ossc',
  name: 'Odisha OSSC Typing Test',
  lines: ['Odisha Staff Selection Commission'],
  tone: 'bg-white',
  arrowBg: 'bg-rose-100',
  arrowText: 'text-rose-600',
  state: 'other'
},
{
  id: 'other-state',
  name: 'Other State Exams',
  lines: ['Other State Government Typing Tests'],
  tone: 'bg-white',
  arrowBg: 'bg-primary-100',
  arrowText: 'text-primary-700',
  state: 'other'
}];


export interface TestRow {
  no: string;
  name: string;
  time: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  free: boolean;
}

export const ahcTestRows: TestRow[] = [
{ no: '01', name: 'AHC RO ARO Typing Test 1', time: '10 Min', difficulty: 'Easy', free: true },
{ no: '02', name: 'AHC RO ARO Typing Test 2', time: '10 Min', difficulty: 'Moderate', free: false },
{ no: '03', name: 'AHC RO ARO Typing Test 3', time: '10 Min', difficulty: 'Hard', free: false },
{ no: '04', name: 'AHC RO ARO Typing Test 4', time: '10 Min', difficulty: 'Easy', free: false },
{ no: '05', name: 'AHC RO ARO Typing Test 5', time: '10 Min', difficulty: 'Moderate', free: false },
{ no: '06', name: 'AHC RO ARO Typing Test 6', time: '10 Min', difficulty: 'Easy', free: false },
{ no: '07', name: 'AHC RO ARO Typing Test 7', time: '10 Min', difficulty: 'Hard', free: false },
{ no: '08', name: 'AHC RO ARO Typing Test 8', time: '10 Min', difficulty: 'Moderate', free: false }];