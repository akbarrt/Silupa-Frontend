import { ReportsCharts } from '../components/reports/ReportsCharts';
import { ReportsTable } from '../components/reports/ReportsTable';

export function Reports() {
  return (
    <div className="space-y-6 pb-20 lg:pb-8">
      <div>
        <h1 className="text-3xl font-heading font-semibold text-foreground">Reports & Analytics</h1>
        <p className="text-muted-foreground mt-2">View detailed analytics and export reports</p>
      </div>

      <ReportsCharts />
      <ReportsTable />
    </div>
  );
}
