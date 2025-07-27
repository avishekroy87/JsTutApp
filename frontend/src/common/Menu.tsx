interface MenuProps {
  items: { label: string; href: string }[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
return (
    <nav>
    <ul className="menu">
        {items.map((item, index) => (
        <li key={index}><a href={item.href}>{item.label}</a></li>
        ))}
        </ul>
    </nav>
)}

export default Menu