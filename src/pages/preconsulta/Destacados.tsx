import Items from "./Items";

const Destacados = () => {
  const data = [
    {
      title: "Rinoplastia",
      category: "Quirúrgicos",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam ",
      image: "/images/rinoplastia.jpg",
      url: "/pre-consulta/rinoplastia",
    },
    {
      title: "Cirugía de mamas",
      category: "Quirúrgicos",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam ",
      image: "/images/mamas.jpg",
      url: "/pre-consulta/cirugia-de-mamas",
    },
    {
      title: "Contorno corporal",
      category: "Quirúrgicos",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam ",
      image: "/images/contorno.jpg",
      url: "/pre-consulta/contorno-corporal",
    },
    {
      title: "Face Inyectable",
      category: "Quirúrgicos",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam ",
      image: "/images/rinoplastia.jpg",
      url: "/pre-consulta/fullface",
    },
  ];
  return (
    <section className="px-6 lg:px-14 py-6 pb-14 lg:py-12">
      <h1 className="text-4xl lg:text-5xl font-bold mb-12 lg:mb-16 text-primary text-center">
        Comencemos
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <Items key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Destacados;
