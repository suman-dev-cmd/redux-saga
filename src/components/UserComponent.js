import React,{useEffect} from 'react';
import Card from './CardComponent';
import {useSelector,useDispatch} from 'react-redux';
import {getUsers} from '../redux/actions/users';
const UserComponent = () => {
    const dispatch = useDispatch();
    const {users,loading,error} = useSelector(state=>state.users);
    console.log(users);
    useEffect(()=>{
        dispatch(getUsers())
    },[])
    return (
        <>
          {users.length > 0 && users.map(item=>(
            <Card user={item} key={item.id}/> 
          ))}
        </>
    )
}

export default UserComponent
