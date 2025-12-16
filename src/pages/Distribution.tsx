import { DistributionTimeline } from '../components/distribution/DistributionTimeline';

export function Distribution() {
  return (
    <div className="space-y-6 pb-20 lg:pb-8">
      <div>
        <h1 className="text-3xl font-heading font-semibold text-foreground">Distribution Tracker</h1>
        <p className="text-muted-foreground mt-2">Track dispatches and deliveries</p>
      </div>

      <DistributionTimeline />
    </div>
  );
}
