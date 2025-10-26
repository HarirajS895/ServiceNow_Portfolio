export default function Skills(){
  const skills = ['Asset Management','Change Management','Incident Management','CMDB','Glide Scripting','Flow Designer','Integration-REST/SOAP','Catalog items','SnowMirror','Oracle SQL','GitLab','Update Sets','Cloning'];
  return (
    <section id="skills" className="py-20 bg-white/3">
      <div className="max-w-6xl mx-auto px-6" data-aos="fade-right">
        <h2 className="text-3xl font-semibold text-purpleish-200 mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((s)=> <span key={s} className="px-3 py-2 bg-white/5 rounded text-gray-200 text-sm">{s}</span>)}
        </div>
      </div>
    </section>
  )
}
