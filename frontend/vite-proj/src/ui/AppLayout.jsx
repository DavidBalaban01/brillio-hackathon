import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="p-8">
        <Outlet />
      </main>
    </>
  );
}
