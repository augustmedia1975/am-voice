import Image from 'next/image';

interface AMLogoProps {
  className?: string;
}

export default function AMLogo({ className = 'h-10 w-auto' }: AMLogoProps) {
  return (
    <Image
      src="/images/am-logo.jpg"
      alt="AM Studio Logo"
      width={80}
      height={80}
      className={className}
      style={{ objectFit: 'contain' }}
      priority
    />
  );
}
