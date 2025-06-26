import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Component }, i) =>
          Component ? (
            <Route key={i} path={path} element={<Component />} />
          ) : null
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
