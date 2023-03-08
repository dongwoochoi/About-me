import './Activities.css'
import { useSelector } from "react-redux"
function Activities(){
    let page_state = useSelector((state) => { return state } )
    return(
        <div className={"activities_main "+ page_state.btn_state[4]}>
            Activities
        </div>
    );
}
export default Activities;