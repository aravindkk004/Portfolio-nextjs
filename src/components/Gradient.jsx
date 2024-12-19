const Gradient = () => {
  return (
    <div
      className="before:content-[''] after:content-[''] before:absolute after:absolute  
        before:rounded-full after:rounded-full 
        md:before:w-[22.125rem] before:w-[22.125rem] 
        md:after:w-[22.125rem] after:w-[15.125rem] 
        after:h-[15.125rem] md:after:h-[22.125rem] 
        before:h-[22.125rem] md:before:h-[22.125rem] 
        before:bg-[#7e61e7] after:bg-[#7e61e7] 
        before:blur-[225px] after:blur-[225px] 
        before:-top-12 before:-left-20 
        after:-bottom-30 after:right-0 -z-10"
    ></div>
  );
};

export default Gradient;
