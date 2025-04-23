import "../index.css";
import image from "../assets/HomePage.png";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-amber-50 font-montserrat flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-16 relative">
      {/* Text Content - appears first on mobile */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-30 animate-fade-in-down md:pl-10 mb-5 w-full md:w-auto">
        <div className="max-w-lg text-center md:text-left order-2 md:order-1">
          <h1 className="font-semibold text-3xl md:text-4xl text-amber-800 mb-4">
            Welcome,
          </h1>
          <h2 className="font-semibold text-2xl md:text-3xl text-amber-800 mb-4">
            Enjoy Delicious Sushi
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Experience the authentic taste of Japanese cuisine with our
            freshly-made sushi and sashimi.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-amber-800 hover:bg-amber-700 text-white font-semibold rounded-full px-6 py-2 w-fit transition-colors duration-300">
              Order Now
            </button>
          </div>
        </div>

        {/* Image - appears after text on mobile */}
        <div className="animate-fade-in-down order-1 md:order-2 w-full md:w-auto flex justify-center">
          <img
            src={image}
            className="w-[280px] h-auto md:w-[400px]"
            alt="Delicious sushi presentation"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
