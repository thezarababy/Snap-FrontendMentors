import "./Hero.css";
import  bg  from"../../assets/bg.png";
import databiz from "../../assets/databiz.png";
import audip from "../../assets/audip.png";
import meet from "../../assets/meet.png";
import maker from "../../assets/maker.png";
const Hero = ()=>{
    return(
        <div className="main2">
            <div className="hero-text"> 
                <h1>
                   Make <br /> remote work
                </h1>
                <p>
                    Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
                     </p>
                <button className="btn2">Learn more</button>

                    <div className="tools">
                    <img src={databiz} alt="databiz" className="tools-img" />
                    <img src={audip} alt="audip" className="tools-img" />
                    <img src={meet} alt="meet" className="tools-img" />
                    <img src={maker} alt="maker" className="tools-img" />
                    </div>
            </div>

            <div className="hero-image">
                <img src={bg} alt="" className="bg" />
            </div>
        </div>
    )
}
export default Hero;