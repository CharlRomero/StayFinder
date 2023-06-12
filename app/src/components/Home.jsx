import { Navbar } from "./Navbar";
import { useAuth } from "../context/AuthContext";
import Card from "./Card";

export function Home() {
  const { user } = useAuth();

  return (
    <main className="Main">
      <Navbar />
      <section className="Main-user">
        <p className="Main-p">
          Bienvenido <span className="Main-span">{}</span>
        </p>
      </section>
      <section className="Main-card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}
