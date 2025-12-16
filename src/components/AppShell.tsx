import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { MobileNav } from './MobileNav';

export function AppShell() {
  return (
    <div className="flex h-screen overflow-hidden bg-neutral">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto px-4 py-8 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
