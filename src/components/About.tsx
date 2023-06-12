import Image from "../components/ImageComponent";

const About = () => {
  return (
    <section className="md:flex relative" id="section-about">
      <div className="absolute z-20" id="icon-ma">
        <img src="/images/icon-ma.svg" />
      </div>
      <div className="aspect-square md:aspect-auto md:w-1/2">
        <Image src="/images/img-bio.jpg" />
      </div>
      <div className="md:w-1/2 p-12 color-primary h-full flex items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">MATIAS AMADO</h1>
          <ul className="[&>li]:mb-4 list-disc ml-3">
            <li>
              Carrera de Medicina <br />
              <span className="font-italic">(6 años) Universidad Fundación H A Barcelo - La Rioja</span>
            </li>
            <li>
              Residencia de Cirugía General <br />
              <span className="font-italic">(5años ) Hospital San Bernardo - Salta</span>
            </li>
            <li>
              Residencia de Cirugía Plástica <br />
              <span className="font-italic">(3 años) Hopsital Federico Abete - Buenos Aires</span>
            </li>
            <li>
              Carrera de Médico Especialista en Cirugía Plástica <br /> <span className="font-italic">(3 años ) Universidad de Buenos Aires (UBA)</span>
            </li>
            <li>
              Especialista en Medicina Estética <br />
              <span className="font-italic">(1año) - AICER</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
