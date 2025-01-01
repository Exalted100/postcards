import Link from "next/link";

export default async function NotFound() {
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
