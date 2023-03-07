import './skill.css'
import { useSelector } from "react-redux"
function Skill(){
    let page_state = useSelector((state) => { return state } )
    return(
        <div className={"skill_main"+ page_state.btn_state[3]}>
            Skill
        </div>
    );
}
export default Skill;