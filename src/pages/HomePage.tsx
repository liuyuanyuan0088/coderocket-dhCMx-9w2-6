import { useContent } from '../contexts/ContentContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
export default function HomePage() {
  const { content } = useContent();
  return (
    <div className="min-h-screen bg-[#000000]">
      <Header />
      <Hero />
      {content.sections.map((section) => (
        <section key={section.id} className="py-16 px-4">
          <SectionHeader title={section.title} description={section.description} />
          {section.id === 'pyramid' ? (
            <div className="max-w-7xl mx-auto mt-12">
              {section.products.map((product) => (
                <div key={product.id} className="relative">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-[445px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 rounded-lg">
                    <h3 className="text-white text-4xl font-bold mb-4">{product.title}</h3>
                    <p className="text-white text-lg mb-6">{product.subtitle}</p>
                    <a 
                      href={product.link}
                      className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                    >
                      了解更多
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      ))}
      <Footer />
    </div>
  );
}