import React, { useState, useEffect } from 'react';

const REGEX_PATTERN = {
    regexMobileNumber: /^[1-9]{1}[0-9]{9}$/,
};

function AddEditUser({ selectedUser, onAddEditUser, onCancel }) {
    const [user, setUser] = useState({ firstName: '', lastName: '', phone: '' });
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (selectedUser) {
            setUser(selectedUser);
        } else {
            setUser({ firstName: '', lastName: '', phone: '' });
        }
    }, [selectedUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const validateForm = () => {
        const { firstName, lastName, phone } = user;
        return (
            firstName &&
            lastName &&
            REGEX_PATTERN.regexMobileNumber.test(phone)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onAddEditUser(user);
            setUser({ firstName: '', lastName: '', phone: '' });
            setShowAlert(false);
        } else {
            setShowAlert(true);
        }
    };

    const handleCancel = () => {
        if (!user.firstName && !user.lastName && !user.phone) {
            return;
        }
        setUser({ firstName: '', lastName: '', phone: '' });
        setShowAlert(false);
        onCancel();
    };

    return (
        <section>
            <div className='pa-30'>
                <form onSubmit={handleSubmit} noValidate='noValidate'>
                    <div className='layout-column mb-15'>
                        <label htmlFor='firstName' className='mb-3'>First Name</label>
                        <input type='text' placeholder='Enter first name'
                            name='firstName'
                            value={user.firstName}
                            onChange={handleChange}
                            required data-testid='firstNameInput' />
                    </div>
                    <div className='layout-column mb-15'>
                        <label htmlFor='lastName' className='mb-3'>Last Name</label>
                        <input type='text' placeholder='Enter last name'
                            name='lastName'
                            value={user.lastName}
                            onChange={handleChange}
                            required data-testid='lastNameInput' />
                    </div>
                    <div className='layout-column mb-15'>
                        <label htmlFor='phone' className='mb-3'>Phone Number</label>
                        <input type='number' placeholder='Enter phone number'
                            name='phone'
                            value={user.phone}
                            onChange={handleChange}
                            required data-testid='phoneInput' />
                    </div>
                    {showAlert && (
                        <div className='alert error mb-30' data-testid='validationAlert'>
                            Error: All fields are mandatory. And phone number to be of 10 digits.
                        </div>
                    )}
                    <div className='layout-row justify-content-end'>
                        <button type='button' className='' data-testid='cancelEditUserButton' onClick={handleCancel}>
                            Cancel
                        </button>
                        <button type='submit' className='mx-0' data-testid='addEditButton'>
                            Add/Edit User
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default AddEditUser;
