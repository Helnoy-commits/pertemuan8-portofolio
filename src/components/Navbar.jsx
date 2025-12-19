import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-blue-700 text-white py-4">
      <div className="max-w-6xl mx-auto flex justify-between px-6">
        <h1 className="font-bold text-xl">My Portfolio</h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
