import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';

const reportData = [
  { month: 'January 2024', harvest: '12,450 kg', distributed: '4,130 kg', revenue: 'Rp 45,000,000' },
  { month: 'December 2023', harvest: '11,200 kg', distributed: '3,850 kg', revenue: 'Rp 42,000,000' },
  { month: 'November 2023', harvest: '10,800 kg', distributed: '3,600 kg', revenue: 'Rp 39,500,000' },
];

export function ReportsTable() {
  return (
    <Card className="border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-foreground">Monthly Reports</CardTitle>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Download className="w-4 h-4 mr-2" strokeWidth={1.5} />
          Export CSV
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Period</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Total Harvest</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Distributed</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {reportData.map((report, index) => (
                <tr key={index} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{report.month}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{report.harvest}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{report.distributed}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{report.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
