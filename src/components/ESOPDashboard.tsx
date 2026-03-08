import { TrendingUp, Users, Target, ShieldCheck } from "lucide-react";

const statCards = [
  {
    label: "ESOP INVENTORY",
    sublabel: "Total Shares Reserved",
    value: "150,000",
    icon: TrendingUp,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
  },
  {
    label: "POOL SIZE",
    sublabel: "Active Equity Pools",
    value: "3",
    icon: Users,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
  },
  {
    label: "ACTIVE ALLOCATIONS",
    sublabel: "Approved for distribution",
    value: "50.0%",
    icon: Target,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-500/10",
  },
  {
    label: "COMPLIANCE HEALTH",
    sublabel: "Regulatory Compliance Index",
    value: "52/100",
    icon: ShieldCheck,
    iconColor: "text-red-500",
    iconBg: "bg-red-500/10",
  },
];

const poolData = [
  { label: "Allocated", value: 45, color: "#22c55e" },
  { label: "Reserved", value: 30, color: "#f59e0b" },
  { label: "Available", value: 25, color: "#3b82f6" },
];

const vestingData = [
  { label: "Inception", allocated: 85, vested: 40, forfeited: 10 },
  { label: "Initial Cliff", allocated: 70, vested: 55, forfeited: 8 },
  { label: "Milestone", allocated: 60, vested: 45, forfeited: 12 },
  { label: "Maturity", allocated: 90, vested: 70, forfeited: 5 },
  { label: "Finish", allocated: 50, vested: 35, forfeited: 15 },
];

const DonutChart = () => {
  const total = poolData.reduce((sum, d) => sum + d.value, 0);
  let cumulative = 0;
  const size = 140;
  const strokeWidth = 28;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {poolData.map((segment, i) => {
          const offset = (cumulative / total) * circumference;
          const length = (segment.value / total) * circumference;
          cumulative += segment.value;
          return (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${length} ${circumference - length}`}
              strokeDashoffset={-offset}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          );
        })}
      </svg>
      <div className="flex gap-4 mt-3">
        {poolData.map((d, i) => (
          <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
};

const BarChart = () => {
  const maxVal = 100;
  const barWidth = 36;
  const barGap = 24;
  const chartHeight = 120;

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-end gap-1" style={{ height: chartHeight }}>
        {vestingData.map((d, i) => (
          <div key={i} className="flex flex-col items-center" style={{ width: barWidth + barGap }}>
            <div className="flex gap-0.5 items-end" style={{ height: chartHeight }}>
              <div
                className="rounded-t"
                style={{
                  width: barWidth / 3,
                  height: `${(d.allocated / maxVal) * chartHeight}px`,
                  backgroundColor: "#22c55e",
                }}
              />
              <div
                className="rounded-t"
                style={{
                  width: barWidth / 3,
                  height: `${(d.vested / maxVal) * chartHeight}px`,
                  backgroundColor: "#3b82f6",
                }}
              />
              <div
                className="rounded-t"
                style={{
                  width: barWidth / 3,
                  height: `${(d.forfeited / maxVal) * chartHeight}px`,
                  backgroundColor: "#f59e0b",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-around mt-2">
        {vestingData.map((d, i) => (
          <span key={i} className="text-[10px] text-muted-foreground">{d.label}</span>
        ))}
      </div>
      <div className="flex gap-4 mt-3">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Allocated
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Vested
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Forfeited
        </div>
      </div>
    </div>
  );
};

const ESOPDashboard = () => {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-wide uppercase text-foreground">ESOP Infrastructure</h3>
            <p className="text-xs text-muted-foreground">Enterprise stock option architecture and stakeholder vesting protocols.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-xs font-medium rounded-md border border-border text-muted-foreground hover:bg-muted transition-colors">
            Export
          </button>
          <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            + New
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 border-b border-border">
        {statCards.map((stat, i) => (
          <div key={i} className="space-y-1">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
            <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
            <div className="flex items-center gap-2 pt-1">
              <div className={`w-7 h-7 rounded-md ${stat.iconBg} flex items-center justify-center`}>
                <stat.icon className={`w-3.5 h-3.5 ${stat.iconColor}`} />
              </div>
              <span className="text-xl font-bold text-foreground">{stat.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Pool Distribution</h4>
          <DonutChart />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Vesting Overview</h4>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default ESOPDashboard;
