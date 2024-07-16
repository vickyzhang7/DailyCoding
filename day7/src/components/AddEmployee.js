import React, { Fragment, useState } from 'react';

const AddEmployee = ({ onAddEmployee }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    validateForm(e.target.value, position, salary);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
    validateForm(name, e.target.value, salary);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
    validateForm(name, position, e.target.value);
  };

  const validateForm = (name, position, salary) => {
    if (name && position && salary) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  };

  const handleAddEmployee = () => {
    if (isButtonEnabled) {
      onAddEmployee(name, position, salary);
      setName('');
      setPosition('');
      setSalary('');
      setIsButtonEnabled(false);
    }
  };

  return (
    <Fragment>
      <td className='pl-30'>
        <input
          data-testid='new-employee-name-input'
          placeholder='Enter Name'
          value={name}
          onChange={handleNameChange}
        />
      </td>
      <td className='pl-20'>
        <input
          data-testid='new-employee-position-input'
          placeholder='Enter Position'
          value={position}
          onChange={handlePositionChange}
        />
      </td>
      <td className='pl-20'>
        <input
          data-testid='new-employee-salary-input'
          type='number'
          placeholder='Enter Salary'
          value={salary}
          onChange={handleSalaryChange}
        />
      </td>
      <td className='pl-20'>
        <button
          data-testid='add-new-employee-button'
          className='x-small w-75 ma-0 px-25'
          onClick={handleAddEmployee}
          disabled={!isButtonEnabled}
        >
          Add
        </button>
      </td>
    </Fragment>
  );
};

export default AddEmployee;
