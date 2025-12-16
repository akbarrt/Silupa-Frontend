import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { lumbung: 'Lumbung A', capacity: 85, available: 15 },
  { lumbung: 'Lumbung B', capacity: 70, available: 30 },
  { lumbung: 'Lumbung C', capacity: 92, available: 8 },
  { lumbung: 'Lumbung D', capacity: 65, available: 35 },
];

export function StorageCapacityChart() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Storage Capacity</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 90%)" />
            <XAxis dataKey="lumbung" stroke="hsl(0, 0%, 40%)" />
            <YAxis stroke="hsl(0, 0%, 40%)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(0, 0%, 100%)',
                border: '1px solid hsl(0, 0%, 90%)',
                borderRadius: '8px',
                color: 'hsl(210, 13%, 20%)',
              }}
            />
            <Bar dataKey="capacity" fill="hsl(142, 45%, 38%)" radius={[8, 8, 0, 0]} />
            <Bar dataKey="available" fill="hsl(28, 85%, 60%)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
