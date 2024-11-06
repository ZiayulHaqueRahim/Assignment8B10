
import { Link } from "react-router-dom";
import '../../public/data.json'
import { useEffect, useState } from "react";
import SinglProduct from "./SinglProduct";
const  Products = () => {

   
    const [products,setProducts] = useState([]);

    useEffect(() =>{
        fetch('../../public/data.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
        
        
    },[])
  






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
                <div className="grid grid-cols-3  rounded-xl max-w-[4/6] px-3  bg-slate-100 gap-5 p-2">
                       {
                        products.map(product => <SinglProduct product={product} key={product.product_id}></SinglProduct>)
                       }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Products;