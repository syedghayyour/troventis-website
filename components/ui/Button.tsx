import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-small font-medium transition-colors duration-(--motion-fast) ease-(--ease-standard) disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-on-navy hover:bg-navy-hover",
  secondary:
    "border border-line-strong bg-transparent text-ink hover:border-signal hover:text-signal",
  ghost: "bg-transparent text-ink-muted hover:text-ink",
};

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  disabled,
  onClick,
  className = "",
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
