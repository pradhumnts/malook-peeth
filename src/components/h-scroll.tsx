import { cn } from "@/lib/utils";

export function HScroll({
  children,
  className,
  contentClassName,
}: {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <div
      className={cn(
        "hide-scrollbar overflow-x-auto overscroll-x-contain pb-1",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max snap-x snap-mandatory gap-3 pl-4 pr-4",
          contentClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
