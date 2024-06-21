import { useEffect, useState } from "react";
import "./App.css";
import { AddUser } from "./components/AddUser";
import { UserList } from "./components/UserList";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [users, setUsers] = useState([]);
  let countS = 50000;
  useEffect(() => {
    axios.get("http://localhost:3004/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const addItem = (obj) => {
    setUsers([...users, obj]);
    toast.success("User added successfully");
  };

  const delHuman = (id) => {
    axios.delete(`http://localhost:3004/users/${id}`).then(() => {
      setUsers(users.filter((elem) => elem.id !== id));
      toast.success("Usery jnjvav cucakic");
    });
  };


  const addSelery = (id) => {
    const user = users.find((user) => user.id === id);
      const updatedUser = { ...user, salary: Number(user.salary) + countS };
      
  
      axios.put(`http://localhost:3004/users/${id}`, updatedUser).then(() => {
        setUsers(users.map((elem) => 
        (elem.id === id ? updatedUser : elem)));
        toast.success("Salary updated successfully");
      });
  };

  return (
    <div className="row">
      <ToastContainer />
      <AddUser onAdd={addItem} />
      <UserList users={users} handleDelete={delHuman} handleUpSelery={addSelery} />
    </div>
  );
}

export default App;
