import type { SVGProps } from "react";
type Props = SVGProps<SVGSVGElement> & {
  name:
    | "bag"
    | "arrow"
    | "chevron"
    | "plus"
    | "minus"
    | "close"
    | "leaf"
    | "pause"
    | "play"
    | "check";
};
export function Icon({ name, ...props }: Props) {
  const paths: Record<Props["name"], React.ReactNode> = {
    bag: (
      <>
        <path d="M5 7h14l1 14H4L5 7Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </>
    ),
    arrow: (
      <>
        <path d="M4 12h16M14 6l6 6-6 6" />
      </>
    ),
    chevron: <path d="m9 5 7 7-7 7" />,
    plus: <path d="M12 5v14M5 12h14" />,
    minus: <path d="M5 12h14" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    leaf: (
      <>
        <path d="M20 4C8 2 2 8 6 16c8 4 14-2 14-12Z" />
        <path d="M4 20 15 9" />
      </>
    ),
    pause: <path d="M9 5v14M15 5v14" />,
    play: <path d="m8 5 11 7-11 7V5Z" />,
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="9" stroke="currentColor" strokeWidth="1.5" />
      {Array.from({ length: 12 }, (_, i) => (
        <path
          key={i}
          d="M24 3v7"
          stroke="currentColor"
          strokeWidth="1.5"
          transform={`rotate(${i * 30} 24 24)`}
        />
      ))}
      <path d="m19 25 4 3 7-9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
