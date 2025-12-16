import { KPICard } from '../components/dashboard/KPICard';
import { HarvestTrendsChart } from '../components/dashboard/HarvestTrendsChart';
import { StorageCapacityChart } from '../components/dashboard/StorageCapacityChart';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { Package, TrendingUp, Truck } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="space-y-8 pb-20 lg:pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KPICard
          title="Total Harvest"
          value="12,450 kg"
          change="+12.5%"
          trend="up"
          icon={Package}
        />
        <KPICard
          title="Available Stock"
          value="8,320 kg"
          change="-5.2%"
          trend="down"
          icon={TrendingUp}
        />
        <KPICard
          title="Distributed Stock"
          value="4,130 kg"
          change="+8.3%"
          trend="up"
          icon={Truck}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HarvestTrendsChart />
        <StorageCapacityChart />
      </div>

      <RecentActivity />
    </div>
  );
}
