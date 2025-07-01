import { useState } from "react";
import "./Header.css";
// import hamburger from "../../assets/hamburger.png";


const Header = ()=>{
const[counter,setCounter]=useState(0);
const[show,setShow]=useState(false);

const increaseCounter = () => {
    setCounter(counter + 4);
}
const decreaseCounter=()=>{
    setCounter(counter-1);
}
const showNum=()=>{
    setShow(true)

}




    return(
        // <div className="main">
        //         <div className="nav1">
        //             <div className="responsive">
        //                 <a href="" className="logo">snap</a>
        //                 <img src={hamburger} alt="" className="hamburger" />
        //             </div>
        //             <div className="nav-links">
        //                 <a href="">Features </a>
        //                 <a href="">Company</a>
        //                 <a href="">Career </a>
        //                 <a href="">About</a>
        //             </div>
                 
                    
        //     </div>
            
        //     <div className="nav2">
        //         <a href="">Login</a>
        //         <button>Register</button>
        //     </div>
            
               
        // </div>
        
            <div>
            <h1>counter value:{counter}</h1>
             <button onClick={increaseCounter}>
                increase
            </button>

            <button onClick={decreaseCounter}>
                decrease
            </button>
            <button onClick={showNum}>
                show
            </button>
            <div>
                {Math.sqrt(counter)}
            </div>
            </div>
        




        
    )
}
export default Header;