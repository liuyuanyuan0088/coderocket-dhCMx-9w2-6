interface SectionHeaderProps {
  title: string;
  description: string;
}
export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: 'cinzel, serif' }}>
        {title}
      </h2>
      <p className="text-white text-lg" style={{ fontFamily: 'helvetica, sans-serif' }}>
        {description}
      </p>
    </div>
  );
}