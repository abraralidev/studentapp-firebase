import { ADD_STUDENT } from "../actions/AddStudent"


const initialState = [
    {
        name:'Anas',  
    },
]

export default function StudentReducer(state=initialState, action) {
    
    let newData = action.payload
    switch (action.type) {

        case ADD_STUDENT:
            return [
                ...state,
                newData
            ]

            
    
        default:
            return state
    }

    // return state
    
}