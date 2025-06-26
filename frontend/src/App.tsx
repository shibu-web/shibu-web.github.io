import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { routes } from "./routes";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <nav className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex gap-4">
              <Link to="/">
                <Button variant="ghost">ホーム</Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost">プロフィール</Button>
              </Link>
            </div>
          </div>
        </nav>
        <main>
          <Routes>
            {routes.map(({ path, Component }, i) =>
              Component ? (
                <Route key={i} path={path} element={<Component />} />
              ) : null
            )}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
