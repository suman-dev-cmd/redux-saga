import * as type from '../types';

export const getUsers =(users)=>{
    console.log(users)
    return{
        type:type.GET_USER_REQUESTED,
        payload:users,
    }
}