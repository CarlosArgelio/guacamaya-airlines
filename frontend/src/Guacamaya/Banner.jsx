// import React from 'react';

function Banner() {
  return (
    <div className="relative bg-cover bg-center h-48 md:h-96" style={{backgroundImage: 'url(\'/assets/background.jpg\')'}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center">Te llevamos al paraíso</h1>
      </div>
    </div>
  );
}

export default Banner;
