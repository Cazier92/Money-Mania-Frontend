import styles from './Banner.module.css'
const Banner = (props) => {
    return (
        <main>
            <div className={styles.circle}>
            </div>
                <h2>Money Mania</h2>
                <p className={styles.firstp}>Welcome back, </p>
                <p className={styles.secondp}>{props.user}</p>
        </main>
    )
}

export default Banner