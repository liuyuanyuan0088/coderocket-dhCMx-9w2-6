import { useContent } from '../contexts/ContentContext';
import { Link } from 'react-router-dom';
export default function Header() {
  const { content } = useContent();
  return (
    <header className="bg-[#000000] border-b border-[#323232] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="cursor-pointer">
            <img 
              src={content.logo} 
              alt="Merit Asset Management" 
              className="h-16 w-auto"
            />
          </Link>
          <nav className="flex gap-8">
            {content.navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className="text-white hover:text-[#D1000A] transition-colors text-sm cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-4">
            <button className="text-white hover:text-[#D1000A] transition-colors text-sm cursor-pointer">
              English
            </button>
            <span className="text-white">|</span>
            <button className="text-[#D1000A] text-sm cursor-pointer">
              中文
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}