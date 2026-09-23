import { IconCacto, IconCoracao, IconFogo } from "@/components/brand-icons";
import { cn } from "@/lib/utils";

const tickerIcons = [IconCoracao, IconFogo, IconCacto];

export function StreetTicker({
  items,
  className,
  label = "Destaques da Nacho Man",
  tilted = false,
}: {
  items?: string[];
  className?: string;
  label?: string;
  tilted?: boolean;
}) {
  if (!items) {
    return (
      <div
        className={cn("overflow-hidden bg-foreground py-5 text-background sm:py-6", className)}
        aria-label={label}
      >
        <div
          className="flex w-max animate-[ticker_24s_linear_infinite] font-heading text-3xl font-extrabold uppercase will-change-transform hover:[animation-play-state:paused] md:text-4xl"
          aria-hidden="true"
        >
          {[0, 1].map((group) => (
            <div key={group} className="flex min-w-[100vw] shrink-0 items-center justify-around">
              {[0, 1, 2].map((item) => (
                <span
                  key={item}
                  className="flex shrink-0 items-center gap-2 whitespace-nowrap px-8"
                >
                  <IconCoracao className="mr-2 size-7" />
                  <span className="text-primary">Paixão</span>
                  <span>pela comida</span>
                  <span className="text-accent">mexicana</span>
                  <IconCoracao className="ml-2 size-7" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const ticker = (
    <div
      className={cn(
        "overflow-hidden border-y border-background/15 bg-foreground py-5 text-background sm:py-6",
        className,
      )}
      aria-label={label}
    >
      <div className="flex w-max animate-[ticker_24s_linear_infinite] items-center font-heading text-3xl font-extrabold uppercase will-change-transform hover:[animation-play-state:paused] md:text-4xl">
        {[0, 1].map((group) => (
          <div key={group} className="flex min-w-[100vw] shrink-0 items-center justify-around">
            {items.map((item, index) => {
              const ItemIcon = tickerIcons[index % tickerIcons.length];

              return (
                <span
                  key={`${group}-${item}-${index}`}
                  className="flex shrink-0 items-center gap-2 whitespace-nowrap px-8"
                >
                  <ItemIcon className="mr-2 size-7 shrink-0" />
                  <span>{item}</span>
                  <ItemIcon className="ml-2 size-7 shrink-0" />
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );

  if (!tilted) {
    return ticker;
  }

  return (
    <div className="relative overflow-hidden bg-foreground pb-10 sm:pb-12">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-12 bg-background sm:h-14" />
      <div className="relative left-1/2 z-10 w-[106vw] -translate-x-1/2 -rotate-[2deg]">
        <div aria-hidden="true" className="h-14 bg-background sm:h-16" />
        {ticker}
      </div>
    </div>
  );
}
