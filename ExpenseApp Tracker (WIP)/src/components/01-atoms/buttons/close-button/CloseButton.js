function CloseButton({onClick}) {
    return (
        <div className="close-button--container">
            <button className="close-button" onClick={onClick}>x</button>
        </div>
    )
}
export default CloseButton