import Main_text1 from './main_text1';
import Main_text2 from './main_text2';
import Main_text3 from './main_text3';
import Main_text4 from './main_text4';
import './text.css'
import { useSelector } from "react-redux"
import { useEffect } from 'react';
function Text(){
    let page_state = useSelector((state) => { return state } )
    useEffect(()=>{

    })
    return(
        <div className={"text_main" + + page_state.btn_state[0]}>
            <Main_text1/>
            <Main_text2/>
            <Main_text3/>
            <Main_text4/>
        </div>
    );
}
export default Text;