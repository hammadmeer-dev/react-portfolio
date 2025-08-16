export default function HeaderLogo({ logo }) {
  return (
    <span className="w-10 inline-block animate-jump">
      <img src={logo} alt="Logo" className="w-full h-auto" />
    </span>
  );
}
