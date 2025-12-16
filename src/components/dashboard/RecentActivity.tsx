import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Package, Truck, AlertCircle } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'harvest',
    icon: Package,
    title: 'New harvest recorded',
    description: '850 kg of rice from Petani Joko',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'distribution',
    icon: Truck,
    title: 'Distribution completed',
    description: '500 kg delivered to Market A',
    time: '5 hours ago',
  },
  {
    id: 3,
    type: 'alert',
    icon: AlertCircle,
    title: 'Storage capacity warning',
    description: 'Lumbung C at 92% capacity',
    time: '1 day ago',
  },
];

export function RecentActivity() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <activity.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">{activity.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
