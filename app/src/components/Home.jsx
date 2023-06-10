import { Navbar } from "./Navbar";
import { useAuth } from "../context/authContext";

export function Home() {
  const { user } = useAuth();
    console.log(user);
  return (
    <main className="Main">
      <Navbar />
      <section className="Main-user">
        <p className="Main-p">Bienvenido <span className="Main-span">{}</span></p>
      </section>
    </main>
  );
}
