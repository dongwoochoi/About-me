import './main.css';
import Text from './Text/Text';
import About from './About/about';
import Skill from './skill/skill';
import Activities from './Activities/Activities';
import Introduce from './Introduce/Introduce';
import { useState } from 'react';
function Main(){
    return(
        <div className="main_main">
            <Text></Text>
            <Introduce></Introduce>
            <About></About>
            <Skill></Skill>
            <Activities></Activities>
        </div>
    );
}
export default Main;