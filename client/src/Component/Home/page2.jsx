import pic1 from '../../Assets/dbf14a6d26ec54e2ba9e71eaef184f6b.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Page2 = () => {
    return (
        <div className="home flex flex-col justify-end">
            <div className="flex justify-end mb-4 ">
                <div className="flex items-center">
                    <a href="/signup" className="text-[#9FB2FF] underline font-medium font-montserrat">Skip</a>
                </div>
            </div>
            <div className='flex justify-center mb-16'>
                <img src={pic1} alt="Image" className="w-96 h-60" />
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-col justify-left space-y-3'>
                    <span className='font-montserrat font-semibold text-xl w-40'>Get Burn</span>
                    <p className='text-[#787878] font-medium font-montserrat leading-5 text-xs'>Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
                </div>
            </div>
            <div className="fixed inset-x-0 bottom-0 flex justify-center mb-4 mt-4 mt-16" style={{ marginLeft: '60%' }}>
                <footer className="w-20 h-20 flex justify-center items-center border-2 border-indigo-200 border-t-indigo-500 border-r-indigo-500 border-b-indigo-500 border-l-white rounded-full">
                    <button className="w-16 h-16 rounded-full bg-gradient-to-r from-[#cfc5c5] to-[#6b88ff] text-3xl text-[#fff]">
                        <Link to="/signup">&gt;</Link>
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default Page2;
