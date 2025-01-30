import { FaPhoenixSquadron } from "react-icons/fa";
import { PiGreaterThan } from "react-icons/pi";

interface MySecHeaderProps {
  title: string;
}

const MySecHeader: React.FC<MySecHeaderProps> = ({ title }) => {
  return (
    <header
      className="relative flex justify-center items-center w-full h-[23rem]"
      style={{
        backgroundImage: `url(${"https://res.cloudinary.com/dxjjsfami/image/upload/v1737531172/cartBg_ub5z5b.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#ffffffb3",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-dark text-center">
        <FaPhoenixSquadron className="size-12" />
        <h1 className="py-2 text-7xl">{title}</h1>
        <nav>
          <ul className="flex justify-center items-center text-2xl p-1">
            <li className="font-bold"> Home </li>
            <li>
              <PiGreaterThan className="mx-1" />
            </li>
            <li>{title}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default MySecHeader;
