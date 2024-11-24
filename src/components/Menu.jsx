const Menu = ({ onSelect }) => {
  const menu = ["View todos", "Add todo", "Update todo", "Delete todo"];

  const handleSelection = (index) => {
    const actions = ["view", "add", "update", "delete"];
    onSelect(actions[index]);
  };

  return (
    <ul className="block">
      {menu.map((item, index) => (
        <li
          key={index}
          className="cursor-pointer hover:text-brand-400"
          onClick={() => handleSelection(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
