"use client";

import * as React from 'react';

import Image from '@/components/SafeImage';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

type ToppersPopupProps = {
  enabled?: boolean;
};

const topperImage = PlaceHolderImages.find((image) => image.id === 'toppers-popup');

export function ToppersPopup({ enabled = true }: ToppersPopupProps) {
  const [isMounted, setIsMounted] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (!enabled || !isMounted) {
      return;
    }

    setIsVisible(true);
  }, [enabled, isMounted]);

  if (!enabled || !isMounted || !isVisible || !topperImage) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
      <div className={cn("relative w-full max-w-[min(92vw,26rem)] overflow-hidden rounded-[1.5rem] border border-border/80 bg-background shadow-2xl dark:border-border/70") }>
        <button
          type="button"
          aria-label="Close popup"
          onClick={() => setIsVisible(false)}
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-red-200 bg-white/95 text-red-600 shadow-sm transition hover:bg-red-50 hover:text-red-700 dark:border-red-950/60 dark:bg-black/70 dark:text-red-400 dark:hover:bg-red-950/50"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            ×
          </span>
        </button>

        <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted sm:aspect-[4/5]">
          <Image
            src={topperImage.imageUrl}
            alt="Congratulations to the new toppers of the school"
            fill
            sizes="(max-width: 640px) 92vw, 384px"
            className="object-cover"
            priority
            data-ai-hint={topperImage.imageHint}
          />
        </div>
      </div>
    </div>
  );
}