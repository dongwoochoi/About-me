import { configureStore, createSlice } from '@reduxjs/toolkit'

let btn_state = createSlice({
    name : 'about_state',
    initialState : ["active","","","",""],
    reducers : {
      //changeName은 마음대로 작명 가능
      Home_on(state){
        return ["active","","","",""]
      },
      Introduce_on(state){
        return ["","active","","",""]
      },
      About_on(state){
        return ["","","active","",""]
      },
      Skill_on(state){
        return ["","","","active",""]
      },
      Activities_on(state){
        return ["","","","","active"]
      }
    }
  })

export let {Home_on, Introduce_on, About_on, Skill_on, Activities_on} = btn_state.actions

export default configureStore({
  reducer: { 
    btn_state : btn_state.reducer
  }
})