export interface DictationCategory {
  id: string;
  title: string;
  subtitle: string;
  meta: string;
  tags: {label: string;tone: string;}[];
  iconBg: string;
  cardBg: string;
  accent: string;
}

export const dictationCategories: DictationCategory[] = [
{
  id: 'basic',
  title: 'Basic Dictations (60–80 WPM)',
  subtitle: 'English • 5–10 Minutes',
  meta: '',
  tags: [
  { label: 'English', tone: 'text-primary-700' },
  { label: '60–80 WPM', tone: 'text-primary-700' },
  { label: 'For Beginners', tone: 'text-primary-700' }],

  iconBg: '#0D6EFD',
  cardBg: 'bg-blue-50',
  accent: 'text-primary'
},
{
  id: 'intermediate',
  title: 'Intermediate Dictations (80–100 WPM)',
  subtitle: 'English • 8–12 Minutes',
  meta: '',
  tags: [
  { label: 'English', tone: 'text-emerald-700' },
  { label: '80–100 WPM', tone: 'text-emerald-700' },
  { label: 'For Intermediate', tone: 'text-emerald-700' }],

  iconBg: '#198754',
  cardBg: 'bg-emerald-50',
  accent: 'text-success'
},
{
  id: 'advance',
  title: 'Advance Dictations (100–120 WPM)',
  subtitle: 'English • 10–15 Minutes',
  meta: '',
  tags: [
  { label: 'English', tone: 'text-amber-700' },
  { label: '100–120 WPM', tone: 'text-amber-700' },
  { label: 'For Advanced', tone: 'text-amber-700' }],

  iconBg: '#F59E0B',
  cardBg: 'bg-amber-50',
  accent: 'text-[#B45309]'
},
{
  id: 'high-speed',
  title: 'High Speed Dictations (120+ WPM)',
  subtitle: 'English • 10–20 Minutes',
  meta: '',
  tags: [
  { label: 'English', tone: 'text-violet-700' },
  { label: '120+ WPM', tone: 'text-violet-700' },
  { label: 'For Experts', tone: 'text-violet-700' }],

  iconBg: '#6F42C1',
  cardBg: 'bg-violet-50',
  accent: 'text-violet-700'
},
{
  id: 'ssc',
  title: 'SSC Steno Dictations',
  subtitle: 'English • Exam Pattern',
  meta: '',
  tags: [
  { label: 'SSC Steno', tone: 'text-rose-700' },
  { label: 'Exam Based', tone: 'text-rose-700' },
  { label: 'Previous Year', tone: 'text-rose-700' }],

  iconBg: '#EF4444',
  cardBg: 'bg-rose-50',
  accent: 'text-rose-600'
},
{
  id: 'court',
  title: 'Court Steno Dictations',
  subtitle: 'English • Legal Dictations',
  meta: '',
  tags: [
  { label: 'Court', tone: 'text-sky-700' },
  { label: 'Legal Words', tone: 'text-sky-700' },
  { label: 'Professionals', tone: 'text-sky-700' }],

  iconBg: '#0EA5E9',
  cardBg: 'bg-sky-50',
  accent: 'text-sky-600'
},
{
  id: 'parliament',
  title: 'Parliamentary Dictations',
  subtitle: 'English • Parliamentary Speeches',
  meta: '',
  tags: [
  { label: 'Parliament', tone: 'text-green-700' },
  { label: 'Speeches', tone: 'text-green-700' },
  { label: 'Real-time Practice', tone: 'text-green-700' }],

  iconBg: '#10B981',
  cardBg: 'bg-green-50',
  accent: 'text-green-700'
},
{
  id: 'competition',
  title: 'Competition Dictations',
  subtitle: 'English • Challenge Yourself',
  meta: '',
  tags: [
  { label: 'High Challenge', tone: 'text-orange-700' },
  { label: 'Speed Test', tone: 'text-orange-700' },
  { label: 'Top Performers', tone: 'text-orange-700' }],

  iconBg: '#F97316',
  cardBg: 'bg-orange-50',
  accent: 'text-orange-600'
},
{
  id: 'railway',
  title: 'Railway Steno Dictations',
  subtitle: 'English • RRB Pattern',
  meta: '',
  tags: [
  { label: 'RRB', tone: 'text-cyan-700' },
  { label: 'Exam Based', tone: 'text-cyan-700' },
  { label: 'Previous Year', tone: 'text-cyan-700' }],

  iconBg: '#06B6D4',
  cardBg: 'bg-cyan-50',
  accent: 'text-cyan-600'
},
{
  id: 'banking',
  title: 'Banking & Finance Dictations',
  subtitle: 'English • Financial Terms',
  meta: '',
  tags: [
  { label: 'Banking', tone: 'text-indigo-700' },
  { label: 'Finance', tone: 'text-indigo-700' },
  { label: 'Professionals', tone: 'text-indigo-700' }],

  iconBg: '#4F46E5',
  cardBg: 'bg-indigo-50',
  accent: 'text-indigo-600'
},
{
  id: 'medical',
  title: 'Medical Terminology Dictations',
  subtitle: 'English • Healthcare Vocabulary',
  meta: '',
  tags: [
  { label: 'Medical', tone: 'text-red-700' },
  { label: 'Terminology', tone: 'text-red-700' },
  { label: 'For Experts', tone: 'text-red-700' }],

  iconBg: '#DC2626',
  cardBg: 'bg-red-50',
  accent: 'text-red-600'
},
{
  id: 'business',
  title: 'Business & Commerce Dictations',
  subtitle: 'English • Corporate Vocabulary',
  meta: '',
  tags: [
  { label: 'Business', tone: 'text-teal-700' },
  { label: 'Corporate', tone: 'text-teal-700' },
  { label: 'Professionals', tone: 'text-teal-700' }],

  iconBg: '#0D9488',
  cardBg: 'bg-teal-50',
  accent: 'text-teal-600'
},
{
  id: 'daily-news',
  title: 'Daily News Dictations',
  subtitle: 'English • Current Affairs',
  meta: '',
  tags: [
  { label: 'Current Affairs', tone: 'text-fuchsia-700' },
  { label: 'Daily Practice', tone: 'text-fuchsia-700' },
  { label: 'All Speeds', tone: 'text-fuchsia-700' }],

  iconBg: '#C026D3',
  cardBg: 'bg-fuchsia-50',
  accent: 'text-fuchsia-600'
},
{
  id: 'punctuation',
  title: 'Punctuation Practice Dictations',
  subtitle: 'English • Accuracy Focused',
  meta: '',
  tags: [
  { label: 'Punctuation', tone: 'text-pink-700' },
  { label: 'Accuracy', tone: 'text-pink-700' },
  { label: 'For Intermediate', tone: 'text-pink-700' }],

  iconBg: '#DB2777',
  cardBg: 'bg-pink-50',
  accent: 'text-pink-600'
},
{
  id: 'mock-test',
  title: 'Full Mock Test Dictations',
  subtitle: 'English • Exam Simulation',
  meta: '',
  tags: [
  { label: 'Mock Test', tone: 'text-lime-700' },
  { label: 'Exam Simulation', tone: 'text-lime-700' },
  { label: 'Top Performers', tone: 'text-lime-700' }],

  iconBg: '#65A30D',
  cardBg: 'bg-lime-50',
  accent: 'text-lime-700'
}];


export interface Dictation {
  no: number;
  difficulty: number;
  topic: string;
  words: string;
  paid: boolean;
  favourite?: boolean;
  lastAttempt?: {percent: string;date: string;wpm: string;};
}

export const volumeOneDictations: Dictation[] = [
{
  no: 1,
  difficulty: 5.4,
  topic: 'Companies Bill Review',
  words: '1018 Words',
  paid: false,
  lastAttempt: { percent: '34.09%', date: '10 Aug 2026', wpm: '4 wpm' }
},
{ no: 2, difficulty: 5.2, topic: 'Deficit Financing', words: '1015 Words', paid: true, favourite: true },
{ no: 3, difficulty: 5.9, topic: 'Tax Relief & Estate Duty', words: '1003 Words', paid: true },
{ no: 4, difficulty: 5.9, topic: 'Essential Commodities Act', words: '1005 Words', paid: true },
{ no: 5, difficulty: 6.0, topic: 'Socialist Industrial Policy', words: '1025 Words', paid: true },
{ no: 6, difficulty: 5.1, topic: 'Cloth & Cottage Industry', words: '1010 Words', paid: true },
{ no: 7, difficulty: 5.0, topic: 'Company Clause Impact', words: '1009 Words', paid: true },
{ no: 8, difficulty: 5.8, topic: 'Displaced Persons Rehabilitation', words: '1002 Words', paid: true }];


function buildInstructions(examTitle: string): string[] {
  return [
  `Your mistakes will be calculated as per the ${examTitle}.`,
  'The scrollbar within the typing area will be disabled to simulate a real exam environment. Please use the sidebar to navigate up and down.',
  'Do not refresh the page during the test.',
  'Click "Submit" once you have finished typing.',
  'Timer will start automatically when page loads.',
  'Test will be automatically submitted once the timer ends.',
  'For any queries, WhatsApp - 8447949206.'];

}

export type TranscriptionVariant = 'common' | 'ssc' | 'court' | 'hssc' | 'dsssb' | 'capf';

export interface TranscriptionInterface {
  id: string;
  name: string;
  meta: string;
  bg: string;
  variant: TranscriptionVariant;
  orgName: string;
  skillTestTitle: string;
  examTitle: string;
  examCentre: string;
  durationMinutes: number;
  durationOptions?: number[];
  instructions: string[];
}

export const transcriptionInterfaces: TranscriptionInterface[] = [
{
  id: 'common',
  name: 'Common Interface',
  meta: 'Universal practice mode',
  bg: '#0D6EFD',
  variant: 'common',
  orgName: 'Balaji Typing & Steno College',
  skillTestTitle: 'Common Practice Session',
  examTitle: 'Common Practice Interface',
  examCentre: '',
  durationMinutes: 50,
  instructions: buildInstructions('Common Practice Interface')
},
{
  id: 'ssc-c',
  name: 'SSC Stenographer (Grade C)',
  meta: '40 minutes · official rules',
  bg: '#0EA5E9',
  variant: 'ssc',
  orgName: 'Staff Selection Commission',
  skillTestTitle: 'SSC Steno Skill Test - 2025',
  examTitle: 'SSC Stenographer Grade C Examination - 2025',
  examCentre: 'Ion Digital Zone Idz 2, Sarita Vihar, New Delhi 110076',
  durationMinutes: 40,
  instructions: buildInstructions('SSC Stenographer Grade C Exam')
},
{
  id: 'ssc-d',
  name: 'SSC Stenographer (Grade D)',
  meta: '50 minutes · official rules',
  bg: '#0EA5E9',
  variant: 'ssc',
  orgName: 'Staff Selection Commission',
  skillTestTitle: 'SSC Steno Skill Test - 2025',
  examTitle: 'SSC Stenographer Grade D & D Examination - 2025',
  examCentre: 'Ion Digital Zone Idz 2, Sarita Vihar, New Delhi 110076',
  durationMinutes: 50,
  instructions: buildInstructions('SSC Stenographer Grade D & D Exam')
},
{
  id: 'patna-hc',
  name: 'Patna High Court',
  meta: '50 minutes · court interface',
  bg: '#6F42C1',
  variant: 'court',
  orgName: 'Patna High Court',
  skillTestTitle: 'Patna HC Steno Skill Test - 2025',
  examTitle: 'Patna High Court Stenographer Recruitment - 2025',
  examCentre: 'Patna High Court Campus, Patna, Bihar 800001',
  durationMinutes: 50,
  instructions: buildInstructions('Patna High Court Stenographer Exam')
},
{
  id: 'supreme',
  name: 'Supreme Court',
  meta: '50 minutes · court interface',
  bg: '#8B5CF6',
  variant: 'court',
  orgName: 'Supreme Court of India',
  skillTestTitle: 'Supreme Court Steno Skill Test - 2025',
  examTitle: 'Supreme Court Stenographer Examination - 2025',
  examCentre: 'Supreme Court Annexe, Tilak Marg, New Delhi 110001',
  durationMinutes: 50,
  instructions: buildInstructions('Supreme Court Stenographer Exam')
},
{
  id: 'hssc',
  name: 'HSSC Stenographer',
  meta: '20 minutes · Haryana SSC rules',
  bg: '#10B981',
  variant: 'hssc',
  orgName: 'Haryana Staff Selection Commission',
  skillTestTitle: 'Stenographer Skill Test – 2026',
  examTitle: 'HSSC Stenographer Examination - 2026',
  examCentre: 'Indira Gandhi University, Rewari',
  durationMinutes: 20,
  instructions: buildInstructions('SSC Stenographer Grade C & D examination marking rules, including half mistakes, full mistakes, and ignored errors')
},
{
  id: 'ahc',
  name: 'Allahabad High Court',
  meta: '30 minutes · court interface',
  bg: '#0D6EFD',
  variant: 'court',
  orgName: 'Allahabad High Court',
  skillTestTitle: 'Allahabad HC Steno Skill Test - 2025',
  examTitle: 'Allahabad High Court Stenographer Examination - 2025',
  examCentre: 'Allahabad High Court, Prayagraj, Uttar Pradesh 211001',
  durationMinutes: 30,
  instructions: buildInstructions('Allahabad High Court Stenographer Exam')
},
{
  id: 'dsssb',
  name: 'D.S.S.S.B.',
  meta: '40 minutes · D.S.S.S.B. interface',
  bg: '#0EA5E9',
  variant: 'dsssb',
  orgName: 'Delhi Subordinate Services Selection Board',
  skillTestTitle: 'DSSSB Shorthand Skill Test - 2025',
  examTitle: 'DSSSB Stenographer Shorthand Skill Test - 2025',
  examCentre: 'DSSSB Examination Centre, New Delhi',
  durationMinutes: 40,
  durationOptions: [30, 35, 40, 45, 50],
  instructions: buildInstructions('DSSSB Stenographer Skill Test pattern')
},
{
  id: 'capf',
  name: 'CAPF ASI Stenographer',
  meta: '50 min English · 65 min Hindi · CAPF rules',
  bg: '#166534',
  variant: 'capf',
  orgName: 'Central Armed Police Forces',
  skillTestTitle: 'CAPF ASI Stenographer Skill Test',
  examTitle: 'CAPF Assistant Sub-Inspector (Stenographer) Examination',
  examCentre: '',
  durationMinutes: 50,
  instructions: [
  'Your mistakes will be calculated as per the CAPF ASI Stenographer Skill Test rules: omissions, additions and spelling mistakes are counted as full mistakes; punctuation is counted only when an original mark is missed; capitalisation is not counted.',
  'The scrollbar within the typing area will be disabled to simulate a real exam environment. Please use the sidebar to navigate up and down.',
  'Do not refresh the page during the test.',
  'Click "Submit" once you have finished typing.',
  'Timer will start automatically when you begin typing.',
  'Test will be automatically submitted once the timer ends.',
  'For any queries, WhatsApp - 8447949206.']

}];


export const wordLengthOptions = [
{ id: 'full', label: 'Full Length' },
{ id: 'flex', label: 'Flex' },
{ id: 'pick', label: 'Pick Start & End Word', best: true, help: 'Tap two words in the transcript — plays exactly that part' },
{ id: 'type-no', label: 'Type No. of Words', input: 'single' as const },
{ id: 'range', label: 'Word no. range', input: 'range' as const },
{ id: 'first-100', label: 'First 100 words' },
{ id: 'first-200', label: 'First 200 words' },
{ id: 'first-400', label: 'First 400 words' },
{ id: 'first-600', label: 'First 600 words' }];

export const dictationTranscript = `सभापति महोदय, मैं रक्षा मंत्रालय की माँगों का समर्थन करने के लिए खड़ा हुआ हूँ। वर्तमान घटनाओं से पता चलता है कि संसार का हर देश अपनी सुरक्षा के बारे में चिन्तित है और उसके लिए हर प्रयत्न कर रहा है। इस दृष्टि से अन्य देशों की तरह हमारे देश में भी रक्षा मंत्रालय का महत्व है। मुझे इस बात की खुशी है कि आप जहाँ अन्य मंत्रालयों की उनके पिछले साल के कामों के बारे में आलोचना हुई है, वहाँ इस मंत्रालय की कम आलोचना हुई है। इससे पता चलता है कि पिछले साल किसी भी देश के लिए मौटे तौर पर किया है। दूसरे देशों के खास तौर पर उनके मामलों में हस्तक्षेप न करें, लेकिन हमारे देश की सीमाओं और अखण्डता की रक्षा करें। इसलिए हमारे देश का यह कर्तव्य हो जाता है कि हम अपने पड़ोसियों के कार्यों पर पूरी नजर रखें, क्योंकि आज तक हमारे देश पर जो संकट आए, वे हमारे पड़ोसियों से आए हैं। 1965 में पाकिस्तान के साथ जो लड़ाई हुई और उसके बाद ताशकंद में जो समझौता हुआ, वह सिर्फ कागज पर ही रहा। पाकिस्तान ने उस पर कोई अमल नहीं किया। इस दृष्टि से बहुत जरूरी है कि हम अपने देश की सुरक्षा की हर तरह से व्यवस्था करें। हमारा उद्देश्य दूसरों पर आक्रमण करना नहीं है, लेकिन यदि हम पर कोई आक्रमण करे, तो हम में इतनी शक्ति अवश्य होनी चाहिए कि हम उसका डटकर सामना कर सकें। आप जानते हैं कि पिछले दिनों पाकिस्तान को अमरीका और चीन से काफी मदद मिली है। रक्षा मंत्रालय की रिपोर्ट में भी कहा गया है कि पिछले साल अमरीका ने पाकिस्तान को`;

export const dictationWords = dictationTranscript.split(/\s+/).filter(Boolean);
