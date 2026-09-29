export interface NavChild {
  label: string;
  to: string;
}

export interface NavItem {
  label: string;
  icon: string;
  to?: string;
  badge?: 'live' | 'premium' | 'new';
  color?: string;
  children?: NavChild[];
}

export const studentNav: NavItem[] = [
{ label: 'Home', icon: 'home', to: '/', color: '#38BDF8' },
{ label: 'My Account', icon: 'userCircle', to: '/my-account', color: '#A78BFA' },
{ label: 'Typing Exam', icon: 'keyboard', to: '/typing-exam', color: '#34D399' },
{ label: 'English Steno Exam', icon: 'penLine', to: '/english-steno', color: '#FB923C' },
{ label: 'Hindi Steno Exam', icon: 'penLine', to: '/hindi-steno', color: '#F472B6' },
{ label: 'Live Test (Typing)', icon: 'play', to: '/live-test/typing', badge: 'live', color: '#FB7185' },
{ label: 'Live Test (Steno)', icon: 'play', to: '/live-test/steno', badge: 'live', color: '#FBBF24' },
{ label: 'Leaderboard', icon: 'trophy', to: '/leaderboard', color: '#FACC15' },
{ label: 'Top Ranks', icon: 'trophy', to: '/top-ranks', color: '#2DD4BF' },
{ label: 'Test Analysis (Results)', icon: 'barChart', to: '/test-analysis', color: '#60A5FA' },
{
  label: 'Self Assessment',
  icon: 'graduationCap',
  color: '#C084FC',
  children: [
  { label: 'Eng. Typing', to: '/self-assessment/eng-typing' },
  { label: 'Hindi Typing', to: '/self-assessment/hindi-typing' },
  { label: 'Eng. Steno', to: '/self-assessment/eng-steno' },
  { label: 'Hindi Steno', to: '/self-assessment/hindi-steno' }]

},
{
  label: 'Test Analysis',
  icon: 'gauge',
  color: '#22D3EE',
  children: [
  { label: 'Typing', to: '/test-analysis/typing' },
  { label: 'Eng. Steno', to: '/test-analysis/eng-steno' },
  { label: 'Hindi Steno', to: '/test-analysis/hindi-steno' }]

},
{
  label: 'PDF File',
  icon: 'file',
  color: '#F87171',
  children: [
  { label: 'KC Magazines', to: '/pdf/kc-magazines' },
  { label: 'Progressive Magazines', to: '/pdf/progressive-magazines' }]

},
{ label: 'Plan & Pricing', icon: 'crown', to: '/plan-pricing', badge: 'premium', color: '#FBBF24' },
{ label: 'Support', icon: 'headphones', to: '/support', color: '#34D399' },
{ label: 'How to use?', icon: 'help', to: '/how-to-use', color: '#94A3B8' },
{ label: 'Typing Games', icon: 'gamepad', to: '/typing-games', badge: 'new', color: '#4ADE80' }];


export const adminNav: NavItem[] = [
{ label: 'Dashboard', icon: 'home', to: '/admin', color: '#38BDF8' },
{
  label: 'Test Management',
  icon: 'clipboard',
  color: '#34D399',
  children: [
  { label: 'Add New Test (Live, Preload)', to: '/admin/tests/new' },
  { label: 'Manage Test (Live, Preload)', to: '/admin/tests' }]

},
{
  label: 'Students Management',
  icon: 'users',
  color: '#A78BFA',
  children: [
  { label: 'All Students', to: '/admin/students' },
  { label: 'Add Student', to: '/admin/students/new' },
  { label: 'Active Students', to: '/admin/students/active' }]

},
{
  label: 'Exam Management',
  icon: 'layers',
  color: '#FB923C',
  children: [
  { label: 'Add New Exam', to: '/admin/exams/new' },
  { label: 'Manage Exam', to: '/admin/exams' },
  { label: 'Result Pattern (Rules)', to: '/admin/result-pattern' }]

},
{ label: 'Screen Layout', icon: 'monitor', to: '/admin/screen-layout', badge: 'new', color: '#F472B6' },
{
  label: 'Font Group',
  icon: 'type',
  color: '#60A5FA',
  children: [
  { label: 'Add New Font Group', to: '/admin/font-groups/new' },
  { label: 'Manage Font Groups', to: '/admin/font-groups' }]

},
{ label: 'Results (Typing/Steno)', icon: 'barChart', to: '/admin/results', color: '#FACC15' },
{ label: 'Test Analysis (Results)', icon: 'gauge', to: '/admin/test-analysis', color: '#22D3EE' },
{ label: 'Leaderboard', icon: 'trophy', to: '/admin/leaderboard', badge: 'new', color: '#FBBF24' },
{ label: 'Backup & Restore', icon: 'database', to: '/admin/backup', color: '#94A3B8' },
{ label: 'Subscription & Plan', icon: 'wallet', to: '/admin/subscription', color: '#4ADE80' },
{ label: 'Settings', icon: 'settings', to: '/admin/settings', color: '#C084FC' }];