import { placesData } from "@/app/data";
import Image from "next/image";
import Link from "next/link";

export default async function Place({
  params,
}: {
  params: Promise<{ place: string }>;
}) {
  const slug = (await params).place;
  const currentIndex = placesData.findIndex((place) => place.slug === slug);

  if (currentIndex < 0) {
    return (
      <div className="text-center pt-20 font-JetbrainsMono">
        <p className="text-xl">
          This page doesn&apos;t exist. Consider going{" "}
          <Link className="underline italic text-xl" href="/">
            Home
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="mx-5 lg:mx-20 my-6 lg:my-20 font-JetbrainsMono text-base lg:text-xl max-w-screen-2xl xl:mx-auto">
      <h1 className="fixed top-10 lg:top-20 text-5xl lg:text-8xl font-JimNightshade z-20">
        Postcard from {placesData[currentIndex].title}
      </h1>
      <div
        className="z-10 h-20 lg:h-40 w-100 sticky top-0"
        style={{ backgroundColor: "#D5B59C" }}
      ></div>

      {placesData[currentIndex].content.map((val, index) => {
        return (
          <div
            key={val.image.url}
            className="lg:flex mt-6 lg:mt-16 mb-10 lg:justify-around items-center"
          >
            {index % 2 === 0 ? (
              <>
                <div className="self-start leading-12 inline-block lg:w-2/5">
                  {val.paragraphs.map((paragraph, index) => {
                    return (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
                <div className="inline-block w-1/3 min-w-[300px]">
                  <Image
                    src={val.image.url}
                    alt={val.image.alt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="inline-block w-1/3 min-w-[300px]">
                  <Image
                    src={val.image.url}
                    alt={val.image.alt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="self-start leading-12 inline-block lg:w-2/5">
                  {val.paragraphs.map((paragraph, index) => {
                    return (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        );
      })}

      <div className="grid-cols-3 w-11/12 mt-6 lg:mt-20">
        {currentIndex < 1 ? (
          <div className="w-1/3 inline-block"></div>
        ) : (
          <Link
            className="underline italic w-1/3 inline-block"
            href={`/places/${placesData[currentIndex - 1].slug}`}
          >
            {placesData[currentIndex - 1].title},{" "}
            {placesData[currentIndex - 1].city} -{" "}
            {placesData[currentIndex - 1].country}
          </Link>
        )}
        <Link
          className="underline italic w-1/3 inline-block text-center"
          href="/"
        >
          Home
        </Link>
        {currentIndex > placesData.length - 2 ? (
          <div className="w-1/3"></div>
        ) : (
          <Link
            className="underline italic w-1/3 inline-block text-right"
            href={`/places/${placesData[currentIndex + 1].slug}`}
          >
            {placesData[currentIndex + 1].title},{" "}
            {placesData[currentIndex + 1].city} -{" "}
            {placesData[currentIndex + 1].country}
          </Link>
        )}
      </div>

      {/* <p className="fixed top-20 left-0 z-20">
        <Image
          src="/top-marker.svg"
          alt="Top Marker icon"
          width={700}
          height={700}
        />
      </p>

      <p className="fixed bottom-0 right-10">
        <Image
          src="/right-marker.svg"
          alt="Right Marker icon"
          width={50}
          height={50}
        />
      </p> */}
    </div>
  );
}
