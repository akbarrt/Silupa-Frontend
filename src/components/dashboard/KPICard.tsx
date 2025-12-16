import { Card, CardContent } from '../ui/card';
import { TrendingUp, TrendingDown, StarIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: StarIcon;
}

export function KPICard({ title, value, change, trend, icon: Icon }: KPICardProps) {
  return (
    <Card className="border-border transition-colors hover:bg-muted/50">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-heading font-semibold text-foreground">{value}</p>
            <div className="flex items-center gap-1">
              {trend === 'up' ? (
                <TrendingUp className="w-4 h-4 text-success" strokeWidth={1.5} />
              ) : (
                <TrendingDown className="w-4 h-4 text-destructive" strokeWidth={1.5} />
              )}
              <span className={`text-sm font-medium ${trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                {change}
              </span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
