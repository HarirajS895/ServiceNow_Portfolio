export default function Certifications(){
  const certs = ['CSA','CAD','CIS-ITSM','CIS-SAM'];
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6" data-aos="zoom-in">
        <h2 className="text-3xl font-semibold text-purpleish-200 mb-4">Certifications</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-200">
          {certs.map(c => <div key={c} className="p-4 bg-white/5 rounded">{c}</div>)}
        </div>
      </div>
    </section>
  )
}
