import { useParams, Link } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
export default function ProductDetailPage() {
  const { id } = useParams();
  const { content } = useContent();
  const product = content.sections
    .flatMap(section => section.products)
    .find(p => p.id === id);
  if (!product) {
    return (
      <div className="min-h-screen bg-[#000000]">
        <Header />
        <div className="py-24 px-4 text-center">
          <h1 className="text-white text-4xl font-bold mb-4">产品未找到</h1>
          <Link to="/" className="text-[#D1000A] hover:underline cursor-pointer">
            返回首页
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#000000]">
      <Header />
      <section className="py-12 px-4 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-6 cursor-pointer">
            <ArrowLeft className="mr-2" size={20} />
            返回首页
          </Link>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="mb-6">
                <span className="inline-block bg-[#D1000A] text-white px-4 py-1 rounded-full text-sm mb-4">
                  {product.subtitle}
                </span>
                <h1 className="text-white text-5xl font-bold mb-4">{product.title}</h1>
                <p className="text-gray-300 text-xl leading-relaxed">
                  {product.description}
                </p>
              </div>
              {product.performance && (
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-[#1a1a1a] p-6 rounded-lg">
                    <p className="text-gray-400 text-sm mb-2">预期收益</p>
                    <p className="text-white text-2xl font-bold">{product.performance.returns}</p>
                  </div>
                  <div className="bg-[#1a1a1a] p-6 rounded-lg">
                    <p className="text-gray-400 text-sm mb-2">风险等级</p>
                    <p className="text-white text-2xl font-bold">{product.performance.risk}</p>
                  </div>
                  <div className="bg-[#1a1a1a] p-6 rounded-lg">
                    <p className="text-gray-400 text-sm mb-2">起投金额</p>
                    <p className="text-white text-2xl font-bold">{product.performance.minimumInvestment}</p>
                  </div>
                </div>
              )}
              {product.features && (
                <div className="mb-8">
                  <h2 className="text-white text-2xl font-bold mb-4">产品特点</h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <Check className="text-[#D1000A] mt-1 flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex gap-4">
                <Link to="/contact" className="flex-1">
                  <Button className="w-full bg-[#D1000A] hover:bg-[#ff4d4d] cursor-pointer">
                    立即咨询
                  </Button>
                </Link>
                <Button variant="outline" className="flex-1 cursor-pointer">
                  下载资料
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-[#1a1a1a] p-12 rounded-lg">
            <h2 className="text-white text-3xl font-bold mb-6">投资须知</h2>
            <div className="text-gray-300 space-y-4">
              <p>投资有风险，入市需谨慎。过往业绩不代表未来表现。</p>
              <p>本产品为非保本浮动收益型产品，投资者应充分了解产品风险特征，根据自身风险承受能力选择适合的产品。</p>
              <p>详细的产品说明书、风险揭示书等文件，请联系我们的客户经理获取。</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}