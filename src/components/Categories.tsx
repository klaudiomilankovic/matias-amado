type Category = {
  category: number;
};

const Categories = ({ category }: Category) => {
  const closeCategories = () => {
    const categories = document.querySelectorAll(".categories");
    const btns = document.querySelectorAll(".btn-categories");
    categories.forEach((category) => {
      category.classList.add("hidden");
    });
    btns.forEach((btn) => {
      btn.classList.remove("bg-primary");
      btn.classList.remove("text-white");
    });
  };

  return (
    <section className="fixed left-0 categories w-full px-8 hidden bg-black h-screen bg-opacity-20" id={`categories-${category}`} onClick={closeCategories}>
      <div className="bg-primary px-12 pt-8 pb-12 text-white flex justify-evenly gap-20 container m-auto">
        {category === 1 ? (
          <>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <a href="#" className="link-white">
                  Lifting facial
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Blefaroplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Mentoplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Rinoplastia
                </a>
              </li>
            </ul>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <a href="#" className="link-white">
                  Lifting facial
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Blefaroplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Mentoplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Rinoplastia
                </a>
              </li>
            </ul>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <a href="#" className="link-white">
                  Lifting facial
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Blefaroplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Mentoplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Rinoplastia
                </a>
              </li>
            </ul>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <a href="#" className="link-white">
                  Lifting facial
                </a>
              </li>

              <li>
                <a href="#" className="link-white">
                  Lifting facial
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Lifting facial
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Blefaroplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Mentoplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Rinoplastia
                </a>
              </li>
            </ul>
          </>
        ) : category === 2 ? (
          <>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <a href="#" className="link-white">
                  Lifting facial
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Blefaroplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Mentoplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Rinoplastia
                </a>
              </li>
            </ul>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <a href="#" className="link-white">
                  Lifting facial
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Blefaroplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Mentoplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Rinoplastia
                </a>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <a href="#" className="link-white">
                  Lifting facial
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Blefaroplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Mentoplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Rinoplastia
                </a>
              </li>
            </ul>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <a href="#" className="link-white">
                  Lifting facial
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Blefaroplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Mentoplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Rinoplastia
                </a>
              </li>
            </ul>
            <ul className="[&>li]:mb-2">
              <li>
                <span className="font-bold">Cabeza y cuello</span>
              </li>
              <li>
                <a href="#" className="link-white">
                  Lifting facial
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Blefaroplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Mentoplastia
                </a>
              </li>
              <li>
                <a href="#" className="link-white">
                  Rinoplastia
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default Categories;
