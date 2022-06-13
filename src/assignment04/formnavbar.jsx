import "./form.css"
const Formnavbar = (props) => {
    return (<>
        <div className="navbar">
            <div onClick={() => {
                props.changes(0)
            }} className="fillform"><p>Fill Form</p></div>
            <div onClick={() => {
                props.changes(1)
            }} className="detailspage"><p>Employe Details</p></div>
        </div>
    </>);
}
 
export default Formnavbar;