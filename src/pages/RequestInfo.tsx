import { useContent } from '../contexts/ContentContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AlertCircle } from 'lucide-react';
export default function RequestInfo() {
  return (
    <div className="min-h-screen bg-[#000000]">
      <Header />
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1a1a1a] border border-[#D1000A] rounded-lg p-12">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="text-[#D1000A] flex-shrink-0" size={32} />
              <div>
                <h1 className="text-white text-3xl font-bold mb-4">需要提供网站内容</h1>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  为了准确重现 https://www.merit-am.com/ 的完整内容和结构，我需要您提供以下信息：
                </p>
              </div>
            </div>
            <div className="space-y-6 text-gray-300">
              <div className="bg-[#0a0a0a] p-6 rounded-lg">
                <h2 className="text-white text-xl font-bold mb-3">📸 1. 网站截图</h2>
                <p>请提供以下页面的完整截图（包括滚动后的全部内容）：</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>首页</li>
                  <li>关于我们页面</li>
                  <li>投资/产品页面</li>
                  <li>团队页面</li>
                  <li>新闻/资讯页面</li>
                  <li>联系我们页面</li>
                </ul>
              </div>
              <div className="bg-[#0a0a0a] p-6 rounded-lg">
                <h2 className="text-white text-xl font-bold mb-3">📝 2. 具体内容</h2>
                <p>如果可能，请提供：</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>公司简介和使命愿景</li>
                  <li>所有投资产品的名称和描述</li>
                  <li>团队成员的信息（姓名、职位、简介）</li>
                  <li>联系方式（地址、电话、邮箱）</li>
                  <li>任何特色板块或功能说明</li>
                </ul>
              </div>
              <div className="bg-[#0a0a0a] p-6 rounded-lg">
                <h2 className="text-white text-xl font-bold mb-3">🎨 3. 设计元素</h2>
                <p>请注意以下设计细节：</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>网站的主色调和配色方案</li>
                  <li>Logo 的高清图片</li>
                  <li>特殊的布局或交互效果</li>
                  <li>使用的图标和图片风格</li>
                </ul>
              </div>
              <div className="mt-8 p-6 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <h3 className="text-blue-300 font-bold mb-2">💡 提示</h3>
                <p className="text-gray-300">
                  您可以将截图和内容直接发送给我，我会根据这些信息完整重建整个网站。
                  或者，如果您能访问网站的源代码或导出的内容，那会更加准确。
                </p>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl text-white mb-4">
                  准备好提供这些信息了吗？
                </p>
                <p className="text-gray-400">
                  请上传截图或描述网站内容，我将立即为您重建完整的网站。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}