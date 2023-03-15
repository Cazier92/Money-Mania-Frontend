function ProgressBar(props) {
    const { completed } = props

    const containerStyles = {
        height: 8,
        width: '100%',
        backgroundColor: "#ffffff",
        border: '1px solid #cccccc',
        borderRadius: 50,
        marginTop: 8,
        maxWidth: '100%'
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: '#39c1ff',
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}></div>
        </div>
    )
}

export default ProgressBar