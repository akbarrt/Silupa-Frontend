import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, Truck, FileText, Settings, LogOut, User } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/inventory', icon: Package, label: 'Inventory' },
  { to: '/distribution', icon: Truck, label: 'Distribution' },
  { to: '/reports', icon: FileText, label: 'Reports' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-card border-r border-border">
      <div className="flex items-center justify-center h-16 px-6 border-b border-border">
        <h1 className="text-2xl font-heading font-semibold text-primary">SiLupa</h1>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-muted'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className="w-5 h-5" strokeWidth={1.5} />
                <span className="font-medium">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
      
      <Separator className="mx-4" />
      
      <div className="px-4 py-6 space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-foreground hover:bg-muted"
        >
          <User className="w-5 h-5" strokeWidth={1.5} />
          <span className="font-medium">Profile</span>
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-foreground hover:bg-muted"
        >
          <LogOut className="w-5 h-5" strokeWidth={1.5} />
          <span className="font-medium">Logout</span>
        </Button>
      </div>
    </aside>
  );
}
