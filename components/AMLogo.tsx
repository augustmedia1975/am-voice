interface AMLogoProps {
  className?: string;
}

export default function AMLogo({ className = 'h-10 w-auto' }: AMLogoProps) {
  return (
    <svg
      viewBox="0 0 80 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="80" height="60" rx="4" fill="#F5C800" />
      {/* A — open angular chevron */}
      <path
        d="M8 46 L20 18 L32 46"
        stroke="#0D0D0D"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 36 L28 36"
        stroke="#0D0D0D"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* M — rounded thick sans-serif */}
      <path
        d="M36 46 L36 18 L48 36 L60 18 L60 46"
        stroke="#0D0D0D"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
