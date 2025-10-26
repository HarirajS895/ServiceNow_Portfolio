export default function Footer(){
  return (
    <footer className="py-8 mt-8 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
        © {new Date().getFullYear()} Hariraj S — ServiceNow Administrator. All rights reserved.
      </div>
    </footer>
  )
}
