import React from "react";

function CategoryCards() {
  return (
    <div className="mx-6 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:grid-rows-2 gap-2 lg:text-2xl md:text-xl sm:text-sm mx-1 ">
      <div className="relative overflow-hidden  cursor-pointer col-span-2 row-span-2 ">
        <p className="card-text zoom">Konstverk</p>

        <img
          class="object-cover card-img"
          src="/img/hands.jpg"
          alt="Flower and sky"
        />
      </div>
      <div className="relative overflow-hidden category-cards   cursor-pointer  ">
        <p className="card-text zoom">Inredning</p>
        <img
          className="object-cover card-img"
          src="/img/furniture.jpg"
          alt="furniture"
        />
      </div>

      <div className="relative overflow-hidden category-cards     cursor-pointer  ">
        <p className="card-text zoom">Smycken</p>
        <img
          class="object-cover card-img"
          src="/img/jewelry.jpg"
          alt="furniture"
        />
      </div>
      <div className="relative overflow-hidden   cursor-pointer  ">
        <p className="card-text zoom">Vintage</p>
        <img
          class="object-cover card-img"
          src="/img/vintage.jpg"
          alt="furniture"
        />
      </div>
      <div className="relative overflow-hidden lg:col-span-2  cursor-pointer  ">
        <p className="card-text zoom">Tillbehör</p>
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
