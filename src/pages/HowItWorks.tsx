import { Card, CardContent } from '../components/ui/card';
import { Database, Warehouse, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Database,
    title: 'Input Data Panen',
    description: 'Farmers input harvest data including crop type, quantity, quality grade, and harvest date directly into the system.',
  },
  {
    icon: Warehouse,
    title: 'Simpan di Lumbung',
    description: 'Harvest is stored in designated lumbung (warehouses) with real-time tracking of storage capacity and conditions.',
  },
  {
    icon: BarChart3,
    title: 'Pantau & Distribusikan',
    description: 'Monitor inventory levels, track distribution, and generate reports for informed decision-making.',
  },
];

export function HowItWorks() {
  return (
    <div className="space-y-8 pb-20 lg:pb-8 max-w-5xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-heading font-semibold text-foreground">How It Works</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Three simple steps to modernize your agricultural operations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <Card className="border-border h-full">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-1 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-heading font-semibold text-primary">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-heading font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
            )}
          </div>
        ))}
      </div>

      <Card className="border-border bg-gradient-to-br from-primary/5 to-tertiary/5">
        <CardContent className="pt-6 space-y-4">
          <h2 className="text-2xl font-heading font-semibold text-foreground">Key Features</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary-foreground text-sm">✓</span>
              </div>
              <p className="text-foreground">Real-time inventory tracking across multiple lumbung locations</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary-foreground text-sm">✓</span>
              </div>
              <p className="text-foreground">Automated quality grading and storage recommendations</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary-foreground text-sm">✓</span>
              </div>
              <p className="text-foreground">Distribution tracking with delivery status updates</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary-foreground text-sm">✓</span>
              </div>
              <p className="text-foreground">Comprehensive analytics and reporting for data-driven decisions</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary-foreground text-sm">✓</span>
              </div>
              <p className="text-foreground">Multi-role access for farmers, warehouse managers, and administrators</p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
