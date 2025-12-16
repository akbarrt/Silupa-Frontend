import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Switch } from '../components/ui/switch';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';

export function Settings() {
  return (
    <div className="space-y-6 pb-20 lg:pb-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-heading font-semibold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your account and preferences</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Profile Information</CardTitle>
          <CardDescription className="text-muted-foreground">Update your personal details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Full Name</Label>
            <Input id="name" defaultValue="Admin User" className="text-foreground bg-background border-border" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input id="email" type="email" defaultValue="admin@silupa.com" className="text-foreground bg-background border-border" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
            <Input id="phone" type="tel" defaultValue="+62 812 3456 7890" className="text-foreground bg-background border-border" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Notifications</CardTitle>
          <CardDescription className="text-muted-foreground">Manage your notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-foreground">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive updates via email</p>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-foreground">Harvest Alerts</Label>
              <p className="text-sm text-muted-foreground">Get notified about new harvests</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-foreground">Distribution Updates</Label>
              <p className="text-sm text-muted-foreground">Track distribution status</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button variant="outline" className="bg-background text-foreground border-border hover:bg-muted">
          Cancel
        </Button>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Save Changes
        </Button>
      </div>
    </div>
  );
}
