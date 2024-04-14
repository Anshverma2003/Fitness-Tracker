import chartFull from "../../Assets/Chart Full.png";
import alert from "../../Assets/alert-triangle.png";
import arrow from "../../Assets/chevron-left.png";
import UpcomingWorkout from "./UpcomingWorkout";
import ellipse53 from "../../Assets/Ellipse 53.png";
import ellipse54 from "../../Assets/Ellipse 54.png";
import ellipse55 from "../../Assets/Ellipse 55.png";
import homeIcon from "../../Assets/homeIcon.png";
import progressIcon from "../../Assets/progressIcon.png";
import cameraIcon from "../../Assets/cameraIcon.png";
import profileIcon from "../../Assets/profileIcon.png";
import searchIcon from "../../Assets/searchIcon.png";
const WorkoutTracker = () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-[343px] min-h-[800px]">
      <div className="  flex justify-start gap-[80px] mt-[30px] w-[343px]">
        <img src={arrow} alt="back button" />
        <h1 className="w-[172px] h-6 font-semibold font-montserrat text-xl leading-7  ">
          Workout Tracker
        </h1>
      </div>

      <div className="mt-[50.96px]">
        <div className="flex justify-center  font-normal text-[#2C2B2B] text-xs leading-[13.6px] ml-24 gap-8">
          <h4 className=" w-[61px] ">Good job</h4>
          <h4>less then 320cal</h4>
        </div>
        <div className="flex justify-center gap-[112px] ml-[79px] mt-[1.27px]">
          <div className="flex flex-col gap-[2.036px] w-[2.04px] h-[10.18px] mt-[15.27px]  ">
            <div className=" h-[2.036px]  bg-[#111111] opacity-[67%] rounded-[20.36px]"></div>
            <div className=" h-[6.108px] bg-[#111111] opacity-[67%] rounded-[20.36px]"></div>
          </div>
          <div className="flex flex-col gap-[2.036px] w-[2.04px] h-[10.18px] mt-[15.27px]  ">
            <div className=" h-[2.036px]  bg-[#111111] opacity-[67%] rounded-[20.36px]"></div>
            <div className=" h-[6.108px] bg-[#111111] opacity-[67%] rounded-[20.36px]"></div>
          </div>
        </div>
        <div className="flex justify-center mt-[4.3px]">
          <a href="/schedule">
            <img
              src={chartFull}
              alt="chart"
              className="w-[343px] h-[89.98px] min-w-[343px]"
            />
          </a>
        </div>
        <div className=" flex justify-center  w-[328.75px] h-[50px] mt-[24.85px] rounded-[10px] border-solid border-2 border-[#454545] border-opacity-[4%] custom-bg">
          <img
            src={alert}
            alt="alert symbol"
            className="w-5 h-5 mt-[15.69px] ml-[9px]"
          />
          <p className="w-[281px] h-[30px] mt-[9.69px] ml-[8px] text-[12.57px] leading-[15.32px] font-medium font-montserrat">
            You've burned fewer calories than <br></br>
            yesterday. Time to get moving!
          </p>
        </div>
      </div>

      <div className="w-[343px] mt-[54.69px]">
        <div className="flex justify-between">
          <h3 className="w-[164px] h-[20px] font-semibold text-[16px] leading-[19.5px] font-montserrat text-[#2C2B2B]">
            Upcoming Workout
          </h3>
          <p className="w-[58px] h-[15px] text-[#7F7F7F] text-[12px] font-normal leading-[14.63px]">
            see more
          </p>
        </div>
        <div className="mt-4 flex flex-col justify-center items-center gap-4">
          <UpcomingWorkout
            workoutName="Full Body Workout"
            workoutTime="Today 5pm"
            workoutIcon={ellipse53}
          />
          <UpcomingWorkout
            workoutName="Upper Body Workout"
            workoutTime="4 Feb, 3:30 pm"
            workoutIcon={ellipse54}
          />
        </div>
      </div>

      {/* div for what do you want to train  */}

      <div className="mt-[17px] w-[343px] shadow-lg">
        <h3 className="h-[20px] w-[225px] ml-[1px] font-semibold font-montserrat text-[16px] leading-[19.5px] text-[#2C2B2B]">
          What Do You Want to Train{" "}
        </h3>
        <div className=" flex justify-between w-[343px] h-[124px] rounded-[12px] bg-[#8CB1FF]  mt-4  p-4">
          <div className="flex flex-col gap-[9px] font-montserrat font-medium text-[10px] leading-[12.19px] text-[#2C2B2B]">
            <p className="text-[12px] leading-[14.63px]">Full Body Workout</p>
            <p>Arms</p>
            <p>Chest</p>
          </div>
          <div className=" w-[100px] h-[100px]">
            <img src={ellipse55} alt="ellipse55 icon" />
          </div>
        </div>
      </div>

      {/* div for navigation button  */}

      <div className="w-[375px] h-[76px] bg-[#FFFFFF] fixed bottom-[0px]">
        <div className=" relative flex justify-evenly m-[13px] mt-[22.1px] ">
          <div className="flex justify-start gap-10 mr-[50px] ">
            <img
              src={homeIcon}
              alt="home icon"
              className="w-[26.59px] h-[26.54px]"
            />
            <img
              src={progressIcon}
              alt="progress icon"
              className="w-[26.59px] h-[26.54px]"
            />
          </div>

          <div className="absolute bottom-[12px] ">
            <img
              src={searchIcon}
              alt="search icon"
              className="w-[63px] h-[63px]  rounded-[50%] shadow-lg"
            />
          </div>

          <div className="flex justify-start gap-8 ml-[50px]">
            <img
              src={cameraIcon}
              alt="camera icon"
              className="w-[26.59px] h-[26.54px]"
            />
            <img
              src={profileIcon}
              alt="profile icon"
              className="w-[26.59px] h-[26.54px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutTracker;
