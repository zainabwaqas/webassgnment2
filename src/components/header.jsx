import { Link } from "react-router-dom";
import ThemeToggle from "./theme";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 sticky top-0 z-20 bg-black/40 backdrop-blur">
      <div>
        <h1 className="text-2xl font-bold">Groove Gali</h1>
        <p className="text-sm">Bringing you the sound of Pakistan</p>
      </div>

      <nav className="space-x-4">
        <Link className="hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/instruments">Instruments</Link>
        <Link className="hover:underline" to="/singers">Singers</Link>
        <Link className="hover:underline" to="/history">History</Link>
        <Link className="hover:underline" to="/trending">Trending</Link>
        <Link className="hover:underline" to="/contact">Contact</Link>
        <ThemeToggle />
      </nav>
    </header>
);
}
