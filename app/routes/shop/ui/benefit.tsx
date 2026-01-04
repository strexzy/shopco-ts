type BenefitProps = {
  title: string;
  subtitle: string;
};

const benefit = ({ title, subtitle }: BenefitProps) => {
  return (
    <div className="flex flex-col flex-wrap">
      <p className="text-2xl text-black font-medium">{title}</p>
      <p className="text-xs text-gray-500 font-light">{subtitle}</p>
    </div>
  );
};

export default benefit;
