import Link from "next/link";

export default function Header() {
  return (
    <header className=" px-6 lg:px-12 bg-white z-20 w-lvw text-gray-700 font-heading font-medium fixed bg-opacity-50">
      <nav className="py-8">
        <Link
          href="/"
          className="font-heading font-semibold text-xl text-gray-800  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded transition"
        >
          <span className="text-gray-800">Seazone</span>
          <span className="ml-2 text-primary">Teste</span>
        </Link>
      </nav>
    </header>
  );
}
