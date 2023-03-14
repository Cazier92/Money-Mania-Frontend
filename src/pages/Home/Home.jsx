import Banner from "../../components/Banner/Banner";
import PiggyBank from "../../components/PiggyBank/PiggyBank";

const Home = () => {
    return (
        <>
            <Banner />
            <PiggyBank />
            <button>Continue Trivia</button>
            <button>Change Category</button>
        </>
    );
}

export default Home;