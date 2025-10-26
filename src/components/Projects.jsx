export default function Projects(){
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-purpleish-200 mb-6">Featured Project — NextVision</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/5 rounded">
            <h3 className="font-semibold">NextVision</h3>
            <p className="text-gray-300 mt-2">Custom application built on ServiceNow for AI device lifecycle — implemented workflows, Glide scripts, GitLab integration, and automated approvals.</p>
            <ul className="mt-3 text-gray-200 list-disc pl-5">
              <li>Custom tables & workflows</li>
              <li>GlideAggregate reporting</li>
              <li>GitLab CI-style versioning</li>
            </ul>
          </div>
          <div className="p-6 bg-white/5 rounded flex items-center justify-center">
            <div className="w-64 h-40 bg-gradient-to-tr from-purpleish-500 to-purpleish-300 rounded-lg flex items-center justify-center text-white">Project Preview</div>
          </div>
        </div>
      </div>
    </section>
  )
}
