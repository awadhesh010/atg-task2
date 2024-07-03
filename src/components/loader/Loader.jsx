const Loader = ()=>{
    return(
        <div className="loader" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"500px"}}>
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
    )
}
export default Loader;