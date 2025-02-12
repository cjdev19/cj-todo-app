import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <h1 className="text-4xl font-bold text-center mt-8">
      <TypeAnimation
        sequence={["🦝 Today i need to 🦝", 1000, "Stay Productive!", 1000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </h1>
  );
};

export default Header;
