import { useContent } from '../contexts/ContentContext';
export default function Footer() {
  const { content } = useContent();
  return (
    <footer className="bg-[#000000] border-t border-[#323232] py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            {content.footer.socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img src={social.icon} alt={social.name} className="w-8 h-8" />
              </a>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-white text-sm">
            <span>{content.footer.copyright}</span>
            <span className="hidden md:inline">|</span>
            <a href="/disclaimer" className="hover:text-[#D1000A] transition-colors cursor-pointer">
              {content.footer.disclaimer}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}