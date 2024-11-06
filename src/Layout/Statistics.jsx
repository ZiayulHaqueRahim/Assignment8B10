import {Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Statistics = () => {
    return (
        <div>
           
           <div  className="bg-[#9538E2] mx-auto md:container  rounded-lg flex flex-col justify-center items-center">
            <Navbar />
            <div className="flex flex-col gap-5 justify-center items-center py-10 pb-40 ">
                        <h1 className="text-white text-center text-3xl font-bold">Statistics</h1>
                        <p className="text-white text-lg text-center">Explore the latest gadget that take your experience into <br/>
                        a next level and boost up your confidence on the peak...</p>
            </div>
         </div>
         <h1>Statistics</h1>
            <Outlet/>
            <Footer />
        </div>
    );
};

export default Statistics;