import { Search, Bell } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/inventory': 'Inventory Management',
  '/distribution': 'Distribution Tracker',
  '/reports': 'Reports & Analytics',
  '/settings': 'Settings',
  '/about': 'About SiLupa',
  '/how-it-works': 'How It Works',
};

export function TopBar() {
  const location = useLocation();
  const pageTitle = pageTitles[location.pathname] || 'SiLupa';

  return (
    <header className="h-16 border-b border-border bg-card px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-full">
        <h2 className="text-xl font-heading font-semibold text-foreground lg:block hidden">
          {pageTitle}
        </h2>
        
        <div className="flex items-center gap-4 flex-1 lg:flex-initial lg:ml-auto">
          <div className="relative flex-1 lg:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 bg-muted border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-muted"
          >
            <Bell className="w-5 h-5" strokeWidth={1.5} />
          </Button>
          
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">AD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
