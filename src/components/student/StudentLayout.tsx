import React from 'react';
import { StudentSidebar } from './StudentSidebar';
import { StudentHeader } from './StudentHeader';

interface StudentLayoutProps {
  children: React.ReactNode;
  showDownloadApp?: boolean;
  showSearch?: boolean;
}

export function StudentLayout({
  children,
  showDownloadApp = false,
  showSearch = false
}: StudentLayoutProps) {
  return (
    <div className="flex h-full min-h-screen w-full bg-canvas">
      <StudentSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <StudentHeader showDownloadApp={showDownloadApp} showSearch={showSearch} />
        <main className="scroll-thin flex-1 overflow-y-auto p-5">{children}</main>
      </div>
    </div>);

}