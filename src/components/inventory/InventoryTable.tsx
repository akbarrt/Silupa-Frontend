import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

const inventoryData = [
  {
    id: 'H001',
    crop: 'Rice',
    quantity: '850 kg',
    quality: 'A',
    lumbung: 'Lumbung A',
    date: '2024-01-15',
    status: 'stored',
  },
  {
    id: 'H002',
    crop: 'Corn',
    quantity: '620 kg',
    quality: 'B',
    lumbung: 'Lumbung B',
    date: '2024-01-14',
    status: 'stored',
  },
  {
    id: 'H003',
    crop: 'Rice',
    quantity: '1200 kg',
    quality: 'A',
    lumbung: 'Lumbung C',
    date: '2024-01-13',
    status: 'distributed',
  },
  {
    id: 'H004',
    crop: 'Wheat',
    quantity: '450 kg',
    quality: 'B',
    lumbung: 'Lumbung A',
    date: '2024-01-12',
    status: 'stored',
  },
];

const statusColors = {
  stored: 'bg-success/10 text-success border-success/20',
  distributed: 'bg-primary/10 text-primary border-primary/20',
};

export function InventoryTable() {
  return (
    <Card className="border-border">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-foreground">ID</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Crop</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Quantity</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Quality</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Lumbung</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {inventoryData.map((item) => (
                <tr key={item.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{item.id}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{item.crop}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{item.quantity}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{item.quality}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{item.lumbung}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{item.date}</td>
                  <td className="px-6 py-4">
                    <Badge variant="outline" className={statusColors[item.status as keyof typeof statusColors]}>
                      {item.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
