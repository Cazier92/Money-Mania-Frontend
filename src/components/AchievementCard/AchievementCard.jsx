import ProgressBar from "../ProgressBar/ProgressBar"

const AchievementCard = (props) => {
    const { icon, name, category, threshold, userProfile } = props

    function calculatePercentage(cat, total, user) {
        let percentage = 0
        if (cat === "Personal Finance") { percentage = (user.persFinance / total) * 100 }
        if (cat === "Taxes") { percentage = (user.taxes / total) * 100 }
        if (cat === "Financial Institutions") { percentage = (user.finInst / total) * 100 }
        if (cat === "Economics") { percentage = (user.buisEcon / total) * 100 }
        if (cat === "Insurance") { percentage = (user.insurance / total) * 100 }
        if (cat === "Global Finance") { percentage = (user.stock / total) * 100 }
        if (cat === "Investing") { percentage = (user.investing / total) * 100 }
        if (cat === "Financial History") { percentage = (user.finHistory / total) * 100 }
        if (percentage > 100) { percentage = 100 }
        return Math.round(percentage)
    }

    return (
        <section>
            <img src={icon} alt="icon" />
            <div className="details">
                <div className="score">
                    <h3>{name}</h3>
                    <h3>{calculatePercentage(category, threshold, userProfile)}%</h3>
                </div>
                <p className="how-to-earn">Answer {threshold} questions correctly in <span className="bold">{category}</span></p>
                <ProgressBar completed={calculatePercentage(category, threshold, userProfile)} />
            </div>
        </section>
    )
}

export default AchievementCard