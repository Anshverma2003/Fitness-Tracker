const Goals = () => {

    const goalDiv = ["Weight Loss", "Muscle Gain", "Flexibility and Mobility", "General Fitness", "Event - specific training", "Mindfulness and Mental Health"];


    return (
        <div className="goals flex-col space-y-12">
            <h1 className="text-center font-montserrat text-xl font-semibol ">What are your goals?</h1>

            <div>
                {goalDiv.map((goal, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-[#F1F1F1] mb-4 w-343 h-12 rounded-xl">

                        <label htmlFor={`goal_${idx}`} className="ml-2 font-montserrat font-semibold text-xs">{goal}</label>
                        <input type="checkbox" className="mr-2 w-4 h-4 border-blue-500" id={`goal_${idx}`} />

                    </div>
                ))}
            </div>
            <footer className="fixed left-0 right-0 flex justify-center">
                <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-2 px-4 rounded w-343 h-12 font-montserrat text-base text-[#FFFFFF] font-semisolid">Confirm</button>
            </footer>
        </div>
    )
}
export default Goals;