import Ck from "~/assets/icons/brands/ck.svg";
import Gucci from "~/assets/icons/brands/gucci.svg";
import Prada from "~/assets/icons/brands/prada.svg";
import Versace from "~/assets/icons/brands/versace.svg";
import Zara from "~/assets/icons/brands/zara.svg";

const brands = [
  { id: 1, name: "Versace", icon: Versace },
  { id: 2, name: "Zara", icon: Zara },
  { id: 3, name: "Gucci", icon: Gucci },
  { id: 4, name: "Prada", icon: Prada },
  { id: 5, name: "Calvin Klein", icon: Ck },
];

const Brands = () => {
  return (
    <div className="bg-black py-10 flex flex-wrap justify-center gap-8.5">
      {brands.map((brand) => (
        <img
          key={brand.id}
          src={brand.icon}
          alt={`${brand.name} brand logo`}
          className="max-h-6"
        />
      ))}
    </div>
  );
};

export default Brands;
