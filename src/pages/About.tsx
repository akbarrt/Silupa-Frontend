import { Card, CardContent } from '../components/ui/card';
import { Leaf, Shield, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <div className="space-y-8 pb-20 lg:pb-8 max-w-5xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-heading font-semibold text-foreground">About SiLupa</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sistem Lumbung Panen - Modernizing agriculture through transparency, efficiency, and sustainability
        </p>
      </div>

      <div className="relative rounded-lg overflow-hidden h-64 lg:h-96">
        <img
          src="https://images.unsplash.com/photo-1592503254549-9e3b1912a4f8?auto=format&fit=crop&w=1200&q=80"
          alt="farm warehouse illustration"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border">
          <CardContent className="pt-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground">Transparency</h3>
            <p className="text-muted-foreground">
              Track every harvest from field to storage with complete visibility and accountability
            </p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="pt-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground">Efficiency</h3>
            <p className="text-muted-foreground">
              Streamline operations with digital tools designed for modern agricultural management
            </p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="pt-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground">Sustainability</h3>
            <p className="text-muted-foreground">
              Support sustainable farming practices through data-driven insights and resource optimization
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border">
        <CardContent className="pt-6 space-y-4">
          <h2 className="text-2xl font-heading font-semibold text-foreground">Our Mission</h2>
          <p className="text-foreground leading-relaxed">
            SiLupa is dedicated to empowering farmers and agricultural communities by providing modern digital tools
            that enhance transparency, improve efficiency, and promote sustainable practices. We believe that by
            connecting traditional farming wisdom with cutting-edge technology, we can create a more resilient and
            prosperous agricultural sector.
          </p>
          <p className="text-foreground leading-relaxed">
            Our platform serves multiple stakeholders - from farmers (Petani) who input harvest data, to warehouse
            managers (Pengelola) who oversee storage, to administrators who monitor the entire supply chain. Together,
            we're building a more transparent and efficient agricultural ecosystem.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
