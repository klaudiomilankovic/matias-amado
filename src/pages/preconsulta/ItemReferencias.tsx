const ItemReferencias = ({ data }) => {
  return (
    <article className="flex flex-col gap-y-3 text-center items-center">
      <div className="font-medium text text-sm h-14 flex items-center">
        <h2>{data.title}</h2>
      </div>
      <div className="aspect-[4/6]">
        <img
          className="w-full h-full object-cover"
          src={data.image}
          alt={data.title}
        />
      </div>
    </article>
  );
};

export default ItemReferencias;
