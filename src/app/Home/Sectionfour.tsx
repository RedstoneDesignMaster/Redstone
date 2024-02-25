import React from "react";

const Sectionfour = () => {
  return (
    <>
      <div className="md:h-screen ">
        <div className="bg-violet-700 py-3 text-center pt-20 ">
          <h5 className="text-4xl font-bold text-white">
            Let Us Give Your Brand An Identity <br />
            That Speaks It All For You!
          </h5>
          <p className="text-yellow-300 text-xl py-8">
            We transform creative ideas into stunning realities. Share your
            vision with us, we will turn it into reality for you.
          </p>
          <ul className="flex items-center justify-center gap-4">
            <li className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400">
              Request a Custom Quote
            </li>
            <li className="px-6 py-2 bg-[#ffff] ">View All Project</li>
          </ul>
        </div>
        <div className="text-center text-wrap pt-24 pb-5">
          <h5 className="text-4xl font-bold">
            Perfect Logo Packages for <br />
            Corporations Globally
          </h5>
          <p className="pt-8 leading-6 font-normal italic">
            Our team of experts focus on client and customer satisfaction as the
            ultimate goal for our projects. <br />
            This is one of the many reasons why our work is globally recognized.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sectionfour;
