import Benefit from "./benefit";

const BenefitList = () => {
  return (
    <div className="flex justify-center md:justify-start">
      <div className="max-w-69.5 flex flex-wrap justify-center gap-4 md:max-w-full">
        <Benefit title="200+" subtitle="International Brands" />
        <span className="block border border-gray-200 md:hidden"></span>
        <Benefit title="2,000+" subtitle="High-Quality Products" />
        <Benefit title="30,000+" subtitle="Happy Customers" />
      </div>
    </div>
  );
};

export default BenefitList;
