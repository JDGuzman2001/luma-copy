import Luma_Image from '../../assets/images/Luma_Image.png'
import { NavLink } from "react-router-dom"
import Navbar from '../../Components/Navbar'
import './Home.css'

function Home() {
    return (
        
        <div className="bg-cover bg-center h-screen flex items-center justify-center">
            <Navbar/>
            <div className="flex flex-row items-center justify-center w-full">
                <div className="flex flex-col items-start justify-center mr-10">
                <p className="text-2xl font-light text-white/60 text-left mb-5">luma</p>
                <h1 className="text-4xl text-white font-semi-bold text-left ">Delightful</h1>
                <h1 className="text-4xl text-white font-semi-bold text-left">events</h1>
                <h1 className="text-4xl text-white font-semi-bold text-left mb-5">start here.</h1>
                <p className="text-x1 font-light text-white text-left">Set up a event page, invite friends and sell</p>
                <p className="text-x1 font-light text-white text-left mb-10">tickets. Host a memorable event today</p>
                <NavLink 
                    to='/sign-in'
                    className="bg-white text-black font-bold py-2 px-4 rounded-lg"
                    >Sign In
                </NavLink>
                </div>
                <img src={Luma_Image} alt="Luma" className="w-200 h-200" />
            </div>
        </div>
    )
  }
  
  export default Home