const Banner = (props) => {
    return (
        <>
        <h2>Money Mania</h2>
            {user ?
                <ul>
                    <li>Welcome, {user.name}</li>
                    <li><Link to="/profiles">Profiles</Link></li>
                    <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
                    <li><Link to="/change-password">Change Password</Link></li>
                </ul>
                :
                <ul>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            }
        </>
    )
}

export default Banner