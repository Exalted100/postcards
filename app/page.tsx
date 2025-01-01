// import Image from "next/image";
import Link from "next/link";
import { placesData } from "./data";

export default function Home() {
  return (
    <div className="mx-20 my-20 font-JetbrainsMono">
      <h1 className="fixed top-20 text-8xl font-JimNightshade z-20">Postcards from Earth</h1>
      <div className="z-10 h-40 w-100 sticky top-0" style={{backgroundColor: "#D5B59C"}}></div>

      <p className="mb-10 text-xl leading-12">I’m seeing places. And here, you can see them too. <br/>You can see places on this ball we call home, places I’ve been.</p>

      { placesData.map((placeData) => {
        return <><Link key={placeData.slug} className="underline italic text-xl mb-5 block" href={`/places/${placeData.slug}`}>{placeData.title}, {placeData.city} - {placeData.country}</Link></>
      }) }


      {/* <p className="fixed z-10 top-20 left-0">
      <Image
                src="/top-marker.svg"
                alt="Top Marker icon"
                width={700}
                height={700}
              />
      </p>

      <p className="fixed z-10 bottom-0 right-10">
          <Image
                src="/right-marker.svg"
                alt="Right Marker icon"
                width={50}
                height={50}
              /></p> */}
    </div>
  );
}
