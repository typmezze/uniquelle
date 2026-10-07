import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultProviders } from "./components/providers/default.tsx";
import AppLayout from "./components/layout/AppLayout.tsx";
import AuthCallback from "./pages/auth/Callback.tsx";
import Home from "./pages/Index.tsx";
import Services from "./pages/tjanster/page.tsx";
import Barbers from "./pages/barberare/page.tsx";
import Booking from "./pages/boka/page.tsx";
import About from "./pages/om-oss/page.tsx";
import Contact from "./pages/kontakt/page.tsx";
import NotFound from "./pages/NotFound.tsx";

const SITE_CODE = "2026";
const STORAGE_KEY = "uniquelle-site-code";

function CodeGate({ children }: { children: React.ReactNode }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(STORAGE_KEY) === SITE_CODE;
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (code === SITE_CODE) {
      window.localStorage.setItem(STORAGE_KEY, SITE_CODE);
      setIsUnlocked(true);
      setError("");
      return;
    }

    setError("Fel kod. Försök igen.");
  };

  if (isUnlocked) {
    return children;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-lg">
        <div className="mb-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Uniquelle Salong</p>
          <h1 className="mt-3 text-3xl font-serif font-bold">Sidan är låst</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm font-medium text-muted-foreground" htmlFor="site-code">
            Ange lösenord för att fortsätta
          </label>
          <input
            id="site-code"
            type="password"
            inputMode="numeric"
            autoComplete="one-time-code"
            value={code}
            onChange={(event) => setCode(event.target.value.trim())}
            placeholder="••••"
            className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-base outline-none ring-0 transition focus:border-primary"
          />
          {error ? <p className="text-sm text-destructive">{error}</p> : null}
          <button
            type="submit"
            className="w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Visa webbplats
          </button>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CodeGate>
      <DefaultProviders>
        <BrowserRouter>
          <Routes>
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/tjanster" element={<Services />} />
              <Route path="/barberare" element={<Barbers />} />
              <Route path="/boka" element={<Booking />} />
              <Route path="/om-oss" element={<About />} />
              <Route path="/kontakt" element={<Contact />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DefaultProviders>
    </CodeGate>
  );
}
