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
        <div class="container my-12 mx-auto px-4 md:px-12">
          <div class="flex flex-wrap -mx-1 lg:-mx-4">
            {users.length > 0 && users.map(item=>(
              <Card user={item} key={item.id}/> 
            ))}
          </div>
        </div>
        </>
    )
}

export default UserComponent
