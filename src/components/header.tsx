type HeaderProps = {
  title: string;
  subtitle?: string;
  rightSlot?: React.ReactNode;
};

export default function Header({ title, subtitle, rightSlot }: HeaderProps) {
  return (
    <header className="px-4 pt-6 pb-4 flex items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        )}
      </div>
      {rightSlot}
    </header>
  );
}
