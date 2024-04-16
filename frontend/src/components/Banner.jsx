import { Avila } from "../assets/index";


function Banner() {
  return (
    <div className="relative  bg-center h-48 md:h-96">
      <img src={Avila} alt="" className="relative  bg-center w-full h-48 md:h-96" />
      <div className="absolute left-0 top-0  flex justify-start items-center">

        <h1 className="text-white text-3xl md:text-5xl font-bold text-center m-16">Te enviamos al paraíso</h1>

      </div>
    </div>
  );
}

export default Banner;
