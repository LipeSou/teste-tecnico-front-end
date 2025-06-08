"use client";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type PropertyCarouselProps = {
  images: string[];
  alt: string;
};

export function PropertyCarousel({ images, alt }: PropertyCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <div className="embla relative rounded-3xl overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {images.map((img, idx) => (
          <div
            className="embla__slide min-w-0 flex-[0_0_100%] relative h-72"
            key={idx}
          >
            <Image
              src={img}
              alt={alt}
              fill
              className="object-cover"
              priority={idx === 0}
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        onClick={scrollPrev}
        aria-label="Imagem anterior"
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition disabled:opacity-50"
        disabled={images.length <= 1}
        tabIndex={0}
      >
        <IconChevronLeft size={20} aria-hidden />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Próxima imagem"
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition disabled:opacity-50"
        disabled={images.length <= 1}
        tabIndex={0}
      >
        <IconChevronRight size={20} aria-hidden />
      </button>

      <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Ir para imagem ${idx + 1}`}
            className={`w-3 h-3 rounded-full ${
              idx === selectedIndex ? "bg-zinc-800" : "bg-zinc-300"
            } border border-zinc-400 transition`}
            onClick={() => emblaApi && emblaApi.scrollTo(idx)}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
}
