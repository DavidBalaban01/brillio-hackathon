import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Doctor from "./pages/Doctor";
import Existing from "./pages/Existing";
import New from "./pages/New";
import AppLayout from "./ui/AppLayout";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* we have placed all Routes inside the layout and use the <Outlet/> to display them */}
        <Route path="/" element={<Homepage />} />
        <Route element={<AppLayout />}>
          {/* since we have a duplicate, we use Navigate to */}
          {/* <Route index element={<Navigate replace to="New" />} /> */}
          <Route path="new" element={<New />} />
          <Route path="existing" element={<Existing />} />
          <Route path="doctor" element={<Doctor />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
