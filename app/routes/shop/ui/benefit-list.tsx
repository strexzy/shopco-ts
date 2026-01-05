import Benefit from "./benefit";

const BenefitList = () => {
  return (
    <div className="w-full flex flex-col gap-3 items-center">
      <div className="w-full max-w-69.5 flex justify-between">
        <Benefit title="200+" subtitle="International Brands" />
        <span className="block border border-gray-200"></span>
        <Benefit title="2,000+" subtitle="High-Quality Products" />
      </div>
      <Benefit title="30,000+" subtitle="Happy Customers" />
    </div>
  );
};

export default BenefitList;
