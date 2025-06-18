import globeIcon from "../assets/globe.png";

export default function Header() {
  return (
    <header>
      <nav>
        <img src={globeIcon} width="20px" alt="Globe-img" />
        <span>my travel journal</span>
      </nav>
    </header>
  );
}
