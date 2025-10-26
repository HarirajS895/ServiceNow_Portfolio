export default function Navbar(){
  return (
    <header className="fixed w-full z-40 bg-black/30 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-white font-semibold">Hariraj S</div>
        <nav className="flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-purpleish-300">About</a>
          <a href="#skills" className="hover:text-purpleish-300">Skills</a>
          <a href="#projects" className="hover:text-purpleish-300">Projects</a>
          <a href="#contact" className="hover:text-purpleish-300">Contact</a>
        </nav>
      </div>
    </header>
  )
}
