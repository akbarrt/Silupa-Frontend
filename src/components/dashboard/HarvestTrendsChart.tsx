import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', harvest: 850 },
  { month: 'Feb', harvest: 920 },
  { month: 'Mar', harvest: 1100 },
  { month: 'Apr', harvest: 1350 },
  { month: 'May', harvest: 1580 },
  { month: 'Jun', harvest: 1420 },
];

export function HarvestTrendsChart() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Harvest Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 90%)" />
            <XAxis dataKey="month" stroke="hsl(0, 0%, 40%)" />
            <YAxis stroke="hsl(0, 0%, 40%)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(0, 0%, 100%)',
                border: '1px solid hsl(0, 0%, 90%)',
                borderRadius: '8px',
                color: 'hsl(210, 13%, 20%)',
              }}
            />
            <Line
              type="monotone"
              dataKey="harvest"
              stroke="hsl(142, 45%, 38%)"
              strokeWidth={2}
              dot={{ fill: 'hsl(142, 45%, 38%)', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
