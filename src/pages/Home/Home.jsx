import { Link } from "react-router-dom";
import './Home.module.css'
import Banner from "../../components/Banner/Banner";
import PiggyBank from "../../components/PiggyBank/PiggyBank";

const linkStyle = {
    textDecoration: "none",
    color: "black",
};

const Home = ({ currentCategory, handleChangeTrivia, userProfile }) => {
    return (
        <>
            <Banner userProfile={userProfile} />
            <PiggyBank />
            {currentCategory ?
                (<>
                    <h2>Category: {currentCategory}</h2>
                    <div className="home-btn-div">
                        <Link to='/gamepage' style={linkStyle}><button onClick={handleChangeTrivia} className='homeButton'>Continue Trivia</button></Link>
                        <Link to='/categories' style={linkStyle}><button className='homeButton'>Change Category</button></Link>
                    </div>
                </>) : (<div className="home-btn-div">
                    <Link to='/categories' style={linkStyle}><button className='homeButton'>Choose Category</button></Link>
                </div>)}
        </>
    );
}

export default Home;