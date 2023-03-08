import './Introduce.css'
import { useSelector } from "react-redux"

function Introduce(){
    let page_state = useSelector((state) => { return state } )
    return(
        <div className={"introduce_main " + page_state.btn_state[1]}>
            Information
        </div>
    );
}
export default Introduce;