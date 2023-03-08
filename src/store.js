import { configureStore, createSlice } from '@reduxjs/toolkit'

let btn_state = createSlice({
    name : 'about_state',
    initialState : ["active","off","off","off","off"],
    reducers : {
      //changeName은 마음대로 작명 가능
      Home_on(state){
        return ["active","off","off","off","off"]
      },
      Introduce_on(state){
        return ["off","active","off","off","off"]
      },
      About_on(state){
        return ["off","off","active","off","off"]
      },
      Skill_on(state){
        return ["off","off","off","active","off"]
      },
      Activities_on(state){
        return ["off","off","off","off","active"]
      }
    }
  })

export let {Home_on, Introduce_on, About_on, Skill_on, Activities_on} = btn_state.actions

export default configureStore({
  reducer: { 
    btn_state : btn_state.reducer
  }
})