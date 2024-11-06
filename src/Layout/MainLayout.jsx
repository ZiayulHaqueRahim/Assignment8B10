import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";


const MainLayout = () => {



    return (
        <div>
          <Header />

           <div className="min-h-[100px] md:container mx-auto">
                
                <Outlet />
           </div>
           
           



           <Footer />
        </div>
    );
};

export default MainLayout;