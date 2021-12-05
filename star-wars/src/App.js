import { Navigation } from "./components/Navigation";
import { Suspense, lazy } from "react";
import { Skeleton } from "./components/Skeleton";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./pages/Home.jsx"));
const DetailsInfo = lazy(() => import("./pages/DetailsInfo.jsx"));
const SearchPeople = lazy(() => import("./pages/SearchPeople.jsx"));
function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navigation />
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/:name/:id" exact element={<DetailsInfo />} />

          <Route path="/search" element={<SearchPeople />} exact />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
