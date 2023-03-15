import styles from './Banner.module.css'
const Banner = ({user, userProfile}) => {
    return (
        <main>
            {/* <div className={styles.circle}>
            </div> */}
                <h2>Money Mania</h2>
                <p className={styles.firstp}>Welcome back, </p>
                {userProfile.name ? (<>
                <p className={styles.secondp}>{userProfile.name}</p>
                </>) : (<></>)}
        </main>
    )
}

export default Banner