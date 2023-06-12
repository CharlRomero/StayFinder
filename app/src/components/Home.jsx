import { Navbar } from "./Navbar";
import { useAuth } from "../context/AuthContext";

export function Home() {
  const { user } = useAuth();

  return (
    <main className="Main">
      <Navbar />
      <section className="Main-user">
        <p className="Main-p">
          Bienvenido <span className="Main-span">{user.displayName}</span>
        </p>
      </section>
    </main>
  );
}
