import React, {useState} from 'react';
import {InputText} from 'primereact/inputtext';
import styles from './AddNewEmployee.module.scss';
import {Button} from 'primereact/button';

export const AddNewEmployee = ({handleAddEmployee}) => {
  const [employee, setEmployee] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setEmployee(prevState => ({...prevState, [name]: value}))
  };

  return (
      <div className={styles.container}>
        <h3 className="first">Adding new employee:</h3>
        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">Name and Surname</span>
          <InputText placeholder="name" name={'name'} onChange={(e) => handleChange(e)}/>
        </div>

        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">Address</span>
          <InputText placeholder="address" name={'address'} onChange={(e) => handleChange(e)}/>
        </div>

        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">Day of birth</span>
          <InputText placeholder="birth" name={'birth'} onChange={(e) => handleChange(e)}/>
        </div>

        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">Position</span>
          <InputText placeholder="position" name={'position'} onChange={(e) => handleChange(e)}/>
        </div>
        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">Salary</span>
          <InputText placeholder="salary" keyfilter={'pint'} name={'salary'} onChange={(e) => handleChange(e)}/>
        </div>
        <Button label="Save" onClick={() => handleAddEmployee(employee)} />
      </div>
  );
};