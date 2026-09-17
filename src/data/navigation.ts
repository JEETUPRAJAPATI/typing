export interface NavChild {
  label: string;
  to: string;
}

export interface NavItem {
  label: string;
  icon: string;
  to?: string;
  badge?: 'live' | 'premium' | 'new';
  children?: NavChild[];
}

export const studentNav: NavItem[] = [
{ label: 'Home', icon: 'home', to: '/' },
{ label: 'Typing Exam', icon: 'keyboard', to: '/typing-exam' },
{ label: 'English Steno Exam', icon: 'penLine', to: '/english-steno' },
{ label: 'Hindi Steno Exam', icon: 'penLine', to: '/hindi-steno' },
{ label: 'Live Test (Typing)', icon: 'play', to: '/live-test/typing', badge: 'live' },
{ label: 'Live Test (Steno)', icon: 'play', to: '/live-test/steno', badge: 'live' },
{ label: 'Leaderboard', icon: 'trophy', to: '/leaderboard' },
{ label: 'Test Analysis (Results)', icon: 'barChart', to: '/test-analysis' },
{
  label: 'Test Analysis',
  icon: 'gauge',
  children: [
  { label: 'Typing', to: '/test-analysis/typing' },
  { label: 'Eng. Steno', to: '/test-analysis/eng-steno' },
  { label: 'Hindi Steno', to: '/test-analysis/hindi-steno' }]

},
{
  label: 'PDF File',
  icon: 'file',
  children: [
  { label: 'KC Magazines', to: '/pdf/kc-magazines' },
  { label: 'Progressive Magazines', to: '/pdf/progressive-magazines' }]

},
{ label: 'Plan & Pricing', icon: 'crown', to: '/plan-pricing', badge: 'premium' },
{ label: 'How to use?', icon: 'help', to: '/how-to-use' }];


export const adminNav: NavItem[] = [
{ label: 'Dashboard', icon: 'home', to: '/admin' },
{
  label: 'Test Management',
  icon: 'clipboard',
  children: [
  { label: 'Add New Test (Live, Preload)', to: '/admin/tests/new' },
  { label: 'Manage Test (Live, Preload)', to: '/admin/tests' }]

},
{
  label: 'Students Management',
  icon: 'users',
  children: [
  { label: 'All Students', to: '/admin/students' },
  { label: 'Add Student', to: '/admin/students/new' },
  { label: 'Active Students', to: '/admin/students/active' }]

},
{
  label: 'Exam Management',
  icon: 'layers',
  children: [
  { label: 'Add New Exam', to: '/admin/exams/new' },
  { label: 'Manage Exam', to: '/admin/exams' },
  { label: 'Result Pattern (Rules)', to: '/admin/result-pattern' }]

},
{ label: 'Screen Layout', icon: 'monitor', to: '/admin/screen-layout', badge: 'new' },
{
  label: 'Font Group',
  icon: 'type',
  children: [
  { label: 'Add New Font Group', to: '/admin/font-groups/new' },
  { label: 'Manage Font Groups', to: '/admin/font-groups' }]

},
{ label: 'Results (Typing/Steno)', icon: 'barChart', to: '/admin/results' },
{ label: 'Test Analysis (Results)', icon: 'gauge', to: '/admin/test-analysis' },
{ label: 'Leaderboard', icon: 'trophy', to: '/admin/leaderboard', badge: 'new' },
{ label: 'Backup & Restore', icon: 'database', to: '/admin/backup' },
{ label: 'Subscription & Plan', icon: 'wallet', to: '/admin/subscription' },
{ label: 'Settings', icon: 'settings', to: '/admin/settings' }];