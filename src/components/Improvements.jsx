export default function Improvements(){
  const items = [
    {title:'Automated Daily Dashboard', desc:'Replaced PPT reports with real-time dashboards'},
    {title:'Change Management Validation', desc:'Validation to prevent scheduling before planned start without reason'},
    {title:'Web Service Account Inventory', desc:'Moved from Excel to CMDB table for auditability'},
    {title:'Delegate End Date Automation', desc:'Auto-update delegate end dates based on termination'},
    {title:'Data Source Automation', desc:'Created data sources to avoid manual updates'}
  ];
  return (
    <section className="py-20 bg-white/3">
      <div className="max-w-6xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-purpleish-200 mb-6">Process Improvements</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map(i => (
            <div key={i.title} className="p-4 bg-white/5 rounded">
              <h4 className="font-semibold">{i.title}</h4>
              <p className="text-gray-300 mt-2 text-sm">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
