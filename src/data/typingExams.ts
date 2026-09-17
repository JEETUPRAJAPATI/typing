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
  image: string;
}

export const typingExams: TypingExam[] = [
{
  id: 'ssc-cgl',
  name: 'SSC CGL Typing Test',
  lines: ['Staff Selection Commission', 'Combined Graduate Level'],
  tone: 'bg-rose-50',
  arrowBg: 'bg-rose-100',
  arrowText: 'text-rose-600',
  state: 'all',
  image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80'
},
{
  id: 'ssc-chsl',
  name: 'SSC CHSL Typing Test',
  lines: ['Staff Selection Commission', 'Combined Higher Secondary Level'],
  tone: 'bg-white',
  arrowBg: 'bg-emerald-100',
  arrowText: 'text-emerald-600',
  state: 'all',
  image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80'
},
{
  id: 'delhi-police-hc',
  name: 'Delhi Police HC Typing Test',
  lines: ['Head Constable (Ministerial)'],
  tone: 'bg-white',
  arrowBg: 'bg-primary-100',
  arrowText: 'text-primary-700',
  state: 'delhi',
  image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80'
},
{
  id: 'up-police',
  name: 'UP Police Constable Typing Test',
  lines: ['Uttar Pradesh Police Constable'],
  tone: 'bg-amber-50',
  arrowBg: 'bg-amber-100',
  arrowText: 'text-amber-600',
  state: 'up',
  image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&q=80'
},
{
  id: 'railway-ntpc',
  name: 'Railway NTPC Typing Test',
  lines: ['Non Technical Popular Categories'],
  tone: 'bg-white',
  arrowBg: 'bg-primary-100',
  arrowText: 'text-primary-700',
  state: 'all',
  image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&q=80'
},
{
  id: 'ssc-mts',
  name: 'SSC MTS Typing Test',
  lines: ['Staff Selection Commission', 'Multi Tasking Staff'],
  tone: 'bg-white',
  arrowBg: 'bg-rose-100',
  arrowText: 'text-rose-600',
  state: 'all',
  image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80'
},
{
  id: 'rajasthan-cet',
  name: 'Rajasthan CET Typing Test',
  lines: ['Rajasthan Common Eligibility Test'],
  tone: 'bg-white',
  arrowBg: 'bg-amber-100',
  arrowText: 'text-amber-600',
  state: 'rajasthan',
  image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80'
},
{
  id: 'haryana-cet',
  name: 'Haryana CET Typing Test',
  lines: ['Haryana Common Eligibility Test'],
  tone: 'bg-white',
  arrowBg: 'bg-emerald-100',
  arrowText: 'text-emerald-600',
  state: 'haryana',
  image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80'
},
{
  id: 'mp-vyapam',
  name: 'MP Vyapam Typing Test',
  lines: ['Madhya Pradesh Vyapam'],
  tone: 'bg-white',
  arrowBg: 'bg-amber-100',
  arrowText: 'text-amber-600',
  state: 'mp',
  image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80'
},
{
  id: 'bihar-ssc',
  name: 'Bihar SSC Typing Test',
  lines: ['Bihar Staff Selection Commission'],
  tone: 'bg-white',
  arrowBg: 'bg-primary-100',
  arrowText: 'text-primary-700',
  state: 'bihar',
  image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80'
},
{
  id: 'jharkhand-ssc',
  name: 'Jharkhand SSC Typing Test',
  lines: ['Jharkhand Staff Selection Commission'],
  tone: 'bg-white',
  arrowBg: 'bg-emerald-100',
  arrowText: 'text-emerald-600',
  state: 'other',
  image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80'
},
{
  id: 'odisha-ossc',
  name: 'Odisha OSSC Typing Test',
  lines: ['Odisha Staff Selection Commission'],
  tone: 'bg-white',
  arrowBg: 'bg-rose-100',
  arrowText: 'text-rose-600',
  state: 'other',
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80'
},
{
  id: 'other-state',
  name: 'Other State Exams',
  lines: ['Other State Government Typing Tests'],
  tone: 'bg-white',
  arrowBg: 'bg-primary-100',
  arrowText: 'text-primary-700',
  state: 'other',
  image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&q=80'
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