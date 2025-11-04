import React from 'react';

const HowItWorks = () => {
  return (
    <section className=" flex flex-row items-center py-6 px-32 mt-24">
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-6">How it works?</h2>
       
       <div className='text-justify pr-4'>
       <p className=" ">
          Lorem ipsum dolor sit amet consectetur. Potenti sit porttitor nam in lacus tempor cras. Nunc elementum turpis commodo odio massa aliquet ultrices. Etiam in est duis feugiat pretium nec fermentum pharetra. Varius duis dictum lectus iaculis amet mi commodo sit mauris. Nec neque consequat morbi placerat nibh. Non lorem interdum interdum sapien pretium interdum amet nibh. Turpis risus eget nascetur blandit consequat risus. Gravida cras massa neque amet adipiscing egestas donec. </p>
        <br />
        <p>
          Nam aliquet nunc urna tincidunt.  egestas diam amet at tincidunt. Orci sed id aenean mi cursus viverra. Mi quis tristique dictumst tellus dignissim. Facilisi rutrum diam commodo in. Pellentesque diam purus potenti velit tincidunt arcu venenatis ut. At tortor a bibendum gravida ac amet. Sit tellus id nulla nunc elit cursus pellentesque vitae. Erat viverra orci lacus nec arcu sit. Tellus tristique lectus egestas odio sem arcu scelerisque etiam. Vestibulum massa risus vitae velit. Scelerisque amet fermentum urna tincidunt dignissim. Massa nulla porta dui in. Facilisi sit sit cursus enim. Et scelerisque urna dictum placerat risus et in condimentum. Ipsum tristique eu at elit mi convallis tellus felis natoque. Scelerisque at elementum eu a. Lobortis nisl placerat a facilisis suscipit gravida. Fermentum sit duis posuere semper.

        </p>
       </div>
      </div>
      <div className="w-1/2 pl-12">
        <video className="h-[400px] border rounded-xl" width="100%" controls>
          <source src="https://youtu.be/nubeM1i7NBA" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HowItWorks;

