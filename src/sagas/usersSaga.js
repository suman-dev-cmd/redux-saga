import {call,put,takeEvery} from 'redux-saga/effects';
const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const getAPI =()=>{
    return fetch(apiUrl,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }).then(response=>response.json())
    .catch((error)=>{throw error})
}

function* fetchUsers(action){
    try{
        const users = yield call(getAPI);
        yield put({type:'GET_USERS_SUCCESS',users:users});
    }catch(e){
        yield put({type:'GET_USERS_FAILED',message:e.message});
    }
}

function* userSaga(){
    yield takeEvery('GET_USER_REQUESTED',fetchUsers);
}

export default userSaga;