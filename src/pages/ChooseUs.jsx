import React from "react";

function WhyChooseUs() {
  return (
    <div className="my-16 px-6 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h2 className="text-orange-500 font-semibold">Why Choose Us</h2>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Achieve your business goals with our web development solutions{" "}
          </h1>
          <p className="mt-4">
            In today’s digital age, we understand online presence is very
            important for every size of business. That’s why we offer only our
            best and most expert web development solutions that help you achieve
            your business goals. With our team of experienced web designers, we
            can create all types of websites that not only look good but also
            attract more visitors and provide you with the best results.
            Moreover, our website designs are fully adaptable, so you can make
            any new changes in the future if you want without worrying about
            coding and website design.
          </p>
          <br />
          <p>
            At Techiee, we’re not just building websites, we’re crafting digital
            masterpieces that move your business forward. Join hands with us,
            and see the unforgettable results and success of your business.
          </p>
        </div>
        {/* Right side image */}
        <div className="flex justify-center">
          <img
            src="https://buddytecch.com/wp-content/uploads/2024/10/goals0.png"
            alt="Why Choose Us"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
