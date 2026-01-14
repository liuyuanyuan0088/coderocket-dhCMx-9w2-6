import { useContent } from '../contexts/ContentContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function TeamPage() {
  const { content } = useContent();
  return (
    <div className="min-h-screen bg-[#000000]">
      <Header />
      <section className="py-24 px-4" style={{
        background: 'radial-gradient(circle, rgb(228, 235, 252) 0%, rgb(88, 155, 227) 32.48%, rgb(0, 47, 94) 62.78%, rgb(0, 0, 0) 100%)'
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-6xl font-bold mb-8" style={{ fontFamily: 'cinzel, serif' }}>
            我们的团队
          </h1>
          <p className="text-white text-xl leading-relaxed">
            由经验丰富的金融专家组成，致力于为客户创造卓越价值
          </p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.team.map((member) => (
              <div key={member.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-[#D1000A] text-lg mb-4">{member.position}</p>
                <p className="text-gray-300 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 bg-[#1a1a1a] p-12 rounded-lg">
            <h2 className="text-white text-3xl font-bold text-center mb-8">加入我们</h2>
            <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-8">
              我们正在寻找充满激情、专业能力强的金融人才加入我们的团队。如果您对资产管理充满热情，欢迎投递简历。
            </p>
            <div className="text-center">
              <a
                href="mailto:hr@merit-asset.com"
                className="inline-block bg-[#D1000A] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#ff4d4d] transition-colors cursor-pointer"
              >
                发送简历
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}