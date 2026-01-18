type LinksListProps = {
  title: string;
  links: string[];
};

const LinksList = ({ title, links }: LinksListProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-black text-sm font-light tracking-widest">
        {title.toUpperCase()}
      </p>
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <p key={link} className="text-gray-500 text-sm font-light">
            {link}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LinksList;
