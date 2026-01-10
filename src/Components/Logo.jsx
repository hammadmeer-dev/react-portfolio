export default function HeaderLogo({ logo }) {
  return (
    <span className="w-10 inline-block">
      <img src={logo} alt="Logo" className="w-full h-auto" />
    </span>
  );
}
