import React from "react";

function CategoryCards() {
  return (
    <div className="grid grid-rows-1  grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1   mx-2">
      <div class="relative overflow-hidden rounded-lg  cursor-pointer ">
        <img
          class="object-cover  h-full"
          src="/img/hands.jpg"
          alt="Flower and sky"
        />
      </div>
    </div>
  );
}
export default CategoryCards;
