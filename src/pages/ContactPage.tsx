import { useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
export default function ContactPage() {
  const { content } = useContent();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };
  return (
    <div className="min-h-screen bg-[#000000]">
      <Header />
      <section className="py-24 px-4" style={{
        background: 'radial-gradient(circle, rgb(228, 235, 252) 0%, rgb(88, 155, 227) 32.48%, rgb(0, 47, 94) 62.78%, rgb(0, 0, 0) 100%)'
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-6xl font-bold mb-8" style={{ fontFamily: 'cinzel, serif' }}>
            联系我们
          </h1>
          <p className="text-white text-xl leading-relaxed">
            我们期待与您交流，为您提供专业的投资咨询服务
          </p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-white text-3xl font-bold mb-8">联系方式</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <Mail className="text-[#D1000A] mt-1" size={24} />
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-1">电子邮件</h3>
                    <a href={`mailto:${content.contact.email}`} className="text-gray-300 hover:text-[#D1000A] transition-colors cursor-pointer">
                      {content.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-[#D1000A] mt-1" size={24} />
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-1">电话</h3>
                    <a href={`tel:${content.contact.phone}`} className="text-gray-300 hover:text-[#D1000A] transition-colors cursor-pointer">
                      {content.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#D1000A] mt-1" size={24} />
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-1">地址</h3>
                    <p className="text-gray-300">{content.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-[#D1000A] mt-1" size={24} />
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-1">营业时间</h3>
                    <p className="text-gray-300">{content.contact.hours}</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1a1a1a] p-8 rounded-lg">
                <h3 className="text-white text-xl font-bold mb-4">关注我们</h3>
                <div className="flex gap-4">
                  {content.footer.socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      <img src={social.icon} alt={social.name} className="w-10 h-10" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-white text-3xl font-bold mb-8">发送消息</h2>
              {submitted ? (
                <div className="bg-green-500/10 border border-green-500 rounded-lg p-8 text-center">
                  <h3 className="text-green-500 text-xl font-bold mb-2">提交成功！</h3>
                  <p className="text-gray-300">我们已收到您的消息，将尽快与您联系。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">姓名 *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="请输入您的姓名"
                      className="bg-[#1a1a1a] border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">邮箱 *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="bg-[#1a1a1a] border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">电话</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+86 138 0000 0000"
                      className="bg-[#1a1a1a] border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">主题 *</label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="咨询主题"
                      className="bg-[#1a1a1a] border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">消息 *</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="请详细描述您的需求..."
                      rows={6}
                      className="bg-[#1a1a1a] border-gray-700 text-white"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#D1000A] hover:bg-[#ff4d4d] cursor-pointer">
                    发送消息
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}