import styles from './PiggyBank.module.css'

const PiggyBank = (props) => {
    return (
        <div className={styles.pigDiv}>
            <img className={styles.coin} src="../coin.svg" alt="" />
            <img className={styles.pig} src="../pig.svg" alt="" />
        </div>
    )
}

export default PiggyBank