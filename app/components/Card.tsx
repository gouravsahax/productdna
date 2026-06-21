import Image from "next/image";

interface ProductCardProps {
    product: {
        title: string;
        amazonLink: string;
        imageURL: string;
    };
}

export default function Card({ product }: ProductCardProps) {
    return (
        <div className="group flex flex-col w-[280px] rounded-sm border border-white/10 bg-neutral-950 overflow-hidden transition-colors hover:border-[#AAFF00]/50">
            <div className="relative w-full aspect-square bg-white">
                <Image
                    src={product.imageURL}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 280px"
                    priority
                    className="object-contain p-4"
                />
            </div>

            <div className="flex flex-col gap-2 p-4 border-t border-white/10">
                <h1 className="text-sm font-medium text-white line-clamp-2 leading-snug">
                    {product.title}
                </h1>
                <a
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-500 truncate hover:text-[#AAFF00] transition-colors"
                >
                    {product.amazonLink}
                </a>
            </div>
        </div>
    );
}