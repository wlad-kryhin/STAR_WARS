import { Navigation } from "./components/Navigation";
import { Suspense, lazy } from "react";
import { Skeleton } from "./components/Skeleton";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home.jsx"));
const DetailsInfo = lazy(() => import("./pages/DetailsInfo.jsx"));
const SearchPeople = lazy(() => import("./pages/SearchPeople.jsx"));
function App() {
  return (
    <div>
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
