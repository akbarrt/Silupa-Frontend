import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { MapPin, Calendar, Package } from 'lucide-react';

const distributions = [
  {
    id: 'D001',
    source: 'Lumbung A',
    destination: 'Market A',
    quantity: '500 kg',
    date: '2024-01-15',
    status: 'delivered',
  },
  {
    id: 'D002',
    source: 'Lumbung B',
    destination: 'Market B',
    quantity: '750 kg',
    date: '2024-01-14',
    status: 'in-transit',
  },
  {
    id: 'D003',
    source: 'Lumbung C',
    destination: 'Market C',
    quantity: '620 kg',
    date: '2024-01-13',
    status: 'delivered',
  },
  {
    id: 'D004',
    source: 'Lumbung A',
    destination: 'Market D',
    quantity: '450 kg',
    date: '2024-01-12',
    status: 'pending',
  },
];

const statusColors = {
  delivered: 'bg-success/10 text-success border-success/20',
  'in-transit': 'bg-warning/10 text-warning border-warning/20',
  pending: 'bg-muted text-muted-foreground border-border',
};

export function DistributionTimeline() {
  return (
    <div className="space-y-4">
      {distributions.map((dist) => (
        <Card key={dist.id} className="border-border hover:bg-muted/50 transition-colors">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">{dist.id}</span>
                  <Badge variant="outline" className={statusColors[dist.status as keyof typeof statusColors]}>
                    {dist.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                    <div>
                      <p className="text-xs text-muted-foreground">From</p>
                      <p className="text-sm font-medium text-foreground">{dist.source}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                    <div>
                      <p className="text-xs text-muted-foreground">To</p>
                      <p className="text-sm font-medium text-foreground">{dist.destination}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                    <div>
                      <p className="text-xs text-muted-foreground">Quantity</p>
                      <p className="text-sm font-medium text-foreground">{dist.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-sm">{dist.date}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
