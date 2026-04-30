"use client"

import * as React from 'react';

import Image from '@/components/SafeImage';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const heroSlides = [
  PlaceHolderImages.find((image) => image.id === 'school-aerial'),
  PlaceHolderImages.find((image) => image.id === 'campus-8'),
  PlaceHolderImages.find((image) => image.id === 'event-2'),
  PlaceHolderImages.find((image) => image.id === 'event-4'),
  PlaceHolderImages.find((image) => image.id === 'event-3'),
].filter((image): image is NonNullable<typeof image> => Boolean(image));

export function HomeHeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const syncState = () => {
      setCurrent(api.selectedScrollSnap());
      setCount(api.scrollSnapList().length);
    };

    syncState();
    api.on('select', syncState);
    api.on('reInit', syncState);

    return () => {
      api.off('select', syncState);
      api.off('reInit', syncState);
    };
  }, [api]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const interval = window.setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => window.clearInterval(interval);
  }, [api]);

  if (!heroSlides.length) {
    return null;
  }

  return (
    <div className="absolute inset-0">
      <Carousel className="h-full w-full" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent className="h-full ml-0">
          {heroSlides.map((image, index) => (
            <CarouselItem key={image.id} className="h-full pl-0">
              <div className="relative h-full w-full">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={index === 0}
                  data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/20 to-black/50" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/30 px-3 py-2 backdrop-blur-sm">
        {heroSlides.map((image, index) => (
          <button
            key={image.id}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              'h-2.5 rounded-full transition-all duration-300',
              current === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/75'
            )}
          />
        ))}
        <span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
          {count > 0 ? `${current + 1}/${count}` : 'Hero'}
        </span>
      </div>
    </div>
  );
}