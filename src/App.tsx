import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/student/Home';
import { TypingExam } from './pages/student/TypingExam';
import { ExamDetail } from './pages/student/ExamDetail';
import { EnglishSteno } from './pages/student/EnglishSteno';
import { DictationList } from './pages/student/DictationList';
import { StenoPractice } from './pages/student/StenoPractice';
import { LiveTestTyping } from './pages/student/LiveTestTyping';
import { Signup } from './pages/student/Signup';
import { TypingResult } from './pages/student/TypingResult';
import { StenoResult } from './pages/student/StenoResult';
import { ComingSoon } from './pages/student/ComingSoon';
import { AdminDashboard } from './pages/admin/Dashboard';
import { ManageTest } from './pages/admin/ManageTest';
import { AddNewTest } from './pages/admin/AddNewTest';
import { StudentsManagement } from './pages/admin/StudentsManagement';
import { AddStudent } from './pages/admin/AddStudent';
import { ExamManagement } from './pages/admin/ExamManagement';
import { AddNewExam } from './pages/admin/AddNewExam';
import { ScreenLayout } from './pages/admin/ScreenLayout';
import { AdminTestAnalysis } from './pages/admin/TestAnalysis';
import { AdminLeaderboard } from './pages/admin/Leaderboard';
import { Subscription } from './pages/admin/Subscription';
import { FontGroups } from './pages/admin/FontGroups';
import { AddFontGroup } from './pages/admin/AddFontGroup';
import { ResultPattern } from './pages/admin/ResultPattern';
import { PracticeSetup } from './pages/student/PracticeSetup';
import { TopRanks } from './pages/student/TopRanks';
import { AIDeepAnalysis } from './pages/student/AIDeepAnalysis';
import { DetailedAnalysisReport } from './pages/student/DetailedAnalysisReport';
import { PracticeWords } from './pages/student/PracticeWords';
import { TestRankList } from './pages/student/TestRankList';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Student */}
        <Route path="/" element={<Home />} />
        <Route path="/typing-exam" element={<TypingExam />} />
        <Route path="/typing-exam/:examId" element={<ExamDetail />} />
        <Route path="/english-steno" element={<EnglishSteno />} />
        <Route path="/hindi-steno" element={<EnglishSteno />} />
        <Route path="/steno/:dictationId" element={<DictationList />} />
        <Route path="/steno/:dictationId/practice" element={<StenoPractice />} />
        <Route path="/live-test/typing" element={<LiveTestTyping />} />
        <Route path="/live-test/steno" element={<LiveTestTyping />} />
        <Route path="/live-test/typing/:testId/rank" element={<TestRankList />} />
        <Route path="/result/typing" element={<TypingResult />} />
        <Route path="/result/steno" element={<StenoResult />} />
        <Route path="/test-analysis" element={<AdminTestAnalysis />} />
        <Route path="/test-analysis/typing" element={<TypingResult />} />
        <Route path="/test-analysis/eng-steno" element={<StenoResult />} />
        <Route path="/test-analysis/hindi-steno" element={<StenoResult />} />
        <Route path="/result/typing/ai-analysis" element={<AIDeepAnalysis />} />
        <Route path="/result/typing/detailed-report" element={<DetailedAnalysisReport />} />
        <Route path="/result/typing/practice" element={<PracticeWords />} />
        <Route path="/self-assessment/:mode" element={<PracticeSetup />} />
        <Route path="/leaderboard" element={<AdminLeaderboard />} />
        <Route path="/top-ranks" element={<TopRanks />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/pdf/kc-magazines" element={<ComingSoon title="KC Magazines (PDF)" />} />
        <Route
          path="/pdf/progressive-magazines"
          element={<ComingSoon title="Progressive Magazines (PDF)" />} />
        
        <Route path="/plan-pricing" element={<ComingSoon title="Plan & Pricing" />} />
        <Route path="/how-to-use" element={<ComingSoon title="How to use?" />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/tests" element={<ManageTest />} />
        <Route path="/admin/tests/new" element={<AddNewTest />} />
        <Route path="/admin/students" element={<StudentsManagement />} />
        <Route path="/admin/students/active" element={<StudentsManagement />} />
        <Route path="/admin/students/new" element={<AddStudent />} />
        <Route path="/admin/exams" element={<ExamManagement />} />
        <Route path="/admin/exams/new" element={<AddNewExam />} />
        <Route path="/admin/result-pattern" element={<ResultPattern />} />
        <Route path="/admin/screen-layout" element={<ScreenLayout />} />
        <Route path="/admin/results" element={<AdminTestAnalysis />} />
        <Route path="/admin/test-analysis" element={<AdminTestAnalysis />} />
        <Route path="/admin/leaderboard" element={<AdminLeaderboard />} />
        <Route path="/admin/subscription" element={<Subscription />} />
        <Route path="/admin/font-groups" element={<FontGroups />} />
        <Route path="/admin/font-groups/new" element={<AddFontGroup />} />
        <Route path="/admin/backup" element={<ComingSoon title="Backup & Restore" />} />
        <Route path="/admin/settings" element={<ComingSoon title="Settings" />} />

        <Route path="*" element={<ComingSoon title="Page not found" />} />
      </Routes>
    </BrowserRouter>);

}