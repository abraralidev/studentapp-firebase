export const ADD_STUDENT = "ADD_STUDENT";

export function AddStudent(data) {
    
    return{
        type: ADD_STUDENT,
        payload: data
    }
}