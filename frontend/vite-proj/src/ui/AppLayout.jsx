import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="bg-blue-100 p-8">
        <Outlet />
      </main>
    </>
  );
}
