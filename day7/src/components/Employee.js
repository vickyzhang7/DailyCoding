import React, { Fragment, useState } from 'react';

const Employee = ({ employee, idx }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [salary, setSalary] = useState(employee.salary);
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);

  const handleSalaryClick = () => {
    setIsEditing(true);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
    if (e.target.value !== employee.salary.toString()) {
      setIsSaveEnabled(true);
    } else {
      setIsSaveEnabled(false);
    }
  };

  const handleSave = () => {
    if (isSaveEnabled) {
      employee.salary = Number(salary);
      setIsEditing(false);
      setIsSaveEnabled(false);
    }
  };

  return (
    <Fragment>
      <td>{employee.name}</td>
      <td className='pl-20'>{employee.position}</td>
      <td className='pl-20'>
        {!isEditing ? (
          <div
            data-testid={'employee-salary-div-' + idx}
            onClick={handleSalaryClick}
          >
            {employee.salary}
          </div>
        ) : (
          <input
            data-testid={'employee-salary-input-' + idx}
            type='number'
            value={salary}
            onChange={handleSalaryChange}
          />
        )}
      </td>
      <td className='pl-20'>
        <button
          className='x-small w-75 ma-0 px-25'
          data-testid={'employee-save-button-' + idx}
          onClick={handleSave}
          disabled={!isSaveEnabled}
        >
          Save
        </button>
      </td>
    </Fragment>
  );
};

export default Employee;
