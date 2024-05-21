import React from 'react';
import Image from 'next/image';

function Carousel() {
  return (
    <div id="carousel" className="carousel w-full">
      <Image
        className="h-full w-full rounded-3xl shadow-2xl"
        alt="Imagem"
        height={500}
        src="/img/SaveYourPlace.png"
        width={500}
      />
    </div>
  );
}

export default Carousel;
