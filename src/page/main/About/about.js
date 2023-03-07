import './about.css'
import { useSelector } from "react-redux"
function About(){
    let page_state = useSelector((state) => { return state } )
    return(
        <div className={"about_main" + page_state.btn_state[2]}>
            About
        </div>
    );
}
export default About;