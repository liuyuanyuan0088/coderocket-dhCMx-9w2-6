import { useContent } from '../contexts/ContentContext';
export default function Hero() {
  const { content } = useContent();
  return (
    <section 
      className="relative py-24 px-4"
      style={{
        background: 'radial-gradient(circle, rgb(228, 235, 252) 0%, rgb(88, 155, 227) 32.48%, rgb(0, 47, 94) 62.78%, rgb(0, 0, 0) 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-white text-6xl font-bold mb-8" style={{ fontFamily: 'cinzel, serif' }}>
          {content.hero.title}
        </h1>
        <p className="text-white text-xl leading-relaxed" style={{ fontFamily: 'helvetica, sans-serif' }}>
          {content.hero.subtitle}
        </p>
      </div>
    </section>
  );
}