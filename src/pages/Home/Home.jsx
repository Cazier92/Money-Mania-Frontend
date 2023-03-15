import { Link } from "react-router-dom";
import './Home.module.css'
import Banner from "../../components/Banner/Banner";
import PiggyBank from "../../components/PiggyBank/PiggyBank";

const linkStyle = {
    textDecoration: "none",
    color: "black",
};

const Home = ({currentCategory, handleChangeTrivia, user, userProfile}) => {
    return (
        <>
            <Banner user={user} userProfile={userProfile}/>
            <PiggyBank />
            {currentCategory ? 
            (<>
            
                <h2>Category: {currentCategory}</h2>
                <div className="home-btn-div">
                    <button onClick={handleChangeTrivia} className='homeButton'><Link to='/gamepage' style={linkStyle}>Continue Trivia</Link></button>
                    <button className='homeButton'><Link to='/categories' style={linkStyle}>Change Category</Link></button>
                </div>
            </>) : (<div className="home-btn-div">
                <button className='homeButton'><Link to='/categories' style={linkStyle}>Choose Category</Link></button>
            </div>)}
        </>
    );
}

export default Home;