export interface AdminTestRow {
  id: string;
  title: string;
  type: 'English Typing' | 'Hindi Typing' | 'English Steno' | 'Hindi Steno';
  category: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  fontGroup: string;
  mode: 'Live' | 'Preload';
  words: string;
  duration: string;
  status: 'Active' | 'Inactive';
  created: string;
}

export const adminTestRows: AdminTestRow[] = [
{ id: 'TST-0002356', title: 'English Typing Test 01', type: 'English Typing', category: 'SSC CGL', difficulty: 'Easy', fontGroup: 'Arial Group', mode: 'Live', words: '500 Words', duration: '10 Min', status: 'Active', created: '10 Aug 2026' },
{ id: 'TST-0002355', title: 'Hindi Typing Test 37', type: 'Hindi Typing', category: 'Delhi Police', difficulty: 'Moderate', fontGroup: 'Mangal Group', mode: 'Preload', words: '400 Words', duration: '10 Min', status: 'Active', created: '09 Aug 2026' },
{ id: 'TST-0002354', title: 'English Steno Dictation 02', type: 'English Steno', category: 'SSC Stenographer', difficulty: 'Hard', fontGroup: 'English Steno Group', mode: 'Live', words: '10 Min Dictation', duration: '10 Min', status: 'Active', created: '09 Aug 2026' },
{ id: 'TST-0002353', title: 'Hindi Steno Dictation 15', type: 'Hindi Steno', category: 'Court Steno', difficulty: 'Moderate', fontGroup: 'Hindi Steno Group', mode: 'Preload', words: '800 Words', duration: '15 Min', status: 'Active', created: '08 Aug 2026' },
{ id: 'TST-0002352', title: 'English Typing Test 05', type: 'English Typing', category: 'SSC CHSL', difficulty: 'Easy', fontGroup: 'Times New Roman Group', mode: 'Live', words: '350 Words', duration: '10 Min', status: 'Inactive', created: '07 Aug 2026' },
{ id: 'TST-0002351', title: 'Hindi Typing Practice 12', type: 'Hindi Typing', category: 'Practice', difficulty: 'Easy', fontGroup: 'Kruti Dev Group', mode: 'Preload', words: '300 Words', duration: '10 Min', status: 'Active', created: '07 Aug 2026' },
{ id: 'TST-0002350', title: 'English Steno Dictation 05', type: 'English Steno', category: 'SSC Stenographer', difficulty: 'Hard', fontGroup: 'Pitman Group', mode: 'Preload', words: '15 Min Dictation', duration: '15 Min', status: 'Inactive', created: '06 Aug 2026' },
{ id: 'TST-0002349', title: 'Hindi Steno Dictation 03', type: 'Hindi Steno', category: 'Court Steno', difficulty: 'Moderate', fontGroup: 'Hindi Steno Group', mode: 'Live', words: '900 Words', duration: '20 Min', status: 'Active', created: '05 Aug 2026' },
{ id: 'TST-0002348', title: 'English Typing Test 09', type: 'English Typing', category: 'UPSSSC', difficulty: 'Easy', fontGroup: 'Verdana Group', mode: 'Preload', words: '250 Words', duration: '10 Min', status: 'Active', created: '05 Aug 2026' },
{ id: 'TST-0002347', title: 'Hindi Typing Test 20', type: 'Hindi Typing', category: 'UP Police', difficulty: 'Moderate', fontGroup: 'Aparajita Group', mode: 'Live', words: '450 Words', duration: '10 Min', status: 'Inactive', created: '04 Aug 2026' }];


export const difficultyTone: Record<string, string> = {
  Easy: 'bg-emerald-50 text-emerald-700',
  Moderate: 'bg-amber-50 text-amber-700',
  Hard: 'bg-rose-50 text-rose-700'
};

export const modeTone: Record<string, string> = {
  Live: 'bg-emerald-50 text-emerald-700',
  Preload: 'bg-amber-50 text-amber-700'
};

export const statusTone: Record<string, string> = {
  Active: 'bg-emerald-50 text-emerald-700',
  Inactive: 'bg-rose-50 text-rose-700',
  Pending: 'bg-amber-50 text-amber-700',
  Expired: 'bg-slate-100 text-slate-600'
};