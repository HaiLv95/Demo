import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState, useEffect } from "react";
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Routes from './component/Routes';
import { getAll } from './api/call-api';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      // call dữ liệu từ api => chuyển dữ liệu sang duôi ".json" => truyền dữ liệu vào user
      //  fetch('https://6156c5bce039a0001725abbf.mockapi.io/users')
      // .then(response => response.json())
      // .then(data => setUsers(data));
      //cal api bằng axios
      getAll().then(response => setUsers(response.data));
    } catch (error) {
      console.log(error);
    }
  }, []); 
  //Lưu ý: tên biến trong hàm onHandleAdd không được trung với tên state (users)
  const onHandleAdd = (user) =>{
        setUsers([...users, user]);
  }
  const onHandleDelete = (id) => {
    const rsDelete = users.filter((user) => user.id != id);
    setUsers(rsDelete);
  }
  const onHandleEdit = (data)  =>{
   const newUsers = users.map((user) => user.id === data.id ? data : user);
    setUsers(newUsers);
  }
  return (
    <div className="App">
      {/* truyền users xuống component con*/}
       <Routes users={users}
            onAdd={onHandleAdd}
            onDelete = {onHandleDelete}
            onEdit= {onHandleEdit}
       />
    </div>
  );
}

export default App;
