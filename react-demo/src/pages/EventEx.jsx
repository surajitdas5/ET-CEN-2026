function EventEx(){
    function handleClick(){
        console.log("button is clicked")
    }
    return(
        <>
        <button className="btn btn-primary" onClick={handleClick}>Click</button>
        </>
    )
}

export default EventEx;