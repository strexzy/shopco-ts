import CasualBg from "~/assets/images/casual.png";
import FormalBg from "~/assets/images/formal.png";
import GymBg from "~/assets/images/gym.png";
import PartyBg from "~/assets/images/party.png";
import StyleCard from "./style-card";

const styleList: { imageUrl: string; style: string }[] = [
  { imageUrl: CasualBg, style: "Casual" },
  { imageUrl: FormalBg, style: "Formal" },
  { imageUrl: PartyBg, style: "Party" },
  { imageUrl: GymBg, style: "Gym" },
];

const Style = () => {
  return (
    <div className="bg-white w-full">
      <div className="bg-primary-grey rounded-2xl mx-4 pt-10 p-6 flex flex-col items-center gap-7">
        <h2 className="text-[32px] text-black font-extrabold text-center">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="w-full grid grid-rows-4 gap-4 md:grid-rows-2 md:grid-cols-5">
          <StyleCard
            imageUrl={styleList[0].imageUrl}
            style={styleList[0].style}
            className="md:col-span-2"
          />
          <StyleCard
            imageUrl={styleList[1].imageUrl}
            style={styleList[1].style}
            className="md:col-span-3"
          />
          <StyleCard
            imageUrl={styleList[2].imageUrl}
            style={styleList[2].style}
            className="md:col-span-3"
          />
          <StyleCard
            imageUrl={styleList[3].imageUrl}
            style={styleList[3].style}
            className="md:col-span-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Style;
