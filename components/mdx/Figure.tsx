import Image from "next/image";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  width?: number;
  height?: number;
}

export default function Figure({
  src,
  alt,
  caption,
  credit,
  width = 1200,
  height = 675,
}: FigureProps) {
  return (
    <figure className="my-10 not-prose">
      <div
        className="relative overflow-hidden bg-surface"
        style={{ aspectRatio: `${width}/${height}` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 700px"
        />
      </div>
      {(caption || credit) && (
        <figcaption className="mt-2 font-sans text-label-sm text-subtle italic">
          {caption}
          {caption && credit && " — "}
          {credit && <span className="not-italic">{credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}
