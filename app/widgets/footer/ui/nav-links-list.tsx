import LinksList from "./links-list";

const list = [
  { title: "Company", links: ["About", "Features", "Works", "Career"] },
  {
    title: "Help",
    links: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "FAQ",
    links: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  {
    title: "Resources",
    links: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
];

const Links = () => {
  return (
    <>
      {list.map((listItem) => (
        <div
          key={listItem.title}
          className="flex basis-2/5 lg:basis-0 justify-start"
        >
          <LinksList title={listItem.title} links={listItem.links} />
        </div>
      ))}
    </>
  );
};

export default Links;
