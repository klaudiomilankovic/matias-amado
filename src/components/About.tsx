import Image from "../components/ImageComponent";

const About = () => {
  const data = [
    {
      title: "Carrera de Medicina",
      text: "(6 años) Universidad Fundación H A Barcelo - La Rioja",
    },
    {
      title: "Residencia de Cirugía General",
      text: "(5años ) Hospital San Bernardo - Salta",
    },
    {
      title: "Residencia de Cirugía Plástica ",
      text: "(3 años) Hopsital Federico Abete - Buenos Aires",
    },
    {
      title: "Carrera de Médico Especialista en Cirugía Plástica",
      text: "(3 años ) Universidad de Buenos Aires (UBA)",
    },
    {
      title: "Especialista en Medicina Estética",
      text: "(1año) - AICER",
    },
  ];
  return (
    <section className="md:flex relative" id="section-about">
      <div className="absolute z-20" id="icon-ma">
        <img src="/images/icon-ma.svg" />
      </div>
      <div className="aspect-square md:aspect-auto md:w-1/2">
        <Image src="/images/img-bio.jpg" />
      </div>
      <div className="md:w-1/2 p-10 lg:p-12 color-primary h-full flex items-center">
        <div>
          <ul className="list-disc flex flex-col gap-y-6">
            {data.map((item, index) => (
              <li key={index}>
                <h2 className="text-xl lg:text-2x">{item.title}</h2>
                <span className="font-italic opacity-50">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
