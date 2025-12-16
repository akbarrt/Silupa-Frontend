import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';

interface AddHarvestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddHarvestModal({ open, onOpenChange }: AddHarvestModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-card text-foreground border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Add New Harvest</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="crop" className="text-foreground">Crop Type</Label>
            <Select>
              <SelectTrigger id="crop" className="bg-background text-foreground border-border">
                <SelectValue placeholder="Select crop type" />
              </SelectTrigger>
              <SelectContent className="bg-popover text-popover-foreground border-border">
                <SelectItem value="rice">Rice</SelectItem>
                <SelectItem value="corn">Corn</SelectItem>
                <SelectItem value="wheat">Wheat</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity" className="text-foreground">Quantity (kg)</Label>
            <Input id="quantity" type="number" placeholder="Enter quantity" className="bg-background text-foreground border-border" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="quality" className="text-foreground">Quality Grade</Label>
            <Select>
              <SelectTrigger id="quality" className="bg-background text-foreground border-border">
                <SelectValue placeholder="Select quality grade" />
              </SelectTrigger>
              <SelectContent className="bg-popover text-popover-foreground border-border">
                <SelectItem value="a">Grade A</SelectItem>
                <SelectItem value="b">Grade B</SelectItem>
                <SelectItem value="c">Grade C</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="lumbung" className="text-foreground">Lumbung</Label>
            <Select>
              <SelectTrigger id="lumbung" className="bg-background text-foreground border-border">
                <SelectValue placeholder="Select lumbung" />
              </SelectTrigger>
              <SelectContent className="bg-popover text-popover-foreground border-border">
                <SelectItem value="a">Lumbung A</SelectItem>
                <SelectItem value="b">Lumbung B</SelectItem>
                <SelectItem value="c">Lumbung C</SelectItem>
                <SelectItem value="d">Lumbung D</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="date" className="text-foreground">Harvest Date</Label>
            <Input id="date" type="date" className="bg-background text-foreground border-border" />
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="bg-background text-foreground border-border hover:bg-muted"
          >
            Cancel
          </Button>
          <Button
            onClick={() => onOpenChange(false)}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Add Harvest
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
