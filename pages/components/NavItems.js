const links = [
  {
    name: "Tickets",
    url: "#",
  },
  {
    name: "Schedule",
    url: "#",
  },
  {
    name: "NHL Standings",
    url: "#",
  },
  {
    name: "Fans",
    url: "#",
  },
  {
    name: "Shop",
    url: "#",
  },
];

const NavItems = () => {
  return (
    <div className="flex items-center justify-end">
      {links.map(({name, url}, index) => (      
          <button className="text-white text-base px-5 mx-1 py-2 rounded-xl" href={url} key={`nav-${index}`}>{name}</button>
      ))}
    </div>
  );
}

export default NavItems;