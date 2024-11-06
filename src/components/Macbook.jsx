import { Link } from "react-router-dom";


const Macbook = () => {
    return (
        <div>
            <div className="flex flex-col">
            <h1 className="text-2xl font-bold py-10 text-center">Explore Cutting-Edge Gadgets</h1>
            <div className="flex flex-row max-w-full justify-between gap-5">
                <div className="flex flex-col gap-5 max-w-[2/6] p-3 rounded-xl bg-slate-100 px-3">
                    <Link to='/all'  className="btn btn-outline">All Products</Link>
                    <Link to='/laptop' className="btn btn-outline btn-primary">Laptops</Link>
                    <Link to='/phone' className="btn btn-outline btn-secondary">Phones</Link>
                    <Link to='/accesory' className="btn btn-outline btn-accent">Accesories</Link>
                    <Link to='/watch' className="btn btn-outline">SmartWatches</Link>
                    <Link to="/mac" className="btn btn-outline btn-primary">MacBook</Link>
                    <Link to='/iphone' className="btn btn-outline btn-secondary">Iphone</Link>
                  
                </div>
                <div className="grid grid-cols-3  rounded-xl max-w-[4/6 bg-pink-800 px-3">
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>kffffffffffffffhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                    <h2>dhjfjhfhj</h2>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Macbook;