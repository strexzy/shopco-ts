import StyleCard from "./style-card";

const styleList: { imageUrl: string; style: string }[] = [
  { imageUrl: "./assets/images/casual.png", style: "Casual" },
  { imageUrl: "./assets/images/formal.png", style: "Formal" },
  { imageUrl: "./assets/images/party.png", style: "Party" },
  { imageUrl: "./assets/images/gym.png", style: "Gym" },
];

const Style = () => {
  return (
    <div className="bg-white w-full">
      <div className="bg-primary-grey rounded-2xl mx-4 pt-10 p-6 flex flex-col items-center gap-7">
        <h2 className="text-[32px] text-black font-extrabold text-center">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="w-full flex flex-col gap-4">
          {styleList.map(({ imageUrl, style }, idx) => (
            <StyleCard key={idx + style} imageUrl={imageUrl} style={style} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Style;
