// import Image from "next/image";
import Link from "next/link";
import { placesData } from "./data";

export default function Home() {
  return (
    <div className="px-5 lg:px-20 mb-6 lg:mb-20 font-JetbrainsMono text-base max-w-screen-2xl xl:mx-auto">
      <h1 className="sticky w-100 pt-10 lg:pt-24 top-0 text-5xl lg:text-6xl font-JimNightshade mb-10" style={{backgroundColor: "#D5B59C"}}>Postcards from Earth</h1>

      <p className="mb-10 leading-12">I’m seeing places. And here, you can see them too. <br/>You can see places on this ball we call home, places I’ve been.</p>

      { placesData.map((placeData) => {
        return <><Link key={placeData.slug} className="underline italic mb-5 block" href={`/places/${placeData.slug}`}>{placeData.title}, {placeData.city} - {placeData.country}</Link></>
      }) }
    </div>
  );
}
