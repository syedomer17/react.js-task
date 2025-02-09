import Tilt from "react-parallax-tilt";

const TiltCard = () => {
  return (
    <Tilt className="tilt-container">
      <div className="p-6 rounded-xl shadow-lg bg-gradient-to-r from-purple-700 to-blue-500 text-white">
        <h3 className="text-2xl font-bold">Tilt Effect Card</h3>
        <p>Move your mouse over me!</p>
      </div>
    </Tilt>
  );
};

export default TiltCard;
