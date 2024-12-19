const Skill = ({ imgs, lvl }) => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <div
          className="before:content-[''] before:absolute before:h-[150px] before:w-[150px] before:rounded-full before:bg-white relative bg-white h-[170px] w-[170px] rounded-full flex items-center justify-center"
          style={{
            background: `conic-gradient(#7e61e7 ${lvl * 3.6}deg, #d3d3d3 0deg)`,
          }}
        >
          
          <img src={imgs} className="z-[3] h-[100px]"/>
          
        </div>
      </div>
      <div className="flex items-center justify-center my-[20px] text-white text-lg">
        <p>{lvl}%</p>
      </div>
    </div>
  );
};

export default Skill;
