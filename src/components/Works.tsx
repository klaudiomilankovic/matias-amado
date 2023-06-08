import Items from "./Items";

const Works = () => {
  return (
    <section className="px-14 py-0 pb-14 md:py-14 ">
      <h1 className="text-3xl font-bold mb-16 text-primary md:text-center">Tratamientos destacados</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-8">
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      </div>
    </section>
  );
};

export default Works;
