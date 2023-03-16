import { Link } from 'react-router-dom'

import styles from './Landing.module.css'

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Money Mania</h1>
      {user ?  
      <h1>Welcome back {user.name}</h1>
      : 'Sign-in to play'}
      {user ? 
      <>
        <div>
          <button className={styles.playBtn}><Link to='/home' style={linkStyle}>Play</Link></button>
        </div>
      </> 
      : 
      <>
        <div className={styles.signupLoginBtns}>
          <button className={styles.signupBtn}><Link to='/signup' style={linkStyle}>Sign Up</Link></button>
          <button className={styles.loginBtn}><Link to='/login' style={linkStyle}>Log In</Link></button>
        </div>
      </>}
    </main>
  )
}

export default Landing
