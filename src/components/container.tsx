export const containerClass = "mx-auto w-full max-w-[1120px] px-5 sm:px-8";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`${containerClass} ${className}`}>{children}</div>;
}
