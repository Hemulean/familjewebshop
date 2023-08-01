import React from "react";

function CategoryCards() {
  return (
    <div className="mx-4 grid lg:grid-cols-3 gap-3">
      <div class="relative overflow-hidden  cursor-pointer  col-span-2 row-span-2 ">
        <p className="card-text">Konstverk</p>

        <img
          class="object-cover card-img"
          src="/img/hands.jpg"
          alt="Flower and sky"
        />
      </div>
      <div class="relative overflow-hidden  cursor-pointer  ">
        <p className="card-text">Inredning</p>
        <img
          class="object-cover card-img"
          src="/img/furniture.jpg"
          alt="furniture"
        />
      </div>
      <div class="relative overflow-hidden  cursor-pointer  ">
        <p className="card-text">Smycken</p>
        <img
          class="object-cover card-img"
          src="/img/jewelry.jpg"
          alt="furniture"
        />
      </div>
    </div>
  );
}
export default CategoryCards;
