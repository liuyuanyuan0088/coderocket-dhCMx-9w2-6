import { Link } from 'react-router-dom';
interface Product {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}
interface ProductCardProps {
  product: Product;
}
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={product.link} className="group relative overflow-hidden rounded-lg cursor-pointer block">
      <img 
        src={product.image} 
        alt={product.title}
        className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end p-8">
        <h3 className="text-white text-2xl font-bold mb-2 text-center">{product.title}</h3>
        <p className="text-white text-lg mb-6 text-center">{product.subtitle}</p>
        <span className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors">
          了解更多
        </span>
      </div>
    </Link>
  );
}