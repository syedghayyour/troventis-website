type Props = { children: React.ReactNode; className?: string };

export function Container({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
