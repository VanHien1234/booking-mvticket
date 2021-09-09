//reducers

import { SET_BANNER } from "redux/types/CarouselType"


const stateDefault = {
    arrImg: [{
        
    }]
}

export const CarouselReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case SET_BANNER :{
            state.arrImg= action.arrImg
            return {... state}
        }
        default: return { ...state }
    }
}