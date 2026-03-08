const grants = [
  {
    name: "BROOKSHIRE",
    avatar: "bg-blue-500",
    stakeholder: "Brookshire",
    shares: "10,000",
    activeGranted: "Active",
    maturity: "100%",
    executionDate: "22 Feb 2026",
  },
  {
    name: "FALCON",
    avatar: "bg-emerald-500",
    stakeholder: "Falcon",
    shares: "10,000",
    activeGranted: "Active",
    maturity: "100%",
    executionDate: "22 Feb 2026",
  },
  {
    name: "THORNHILL",
    avatar: "bg-orange-500",
    stakeholder: "Thornhill",
    shares: "10,000",
    activeGranted: "Active",
    maturity: "90%",
    executionDate: "22 Feb 2026",
  },
  {
    name: "ARMADA",
    avatar: "bg-purple-500",
    stakeholder: "Armada",
    shares: "10,000",
    activeGranted: "Active",
    maturity: "100%",
    executionDate: "22 Feb 2026",
  },
  {
    name: "AVEALORE",
    avatar: "bg-pink-500",
    stakeholder: "Avealore",
    shares: "10,000",
    activeGranted: "Active",
    maturity: "100%",
    executionDate: "13 Feb 2026",
  },
];

const GrantLedger = () => {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div>
          <h3 className="text-sm font-bold tracking-wide uppercase text-foreground">Grant Ledger</h3>
          <p className="text-xs text-muted-foreground">Comprehensive record of equity allocations.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-xs font-medium rounded-md border border-border text-muted-foreground hover:bg-muted transition-colors">
            ↻ Refresh
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-6 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Stakeholder</th>
              <th className="text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Shares Granted</th>
              <th className="text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Status</th>
              <th className="text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Maturity</th>
              <th className="text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Execution Date</th>
            </tr>
          </thead>
          <tbody>
            {grants.map((grant, i) => (
              <tr key={i} className="border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors">
                <td className="px-6 py-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full ${grant.avatar} flex items-center justify-center`}>
                      <span className="text-[10px] font-bold text-white">{grant.name[0]}</span>
                    </div>
                    <span className="font-semibold text-foreground text-xs tracking-wide">{grant.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-foreground font-medium text-xs">{grant.shares}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600">
                    {grant.activeGranted}
                  </span>
                </td>
                <td className="px-4 py-3 text-foreground text-xs">{grant.maturity}</td>
                <td className="px-4 py-3 text-muted-foreground text-xs">{grant.executionDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GrantLedger;
