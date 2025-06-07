import {
  IconCircleCheckFilled,
  IconMapPinFilled,
  IconStarFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import type { Property } from "@/types/properties";

type PropertyCardProps = {
  property: Property;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <>
      <div className="relative h-[250px]  p-10 xl:py-32 mb-4 rounded-3xl shadow-md">
        <Link className=" mx-auto max-w-max" href="#">
          <div className="absolute z-10 top-2 right-2  bg-white opacity-90 rounded-xl px-2 py-1 flex items-center justify-center gap-2">
            <IconMapPinFilled size={16} />
            <p className="text-xs text-muted-foreground">
              {property.city}, {property.state} - {property.country}
            </p>
          </div>
          <Image
            src={property.imageUrl}
            alt="Imagem de interior de apartamento para temporada"
            fill
            className="object-cover rounded-3xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          {property.isAvailable && (
            <div className=" flex gap-2 items-center z-10 absolute bottom-2 right-3 px-2 py-1 opacity-95 rounded-xl  bg-white">
              <IconCircleCheckFilled color="#22c55e" size={20} />
              <span className="text-sm">Disponível</span>
            </div>
          )}
        </Link>
      </div>

      <Link href="#">
        <h3 className="mb-2 text-xl font-heading font-medium hover:underline">
          {property.title}
        </h3>
      </Link>

      <div className="flex gap-1">
        <div className="flex items-center  text-xl font-medium tracking-tighter">
          <p className="text-base pr-2">R$</p>
          <p>{property.pricePerNight}</p>
          <p className="text-base pl-2"> por noite</p>
        </div>
        <div className="ml-5 mt-1 flex gap-1  items-center justify-center text-sm text-muted-foreground">
          <IconStarFilled color="#eab308" size={16} />{" "}
          <span>
            {property.rating} ({property.numberOfReviews} avaliaçoes)
          </span>
        </div>
      </div>
    </>
  );
}
