import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
    return (
       <div>
             <div  className="bg-[#9538E2] mx-auto md:container  rounded-lg flex flex-col justify-center items-center">
           <Navbar />
           <div className="flex flex-col gap-5 justify-center items-center py-10 pb-40 ">
                    <h1 className="text-white text-center text-3xl font-bold">Dashboard<br/>
                     Gadget Heaven Accesories</h1>
                     <p className="text-white text-lg text-center">Explore the latest gadget that take your experience into <br/>
                     a next level and boost up your confidence on the peak...</p>
                     <div className="flex flex-row gap-10">
                        <Link to='dashboard/cart' className='rounded-3xl p-2 text-center max-w-200 text-white '>Cart</Link>
                        <Link to='dashboard/wishlist' className='text-white rounded-3xl p-2 text-center max-w-200 '>wishlist</Link>
                    </div>
             </div>
        </div>
         <Outlet />

         <Footer/>
       </div>

    );
};

export default Dashboard;