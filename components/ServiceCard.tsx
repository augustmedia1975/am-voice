interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="group bg-deep border-t-4 border-yellow rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(245,200,0,0.15)]">
      <div className="text-yellow mb-6">{icon}</div>
      <h3 className="font-display text-2xl text-cream mb-3">{title}</h3>
      <p className="font-body text-sm text-warm-gray leading-relaxed">{description}</p>
    </div>
  );
}
