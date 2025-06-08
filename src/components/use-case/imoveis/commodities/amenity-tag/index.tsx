type AmenityTagProps = {
  children: React.ReactNode;
  className?: string;
};

export function AmenityTag({ children, className = "" }: AmenityTagProps) {
  return (
    <li className={`bg-white px-3 py-1 rounded-xl text-sm ${className}`}>
      {children}
    </li>
  );
}
