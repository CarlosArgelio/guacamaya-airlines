

// eslint-disable-next-line react/prop-types
function Card({ imageSrc, title, description }) {
  return (
    <div className="w-full md:w-1/4 px-10 mb-10">
      <div className="relative">
        <img src={imageSrc} alt={title} className="w-50 h-80 rounded-xl" />
        <div className="absolute inset-0 bg-black rounded-xl opacity-0 hover:opacity-75 transition duration-300">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="text-center">
              <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-200">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
