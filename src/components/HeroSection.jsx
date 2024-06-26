import React from 'react'

const HeroSection = () => {
  return (
    <div id='hero' className="flex items-center justify-center flex-col py-20 ">
      <div className="text-center ">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500 ">
          Hi,This is Marina
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
        I am Mid-level Web developer able to build a Web presence from the ground up - from concept, navigation, layout and programming. Skilled at writing well-designed, testable and efficient code using current best practices in Web development.
        </p>
        <a
          href="#works"
          className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 md:text-md"
        >
          See Works
        </a>
      </div>
    </div>
  );
}

export default HeroSection
