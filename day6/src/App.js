import React, { useState } from 'react';
import './App.css';
import 'h8k-components';
import UserList from './components/UserList';
import AddEditUser from './components/AddEditUser';

const title = 'User Management';

const App = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleAddEditUser = (user) => {
        if (selectedUser !== null) {
            const updatedUsers = users.map((u, index) =>
                index === selectedUser ? user : u
            );
            setUsers(updatedUsers);
        } else {
            setUsers([...users, user]);
        }
        setSelectedUser(null);
    };

    const handleEditUser = (index) => {
        setSelectedUser(index);
    };

    const handleDeleteUser = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
    };

    const handleCancelEdit = () => {
        setSelectedUser(null);
    };

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className='layout-row justify-content-center mt-100'>
                <div className='w-60 mr-75'>
                    <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
                </div>
                <div className='layout-column w-40'>
                    <AddEditUser
                        selectedUser={selectedUser !== null ? users[selectedUser] : null}
                        onAddEditUser={handleAddEditUser}
                        onCancel={handleCancelEdit}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
