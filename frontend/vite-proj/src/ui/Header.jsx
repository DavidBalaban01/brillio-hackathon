import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="header flex h-[80px] w-full items-center justify-between bg-neutral-100 px-8"
      // styles={{
      //   background: "rgb(36,240,155)",
      //   background:
      //     "linear-gradient(90deg, rgba(36,240,155,1) 0%, rgba(21,198,163,1) 43%, rgba(14,180,216,1) 100%)",
      // }}
    >
      <Link to="/">
        <img
          src="../public/data/logo.png"
          alt="Logo"
          className="h-[70px] w-[100px] object-contain"
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
