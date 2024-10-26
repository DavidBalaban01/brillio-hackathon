import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex h-[80px] w-full items-center justify-between bg-neutral-100 px-8">
      <Link to="/">
        <img
          src="../public/data/pngtree-medical-health-logo-png-image_4135905.jpg"
          alt="Logo"
          className="h-[50px] w-[100px] object-contain"
        />
      </Link>
      <nav className="flex items-center space-x-4">
        {!(window.location.pathname === "/") && (
          <>
            <Link to="/new" className="btn btn-primary">
              New Patient
            </Link>
            <Link to="/existing" className="btn btn-primary">
              Existing Patient
            </Link>
            <Link to="/doctor" className="btn btn-primary">
              Doctor
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
