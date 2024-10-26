import { Link } from "react-router-dom";
import Header from "../ui/Header";

export default function Homepage() {
  return (
    <>
      <Header />
      <main className="p-8">
        <div className="bg-neutral-light container mx-auto max-w-md rounded-lg p-8 text-center shadow-lg">
          <h2 className="text-primary-dark mb-6 text-2xl">
            Welcome to HealthPlus
          </h2>
          <h3 className="text-primary-dark mb-6 text-xl">
            Please choose an option
          </h3>

          <div className="flex flex-col items-center gap-7">
            <Link to="/new" className="btn btn-primary w-2/3">
              New Patient
            </Link>
            <Link to="/existing" className="btn btn-secondary w-2/3">
              Existing Patient
            </Link>
            <Link to="/doctor" className="btn btn-primary w-2/3">
              Doctor
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
