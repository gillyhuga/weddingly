import React from "react";
import why from "@/public/images/home-why.png";
import Image from "next/image";

function Why() {
  return (
    <div>
      <div class=" hero container mx-auto">
        <div class="hero-content grid grid-cols-1 md:grid-cols-2">
          <div className=" grid-cols-12">
            <Image src={why} alt="" />
          </div>
          <div className="grid-cols-12">
            <h1 className="text-5xl font-bold">Why choose us</h1>
            <p className="py-6">
              With Weddingly, you can find the smarter way to manage yor dream
              wedding with simple, modern and easy ways.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
