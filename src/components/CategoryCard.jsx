import React from "react";

function CategoryCards() {
  return (
    <div className="mx-4 grid lg:grid-cols-3 gap-3 lg:text-2xl md:text-xl sm:text-md ">
      <div class="relative overflow-hidden  cursor-pointer  col-span-2 row-span-2 ">
        <p className="card-text">Konstverk</p>

        <img
          class="object-cover card-img"
          src="/img/hands.jpg"
          alt="Flower and sky"
        />
      </div>
      <div className="relative  cursor-pointer  ">
        <p className="card-text">Inredning</p>
        <img
          class="object-cover card-img"
          src="/img/furniture.jpg"
          alt="furniture"
        />
      </div>
      <div className="relative overflow-hidden  cursor-pointer  ">
        <p className="card-text">Smycken</p>
        <img
          class="object-cover card-img"
          src="/img/jewelry.jpg"
          alt="furniture"
        />
      </div>
      <div className="relative overflow-hidden  cursor-pointer  ">
        <p className="card-text">Vintage</p>
        <img
          class="object-cover card-img"
          src="/img/vintage.jpg"
          alt="furniture"
        />
      </div>
      <div className="relative overflow-hidden  cursor-pointer  ">
        <p className="card-text">Tillbehör</p>
        <img
          class="object-cover card-img"
          src="/img/tillbehör.jpg"
          alt="furniture"
        />
      </div>
    </div>
  );
}
export default CategoryCards;
