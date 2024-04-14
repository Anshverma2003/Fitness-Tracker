import Google from '../../Assets/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png'
import facebook from '../../Assets/images.jpg'

const Signup = () => {

    const inputFields = ["First Name", "Last Name", "Email", "Password"];

    return (
        <div className="signup flex flex-col justify-center gap-12">
            <h1 className="text-center font-montserrat text-xl font-semibold">Create an account</h1>

            <div className="flex justify-center">

                <form action="" className="flex flex-col justify-center items-center mx-auto gap-3">
                    {inputFields.map((input, idx) => (
                        <div key={idx} className="flex items-center justify-between" >
                            <input type="text" placeholder={input} className="bg-[#F1F1F1] mb-4 w-343 h-12 rounded-xl outline-blue-300 p-2 pl-4 text-[#7F7F7F] font-montserrat font-semibold text-xs" required />
                        </div>
                    ))}
                    <div className="flex space-x-2">
                        <input type="checkbox" className="w-4 h-4" required />
                        <p className="w-80 h-5 font-montserrat font-medium text-xs">By proceeding, I agree to all <span className="font-montserrat font-medium text-xs text-sky-300">T&C</span> and <span className="font-montserrat font-medium text-xs text-sky-300">Privacy Policy</span> </p>
                    </div>

                    <input type="submit" className="bg-gradient-to-r from-[#7B91FF] to-[#95BEFF] w-343 h-12 rounded-xl mt-16 font-montserrat font-semisolid text-base text-[#FFFFFF]" />
                </form>

            </div>
            <div className="flex items-center">
                <hr className="flex-1 bg-[#7F7F7F] w-40 border" />
                <span className="mx-4 font-montserrat font-medium text-xs">Or</span>
                <hr className="flex-1 bg-[#7F7F7F] w-40 border" />
            </div>

            <div className="flex justify-center gap-4">
                <button className=" text-white py-2 px-4 rounded-lg flex items-center gap-2 border border-gray-400 ">
                    <img src={Google} alt="" className='w-24' />
                </button>
                <button className="text-white py-2 px-4 rounded-lg flex items-center gap-2 border border-gray-400 ">
                    <img src={facebook} alt="" className='w-24' />
                </button>
            </div>
        
            <p className='font-montserrat font-medium text-xs text-center text-[#2C2B2B]'>Already have an account? <button className='text-blue-400'>Login</button> </p>


        </div>
    );
};

export default Signup;
