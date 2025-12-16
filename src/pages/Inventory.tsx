import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Plus } from 'lucide-react';
import { InventoryTable } from '../components/inventory/InventoryTable';
import { AddHarvestModal } from '../components/inventory/AddHarvestModal';

export function Inventory() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6 pb-20 lg:pb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-heading font-semibold text-foreground">Inventory Management</h1>
          <p className="text-muted-foreground mt-2">Manage your harvest lots and storage</p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="w-5 h-5 mr-2" strokeWidth={1.5} />
          Add Harvest
        </Button>
      </div>

      <InventoryTable />
      <AddHarvestModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
