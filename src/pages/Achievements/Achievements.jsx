import AchievementCard from "../../components/AchievementCard/AchievementCard";
import './Achievements.css'

const Achievements = (props) => {
    const { userProfile } = props

    const achievements = [
        {
            icon: "",
            name: "US Dollar",
            category: "Personal Finance",
            threshold: 10
        },
        {
            icon: "",
            name: "European Euro",
            category: "Taxes",
            threshold: 10
        },
        {
            icon: "",
            name: "Japanese Yen",
            category: "Investing",
            threshold: 10
        },
        {
            icon: "",
            name: "British Pound",
            category: "Global Finance",
            threshold: 10
        }
    ]

    function sumAchievements(data) {
        let currencies = 0
        if (data.persFinance >= 10) { currencies += 1 }
        if (data.buisEcon >= 10) { currencies += 1 }
        if (data.investing >= 10) { currencies += 1 }
        if (data.taxes >= 10) { currencies += 1 }
        if (data.finHistory >= 10) { currencies += 1 }
        if (data.insurance >= 10) { currencies += 1 }
        if (data.stock >= 10) { currencies += 1 }
        if (data.finInst >= 10) { currencies += 1 }
        return currencies
    }

    return (
        <>
            <h1>Achievements</h1>
            <p className="achievement-total">{sumAchievements(userProfile)}/180</p>
            {achievements.map((achievement, idx) => <AchievementCard icon={achievement.icon} name={achievement.name} category={achievement.category} threshold={achievement.threshold} key={idx} userProfile={userProfile} />)}
        </>
    );
}

export default Achievements;