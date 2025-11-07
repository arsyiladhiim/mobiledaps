import { DashboardHeader } from "./components/DashboardHeader";
import { MetricCard } from "./components/MetricCard";
import { VisitProgress } from "./components/VisitProgress";
import { VolumeChart } from "./components/VolumeChart";
import { QuickActions } from "./components/QuickActions";
import { Calendar, MapPin, Users, ShoppingCart, Weight, UserPlus } from "lucide-react";

export default function App() {
  // Mock data
  const dashboardData = {
    workingDays: { current: 18, total: 25 },
    visits: { current: 42, goal: 60 },
    areaCoverage: { current: 35, total: 50 },
    activeCustomers: 128,
    volumeTarget: { current: 45.8, target: 75.0 },
    noo: { current: 8, target: 15 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pb-20">
      {/* Header */}
      <DashboardHeader />

      {/* Main Content */}
      <div className="px-4 pt-6 space-y-4">
        {/* Working Days Card */}
        <MetricCard
          title="Hari Kerja"
          value={dashboardData.workingDays.current}
          total={dashboardData.workingDays.total}
          icon={Calendar}
          color="green"
          delay={0}
        />

        {/* Visit Progress */}
        <VisitProgress
          current={dashboardData.visits.current}
          goal={dashboardData.visits.goal}
          delay={0.1}
        />

        {/* Two Column Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <MetricCard
            title="Area Tercover"
            value={dashboardData.areaCoverage.current}
            total={dashboardData.areaCoverage.total}
            subtitle="toko"
            icon={MapPin}
            color="emerald"
            delay={0.2}
            compact
          />
          <MetricCard
            title="Customer Aktif"
            value={dashboardData.activeCustomers}
            subtitle="pembelian"
            icon={ShoppingCart}
            color="green"
            delay={0.25}
            compact
          />
        </div>

        {/* Volume Target Chart */}
        <VolumeChart
          current={dashboardData.volumeTarget.current}
          target={dashboardData.volumeTarget.target}
          delay={0.3}
        />

        {/* NOO Card */}
        <MetricCard
          title="NOO - Customer Baru"
          value={dashboardData.noo.current}
          total={dashboardData.noo.target}
          subtitle="terdaftar"
          icon={UserPlus}
          color="teal"
          delay={0.35}
          highlight
        />

        {/* Quick Actions */}
        <QuickActions delay={0.4} />
      </div>
    </div>
  );
}
