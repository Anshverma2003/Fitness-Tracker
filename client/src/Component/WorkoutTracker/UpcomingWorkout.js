
const UpcomingWorkout = (props) => {
  return (
    <div className="flex gap-[76px] w-[343px] h-[75px] rounded-[12px] bg-[#FFFFFF] custom-box-shadow">
      <div className="flex justify-start items-center ml-[16px]">
        <div className='w-[50px] h-[50px] mt-[13px] '>
          <img src={props.workoutIcon} alt="icon" />
        </div>
        <div className="flex flex-col justify-start item-center ml-[9px] mt-4">
          <h3 className="w-[135px] h-[15px] text-[12px] font-medium leading-[14.63px] text-[#2C2B2B] font-montserrat">{props.workoutName}</h3>
          <p className="w-[80px] h-[12px] font-montserrat font-medium text-[10px] leading-[12.19px] text-[#7F7F7F] mt-2">{props.workoutTime}</p>
        </div>
      </div>
      <div className="w-[40px] h-[20px] rounded-[14.29px] border-[0.71px] border-[#2A439C] bg-[#8099FF] mt-[32px] ">
        <div className="w-[15.71px] h-[15.71px] ml-[2.86px] bg-[#FFFFFF] mt-[2.14px] rounded-[50%]" >
        </div>
      </div>
    </div>
  );
};

export default UpcomingWorkout;
