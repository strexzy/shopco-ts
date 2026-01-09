import { Link } from "react-router";

type StyleCardProps = {
  imageUrl: string;
  style: string;
};

const StyleCard = ({ imageUrl, style }: StyleCardProps) => {
  return (
    <Link to={`/shop/${style.toLowerCase()}`}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={`bg-[url('${imageUrl}')] bg-no-repeat bg-cover rounded-2xl w-full h-47.5 px-6 py-4 text-2xl font-medium text-black`}
      >
        {style}
      </div>
    </Link>
  );
};

export default StyleCard;
