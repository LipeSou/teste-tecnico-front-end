import {
  IconCircleCheckFilled,
  IconMapPinFilled,
  IconStarFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

type RootProps = {
  children: React.ReactNode;
  className?: string;
};
function Root({ children, className = "" }: RootProps) {
  return (
    <div
      className={`relative h-[250px] p-10 xl:py-32 mb-4 rounded-3xl shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

type ImageComponentProps = {
  src: string;
  alt: string;
};
function ImageComponent({ src, alt }: ImageComponentProps) {
  return (
    <Link className="block" href="#">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-3xl"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </Link>
  );
}

type LocationProps = {
  city: string;
  state: string;
  country: string;
};
function Location({ city, state, country }: LocationProps) {
  return (
    <div className="absolute z-10 top-2 right-2 bg-white opacity-90 rounded-xl px-2 py-1 flex items-center justify-center gap-2">
      <IconMapPinFilled size={16} />
      <p className="text-xs text-muted-foreground">
        {city}, {state} - {country}
      </p>
    </div>
  );
}

function Availability() {
  return (
    <div className="flex gap-2 items-center z-10 absolute bottom-2 right-3 px-2 py-1 opacity-95 rounded-xl bg-white">
      <IconCircleCheckFilled color="#22c55e" size={20} />
      <span className="text-sm">Disponível</span>
    </div>
  );
}

type TitleProps = {
  title: string;
};
function Title({ title }: TitleProps) {
  return (
    <Link href="#">
      <h3 className="mb-2 text-xl font-heading font-medium hover:underline">
        {title}
      </h3>
    </Link>
  );
}

type PriceAndRatingProps = {
  pricePerNight: number;
  rating: number;
  numberOfReviews: number;
};
function PriceAndRating({
  pricePerNight,
  rating,
  numberOfReviews,
}: PriceAndRatingProps) {
  return (
    <div className="flex gap-1">
      <div className="flex items-center text-xl font-medium tracking-tighter">
        <p className="text-base pr-2">R$</p>
        <p>{pricePerNight}</p>
        <p className="text-base pl-2"> por noite</p>
      </div>
      <div className="ml-5 mt-1 flex gap-1 items-center justify-center text-sm text-muted-foreground">
        <IconStarFilled color="#eab308" size={16} />
        <span>
          {rating} ({numberOfReviews} avaliações)
        </span>
      </div>
    </div>
  );
}

export const PropertyCard = {
  Root,
  Image: ImageComponent,
  Location,
  Availability,
  Title,
  PriceAndRating,
};
