import { useContent } from '../contexts/ContentContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function InvestmentPage() {
  const { content } = useContent();
  return (
    <div className="min-h-screen bg-[#000000]">
      <Header />
      <section className="py-24 px-4" style={{
        background: 'radial-gradient(circle, rgb(228, 235, 252) 0%, rgb(88, 155, 227) 32.48%, rgb(0, 47, 94) 62.78%, rgb(0, 0, 0) 100%)'
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-6xl font-bold mb-8" style={{ fontFamily: 'cinzel, serif' }}>
            投资策略
          </h1>
          <p className="text-white text-xl leading-relaxed">
            基于专业分析和深入研究，为您提供多元化的投资解决方案
          </p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#1a1a1a] p-8 rounded-lg">
              <h2 className="text-white text-3xl font-bold mb-4">我们的投资理念</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                我们相信，成功的投资需要三个关键要素：专业的研究分析、严格的风险控制、以及长期的价值投资理念。
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                通过科学的资产配置和动态调整，我们帮助投资者在不同市场环境下实现稳健增长。
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-lg">
              <h2 className="text-white text-3xl font-bold mb-4">投资优势</h2>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-[#D1000A] mt-1 flex-shrink-0" size={20} />
                  <span>20年以上的行业经验</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-[#D1000A] mt-1 flex-shrink-0" size={20} />
                  <span>全球化投资视野和资源</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-[#D1000A] mt-1 flex-shrink-0" size={20} />
                  <span>严格的风险管理体系</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="text-[#D1000A] mt-1 flex-shrink-0" size={20} />
                  <span>透明的信息披露</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-white text-4xl font-bold text-center mb-12">投资产品分类</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.sections.slice(1).map((section) => (
                <div key={section.id} className="bg-[#1a1a1a] p-8 rounded-lg hover:bg-[#252525] transition-colors cursor-pointer">
                  <h3 className="text-white text-2xl font-bold mb-4">{section.title.split('：')[0]}</h3>
                  <p className="text-gray-300 mb-6">{section.description}</p>
                  <div className="text-[#D1000A] font-semibold">
                    {section.products.length} 个产品
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#D1000A] to-[#ff4d4d] p-12 rounded-lg text-center">
            <h2 className="text-white text-3xl font-bold mb-4">准备好开始投资了吗？</h2>
            <p className="text-white text-lg mb-8">
              联系我们的专业团队，获取个性化的投资建议
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#D1000A] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              立即联系
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}