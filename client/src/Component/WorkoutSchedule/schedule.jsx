import React, { useState } from 'react';
import homeIcon from "../../Assets/homeIcon.png";
import progressIcon from "../../Assets/progressIcon.png";
import cameraIcon from "../../Assets/cameraIcon.png";
import profileIcon from "../../Assets/profileIcon.png";
import searchIcon from "../../Assets/searchIcon.png";

const Schedule = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentDate = new Date();
    var date = currentDate.getDate()
    const currentDay = currentDate.getDay();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();
    const [workouts, setWorkouts] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [workoutName, setWorkoutName] = useState('');
    const [workoutTime, setWorkoutTime] = useState('');

    const renderDaysOfWeek = () => {
        return daysOfWeek.map((day, index) => (
            <div >
                <div key={index} className={`flex items-center justify-center h-14 w-12 border border-gray-300 rounded-lg font-montserrat font-medium text-base ${index === currentDay ? 'bg-gradient-to-r from-[#ffff] to-[#96ABFF]' : ''} ${index > 0 ? 'ml-2' : ''}`}>
                    <div className='flex flex-col'>
                        <p className='font-montserrat font-medium text-base '>{day}</p>
                        <p className='font-montserrat font-medium text-base flex justify-center '>{date = date + 1}</p>
                    </div>
                </div>
            </div>

        ));
    };

    const renderTimeSlots = () => {
        const timeSlots = [];
        for (let hour = 6; hour <= 24; hour++) {
            for (let minute = 0; minute < 60; minute += 60) {
                const time = `${hour < 10 ? '0' + hour : hour}:${minute === 0 ? '00' : minute} ${hour < 12 ? ' AM' : ' PM'}`;
                timeSlots.push(time);
            }
        }
        return timeSlots.map((time, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-300 py-2 font-montserrat font-semisolid text-sm text-[#2C2B2B]">
                <div>{time}</div>
                {workouts[time] && <div>{workouts[time]}</div>}
            </div>
        ));
    };

    const handleAddWorkout = () => {
        setIsModalOpen(true);
    };

    const handleSubmitWorkout = () => {
        setWorkouts({ ...workouts, [workoutTime]: workoutName });
        setIsModalOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="schedule max-w-screen-md mx-auto mt-8 relative">
            <h2 className="text-xl font-semibold mb-4 text-center font-montserrat text-xl">Workout Schedule</h2>
            <div className="mb-4 text-center font-montserrat font-semibold text-sm"> &lt; {`${currentMonth} ${currentYear}`}  &gt;</div>
            <div className="grid grid-cols-7 gap-1 mb-4">
                {renderDaysOfWeek()}
            </div>
            <div className="grid grid-cols-1 gap-1 mb-4">
                {renderTimeSlots()}
            </div>
            <button className="absolute bottom-8 right-2 bg-blue-500 text-white font-montserrat text-3xl rounded-full w-16 h-16 flex items-center justify-center shadow-lg bg-gradient-to-r from-[#E9B1E0] to-[#D3A5F2]" onClick={handleAddWorkout}>
                +
            </button>

            <div className="bg-[#FFFFFF] sticky bottom-0 ">
                <div className=" relative flex justify-evenly m-[13px] mt-[22.1px] ">
                    <div className="flex justify-start gap-10 mr-[50px] mb-2">
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

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-md flex flex-col space-y-6 w-80">
                        <div className="text-lg font-semibold mb-2" value="">Add Workout</div>
                        <input type="text" className="border border-gray-300 rounded-md px-3 py-2 mb-2" placeholder="Workout Name" value={workoutName} onChange={(e) => setWorkoutName(e.target.value)} />
                        <input type="time" className="border border-gray-300 rounded-md px-3 py-2 mb-2" placeholder="Time" value={workoutTime} onChange={(e) => setWorkoutTime(e.target.value)} />
                        <button className="bg-blue-500 text-white rounded px-4 py-2" onClick={handleSubmitWorkout}>Add Workout</button>
                        <button className="bg-gray-300 text-black rounded px-4 py-2" onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Schedule;
