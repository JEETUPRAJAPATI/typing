import React, { useState } from 'react';
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-full min-h-screen w-full bg-canvas">
      <StudentSidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <StudentHeader
          showDownloadApp={showDownloadApp}
          showSearch={showSearch}
          onMenuClick={() => setMobileOpen(true)} />

        <main className="scroll-thin flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-5">{children}</main>
      </div>
    </div>);

}