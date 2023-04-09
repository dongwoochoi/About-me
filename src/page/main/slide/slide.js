import { useState } from "react";
import { useSelector } from "react-redux"
import ArrowIcon from "../../../util/arrow/arrow";
import ArrowIcon2 from "../../../util/arrow/arrow2";
import "./slide.css"

function Slide(){
    let [tuto, set_tuto] = useState(0);
    let page_state = useSelector((state) => { return state } )
    return(
        <div className={"tuto_main " + page_state.btn_state[0]}>
           <div className="tuto">
            <div className="tuto_container">
              <div className={"tuto1" + " " + "t" + tuto}>
                <h2>1</h2>
                <div className="t_box">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </div>
              <div className={"tuto2" + " " + "t" + tuto}>
                <h2>2</h2>
                <div className="t_box">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </div>
              </div>
              <div className={"tuto3" + " " + "t" + tuto}>
                <h2>3</h2>
                <div className="t_box">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </div>
              </div>
              <div className="tuto_btn">
              <div
                className="main-btns-join"
                onClick={() => {
                  tuto == 0 ? set_tuto(0) : set_tuto(tuto - 1);
                }}
              >
                {" "}
                <ArrowIcon ></ArrowIcon>{" "}
              </div>
              <div
                className="main-btns-join"
                onClick={() => {
                  tuto == 2 ? set_tuto(2) : set_tuto(tuto + 1);
                }}
              >
                {" "}
                <ArrowIcon2 ></ArrowIcon2>{" "}
              </div>
            </div>
            </div>
            
          </div> 
        </div>
    );
}

export default Slide;