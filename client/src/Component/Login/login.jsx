import Google from '../../Assets/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png'
import facebook from '../../Assets/images.jpg'
import showImage from '../../Assets/392505_eye_preview_see_seen_view_icon.png'
import hideImage from '../../Assets/8666649_eye_off_icon.png'
import { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useHistory();


    function handleClick(e) {
        setShowPassword(!showPassword);
    }

    function handleSubmit(e) {
        e.preventDefault();
        navigate.push('/goals')
    }


    return (
        <div className="login">
            <div className="signup flex flex-col justify-center gap-12">

                <h1 className="text-center font-montserrat text-xl font-semibold ">Welcome Back</h1>

                <div className="flex justify-center">

                    <form action="" className="flex flex-col justify-center items-center mx-auto gap-3" onSubmit={handleSubmit}>

                        <div className="flex items-center justify-between" >
                            <input type="email" placeholder='Email' className="bg-[#F1F1F1] mb-4 w-343 h-12 rounded-xl outline-blue-300 p-2 pl-4 text-[#7F7F7F] font-montserrat font-semibold text-xs" required />
                        </div>
                        <div className="flex items-center justify-between relative" >
                            <input type={showPassword ? "text" : "password"} placeholder='Password' className="bg-[#F1F1F1] mb-4 w-343 h-12 rounded-xl outline-blue-300 p-2 pl-4 pr-12 text-[#7F7F7F] font-montserrat font-semibold text-xs" required />
                            <img src={showPassword ? showImage : hideImage} alt="" className='absolute right-0 top-0 bottom-4 m-auto h-8 px-3 cursor-pointer ' onClick={handleClick} />
                        </div>


                        <div className="flex space-x-2">
                            <p className="w-80 h-4 font-montserrat font-medium text-xs cursor-pointer text-[#7F7F7F]">Forgot your password?</p>
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

                <a href="/signup"><p className='font-montserrat font-medium text-xs text-center text-[#2C2B2B]'>Don’t have an account yet? <button className='text-blue-400'>Create an account</button> </p></a>


            </div>
        </div>
    )
};

export default Login;