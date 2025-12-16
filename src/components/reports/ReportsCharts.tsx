import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const cropDistribution = [
  { name: 'Rice', value: 45 },
  { name: 'Corn', value: 30 },
  { name: 'Wheat', value: 25 },
];

const COLORS = ['hsl(142, 45%, 38%)', 'hsl(28, 85%, 60%)', 'hsl(34, 30%, 75%)'];

export function ReportsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Crop Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={cropDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {cropDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(0, 0%, 100%)',
                  border: '1px solid hsl(0, 0%, 90%)',
                  borderRadius: '8px',
                  color: 'hsl(210, 13%, 20%)',
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Monthly Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <span className="text-foreground font-medium">Total Harvest</span>
              <span className="text-2xl font-heading font-semibold text-foreground">12,450 kg</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <span className="text-foreground font-medium">Total Distributed</span>
              <span className="text-2xl font-heading font-semibold text-foreground">4,130 kg</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <span className="text-foreground font-medium">In Storage</span>
              <span className="text-2xl font-heading font-semibold text-foreground">8,320 kg</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
