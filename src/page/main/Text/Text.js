import Main_text1 from './main_text1';
import Main_text2 from './main_text2';
import Main_text3 from './main_text3';
import Main_text4 from './main_text4';
import './text.css'
function Text(){
    return(
        <div className="text_main">
            <Main_text1/>
            <Main_text2/>
            <Main_text3/>
            <Main_text4/>
        </div>
    );
}
export default Text;