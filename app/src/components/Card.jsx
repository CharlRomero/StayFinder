import Button from "./Button";

const Card = () => {
  return (
    <>
      <section className="Card">
        <img src="" alt="Image" className="Card-img" />
        <section className="Card-information">
          <h2 className="Card-h2">Título</h2>
          <p className="Card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sint
            perspiciatis minima.
          </p>
        </section>
        <section className="Card-button">
          <Button title="Ver más" className="Button Button--primary" />
        </section>
      </section>
    </>
  );
};

export default Card;
