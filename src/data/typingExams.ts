export interface ExamPattern {
  id: string;
  label: string;
  icon?: string;
  color?: string;
}

export const examPatterns: ExamPattern[] = [
{ id: 'all', label: 'All Exam' },
{ id: 'delhi', label: 'Delhi', icon: 'gate', color: '#DC2626' },
{ id: 'up', label: 'UP', icon: 'taj', color: '#EA580C' },
{ id: 'mp', label: 'MP', icon: 'toran', color: '#7C3AED' },
{ id: 'rajasthan', label: 'Rajasthan', icon: 'palace', color: '#D97706' },
{ id: 'haryana', label: 'Haryana', icon: 'gopuram', color: '#16A34A' },
{ id: 'bihar', label: 'Bihar', icon: 'stupa', color: '#92400E' },
{ id: 'other', label: 'Other State', icon: 'map', color: '#2563EB' }];


export interface TypingExam {
  id: string;
  name: string;
  lines: string[];
  tone: string;
  arrowBg: string;
  arrowText: string;
  state: string;
  image: string;
  initials: string;
  testsCount: number;
  premium: boolean;
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
  image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80',
  initials: 'SSC',
  testsCount: 375,
  premium: true
},
{
  id: 'ssc-chsl',
  name: 'SSC CHSL Typing Test',
  lines: ['Staff Selection Commission', 'Combined Higher Secondary Level'],
  tone: 'bg-white',
  arrowBg: 'bg-emerald-100',
  arrowText: 'text-emerald-600',
  state: 'all',
  image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80',
  initials: 'CHSL',
  testsCount: 280,
  premium: true
},
{
  id: 'delhi-police-hc',
  name: 'Delhi Police HC Typing Test',
  lines: ['Head Constable (Ministerial)'],
  tone: 'bg-white',
  arrowBg: 'bg-primary-100',
  arrowText: 'text-primary-700',
  state: 'delhi',
  image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80',
  initials: 'DP',
  testsCount: 210,
  premium: true
},
{
  id: 'up-police',
  name: 'UP Police Constable Typing Test',
  lines: ['Uttar Pradesh Police Constable'],
  tone: 'bg-amber-50',
  arrowBg: 'bg-amber-100',
  arrowText: 'text-amber-600',
  state: 'up',
  image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&q=80',
  initials: 'UPP',
  testsCount: 190,
  premium: true
},
{
  id: 'railway-ntpc',
  name: 'Railway NTPC Typing Test',
  lines: ['Non Technical Popular Categories'],
  tone: 'bg-white',
  arrowBg: 'bg-primary-100',
  arrowText: 'text-primary-700',
  state: 'all',
  image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&q=80',
  initials: 'RRB',
  testsCount: 240,
  premium: true
},
{
  id: 'ssc-mts',
  name: 'SSC MTS Typing Test',
  lines: ['Staff Selection Commission', 'Multi Tasking Staff'],
  tone: 'bg-white',
  arrowBg: 'bg-rose-100',
  arrowText: 'text-rose-600',
  state: 'all',
  image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80',
  initials: 'MTS',
  testsCount: 160,
  premium: false
},
{
  id: 'rajasthan-cet',
  name: 'Rajasthan CET Typing Test',
  lines: ['Rajasthan Common Eligibility Test'],
  tone: 'bg-white',
  arrowBg: 'bg-amber-100',
  arrowText: 'text-amber-600',
  state: 'rajasthan',
  image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80',
  initials: 'RCET',
  testsCount: 120,
  premium: true
},
{
  id: 'haryana-cet',
  name: 'Haryana CET Typing Test',
  lines: ['Haryana Common Eligibility Test'],
  tone: 'bg-white',
  arrowBg: 'bg-emerald-100',
  arrowText: 'text-emerald-600',
  state: 'haryana',
  image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80',
  initials: 'HCET',
  testsCount: 110,
  premium: true
},
{
  id: 'mp-vyapam',
  name: 'MP Vyapam Typing Test',
  lines: ['Madhya Pradesh Vyapam'],
  tone: 'bg-white',
  arrowBg: 'bg-amber-100',
  arrowText: 'text-amber-600',
  state: 'mp',
  image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80',
  initials: 'ESB',
  testsCount: 140,
  premium: true
},
{
  id: 'bihar-ssc',
  name: 'Bihar SSC Typing Test',
  lines: ['Bihar Staff Selection Commission'],
  tone: 'bg-white',
  arrowBg: 'bg-primary-100',
  arrowText: 'text-primary-700',
  state: 'bihar',
  image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80',
  initials: 'BSSC',
  testsCount: 95,
  premium: true
},
{
  id: 'jharkhand-ssc',
  name: 'Jharkhand SSC Typing Test',
  lines: ['Jharkhand Staff Selection Commission'],
  tone: 'bg-white',
  arrowBg: 'bg-emerald-100',
  arrowText: 'text-emerald-600',
  state: 'other',
  image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80',
  initials: 'JSSC',
  testsCount: 88,
  premium: true
},
{
  id: 'odisha-ossc',
  name: 'Odisha OSSC Typing Test',
  lines: ['Odisha Staff Selection Commission'],
  tone: 'bg-white',
  arrowBg: 'bg-rose-100',
  arrowText: 'text-rose-600',
  state: 'other',
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80',
  initials: 'OSSC',
  testsCount: 76,
  premium: true
},
{
  id: 'ahc-ro-aro',
  name: 'AHC RO ARO Typing Test',
  lines: ['Allahabad High Court'],
  tone: 'bg-white',
  arrowBg: 'bg-primary-100',
  arrowText: 'text-primary-700',
  state: 'other',
  image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80',
  initials: 'AHC',
  testsCount: 375,
  premium: true
},
{
  id: 'other-state',
  name: 'Other State Exams',
  lines: ['Other State Government Typing Tests'],
  tone: 'bg-white',
  arrowBg: 'bg-primary-100',
  arrowText: 'text-primary-700',
  state: 'other',
  image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&q=80',
  initials: 'IN',
  testsCount: 150,
  premium: false
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