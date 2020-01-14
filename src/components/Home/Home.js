import React, { useState, useEffect, createRef } from 'react';
import styles from './Home.module.scss';
import { Header } from '../Header/Header';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {AddNewEmployee} from './AddNewEmployee/AddNewEmployee';

export const Home = ({usersAll, handleAddNewEmployee, handleEditEmployee, handleDeleteEmployee}) => {

  const [addNewVisibility, setAddNewVisibility] = useState(false);
  const [staff, setStaff] = useState([]);
  const [cloneStaff, setCloneStaff] = useState([]);
  useEffect(() => {
    setStaff(usersAll.staff)
  }, [usersAll]);

  const onEditorValueChangeForRowEditing = (props, value) => {
    let updatedStaff = [...props.value];
    updatedStaff[props.rowIndex][props.field] = value;
    setStaff(updatedStaff);
  };

  const onRowEditInit = (event) => {
    const id = staff.findIndex(el => el._id === event.data._id)
    setCloneStaff(prevState => ({...prevState, [id]: {...event.data}}));
  };

  const editorForRowEditing = (props, field) => {
    return <InputText type="text" value={props.rowData[field]} onChange={(e) => onEditorValueChangeForRowEditing(props, e.target.value)} />;
  };

  const onRowEditSave = (event) => {
    handleEditEmployee(event.data);
  };

  const onRowEditCancel = (event) => {
    let staffFromState = [...staff];
    staffFromState[event.index] = cloneStaff[event.data._id];
    setStaff(staffFromState);
  };

  const onRowEditDelete = (event) => {
    handleDeleteEmployee(event);
  };

  const handleAddEmployee = (data) => {
    setAddNewVisibility(false);
    handleAddNewEmployee(data);
  };

  return (
      <div className={styles.container}>
        <Header />
        <Button label="Add new" onClick={() => setAddNewVisibility(!addNewVisibility)} />
        {addNewVisibility && <AddNewEmployee handleAddEmployee={handleAddEmployee}/>}
        <DataTable value={staff} editMode={'row'} paginator={true} rows={5}
                   onRowEditInit={onRowEditInit}
                   onRowEditSave={onRowEditSave}
                   onRowEditCancel={onRowEditCancel}>
          <Column field="_id" header="Id" />
          <Column field="name" header="Name" editor={(props) => editorForRowEditing(props, 'name')} />
          <Column field="birth" header="Birthday" editor={(props) => editorForRowEditing(props, 'birth')} />
          <Column field="salary" header="Salary" editor={(props) => editorForRowEditing(props, 'salary')} />
          <Column rowEditor={true} style={{'width': '70px', 'textAlign': 'center'}} />
          <Column style={{'width': '70px', 'textAlign': 'center'}}
                  body={(e) => <button onClick={() => onRowEditDelete(e)}>Delete</button>} />
        </DataTable>
      </div>
  );
};
