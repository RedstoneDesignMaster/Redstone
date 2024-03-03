import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const AnimationSectiontwo = () => {
  return (
    <div className="mt-10">
      <h5 className="text-center text-2xl sm:text-3xl font-extrabold sm:font-bold px-6  pt-8 pb-6">
        Use Explainer Videos As a Communication Tool
      </h5>
      <p className="text-sm text-center text-gray-600 text-wrap   leading-8 sm:leading-6 px-6 sm:px-28">
        Nothing is complex with explainer videos. Tell more about your
        inventions and innovations with a combination of visuals and voice.
        Explainer videos work as communication between you and the audience.
        Whether you want to introduce your business practice or talk about the
        most sought product, explainer videos are your go-to tool.
      </p>
      <p className="text-sm text-center text-gray-600 text-wrap   leading-8 sm:leading-6 px-6 sm:px-28 sm:pt-4">
        At logo zeal, explainer videos are one of our fortes. We script and set
        the tone according to your target audience and create attractive
        visuals. We make sure that the difficulty of the video is standard and
        fulfills the purpose with efficiency. Explainer videos by us are never
        too plain, overpowering, or unattractive.
      </p>
      <div>
        <h5 className="text-center text-2xl sm:text-2xl font-bold py-4 sm:pt-8">
          Our Animation Expertise
        </h5>
        <p className="text-sm text-wrap text-center px-8 pb-6 text-gray-500 font-medium">
          We Offer an Extensive Range Of Animation Services to Help You Reach
          Your Branding Goals Effectively.
        </p>
        {/*Animation 5 div */}
        <div className="grid grid-cols-2 sm:grid-cols-4 px-8 sm:px-14  gap-4 rounded-md  sm:pt-8">
          <div className="border-2 pb-4 shadow-lg rounded-md hover:border-violet-300">
            <Image src={"/Video/1.webp"} alt="ani" width={400} height={100} />
            <h5 className="text-lg font-bold text-start py-2 px-2">
              2D animations
            </h5>
            <p className="text-wrap text-sm text-gray-500 text-start px-2">
              From comics to cartoons, we can help you get the best 2D animation
              work done by professionals.
            </p>
          </div>
          <div className="border-2 pb-4 shadow-lg rounded-md hover:border-violet-300">
            <Image src={"/Video/2.webp"} alt="ani" width={400} height={100} />
            <h5 className="text-lg font-bold text-start py-2 px-2">
              Explainer Video
            </h5>
            <p className="text-wrap text-sm text-gray-500 text-start px-2">
              From comics to cartoons, we can help you get the best 2D animation
              work done by professionals.
            </p>
          </div>{" "}
          <div className="border-2 pb-4 shadow-lg rounded-md hover:border-violet-300">
            <Image src={"/Video/3.webp"} alt="ani" width={400} height={100} />
            <h5 className="text-lg font-bold text-start py-2 px-2">
              Typographic Animation
            </h5>
            <p className="text-wrap text-sm text-gray-500 text-start px-2">
              From comics to cartoons, we can help you get the best 2D animation
              work done by professionals.
            </p>
          </div>{" "}
          <div className="border-2 pb-4 shadow-lg rounded-md hover:border-violet-300">
            <Image src={"/Video/4.webp"} alt="ani" width={400} height={100} />
            <h5 className="text-lg font-bold text-start py-2 px-2">
              3D animations
            </h5>
            <p className="text-wrap text-sm text-gray-500 text-start px-2">
              From comics to cartoons, we can help you get the best 2D animation
              work done by professionals.
            </p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default AnimationSectiontwo;
