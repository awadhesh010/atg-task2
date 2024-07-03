const Warning = ({error})=>{
    return(
        <div className="container bg-warning color-white p-3 m-5 justify-content-center d-flex rounded">
            <p>Error: {error.message}</p>
        </div>
    )
}
export default Warning;