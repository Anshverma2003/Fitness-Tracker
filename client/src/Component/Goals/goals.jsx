import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Goals = () => {

    const goalDiv = ["Weight Loss", "Muscle Gain", "Flexibility and Mobility", "General Fitness", "Event - specific training", "Mindfulness and Mental Health"];

    const navigate = useHistory();

    function hanldeClick(e){
        e.preventDefault();
        navigate.push('/workout')
    }

    return (
        <div className="goals flex-col space-y-12">
            <h1 className="text-center font-montserrat text-xl font-semibold">What are your goals?</h1>

            <div className="flex justify-center">
                <div className="flex-col justify-center items-center mx-auto">
                    {goalDiv.map((goal, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-[#F1F1F1] mb-4 w-343 h-12 rounded-xl">
                            <label htmlFor={`goal_${idx}`} className="ml-2 font-montserrat font-semibold text-xs">{goal}</label>
                            <input type="checkbox" className="mr-2 w-4 h-4 border-blue-500" id={`goal_${idx}`} />
                        </div>
                    ))}
                </div>
            </div>
            <footer className="fixed left-0 right-0 flex justify-center">
                <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-2 px-4 rounded w-343 h-12 font-montserrat text-base text-[#FFFFFF] font-semibold" onClick={hanldeClick}>Confirm</button>
            </footer>
        </div>
    );
};

export default Goals;
