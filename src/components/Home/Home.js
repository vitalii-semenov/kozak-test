import React, { useState, useEffect, createRef } from 'react';
import styles from './Home.module.scss';
import { Header } from '../Header/Header';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {AddNewEmployee} from './AddNewEmployee/AddNewEmployee';

export const Home = ({users}) => {

  const [addNewVisibility, setAddNewVisibility] = useState(false);
  const [staff, setStaff] = useState([]);
  const [cloneStaff, setCloneStaff] = useState([]);
  useEffect(() => {
    setStaff(users)
  }, [users]);

  const onEditorValueChangeForRowEditing = (props, value) => {
    let updatedStaff = [...props.value];
    updatedStaff[props.rowIndex][props.field] = value;
    setStaff(updatedStaff);
  };

  const onRowEditInit = (event) => {
    setCloneStaff(prevState => ({...prevState, [event.data.id]: {...event.data}}));
  };

  const editorForRowEditing = (props, field) => {
    return <InputText type="text" value={props.rowData[field]} onChange={(e) => onEditorValueChangeForRowEditing(props, e.target.value)} />;
  };

  const onRowEditSave = (event) => {
    // setCloneStaff([])
  };

  const onRowEditCancel = (event) => {
    let staffFromState = [...staff];
    staffFromState[event.index] = cloneStaff[event.data.id];
    setStaff(staffFromState);
  };

  const onRowEditDelete = (event) => {
    const filteredStaff = [...staff].filter((el) => el.id !== event.id);
    setStaff(filteredStaff);
  };

  const handleAddEmployee = (data) => {
    setAddNewVisibility(false)
    console.log('Added user', data);
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
          <Column style={{width: '5%'}}  field="id" header="Id" />
          <Column field="name" header="Name" editor={(props) => editorForRowEditing(props, 'name')} />
          <Column field="surname" header="Surname" editor={(props) => editorForRowEditing(props, 'surname')} />
          <Column style={{width: '50%'}} field="desc" header="Description" editor={(props) => editorForRowEditing(props, 'desc')} />
          <Column rowEditor={true} style={{'width': '70px', 'textAlign': 'center'}} />
          <Column style={{'width': '70px', 'textAlign': 'center'}}
                  body={(e) => <button onClick={() => onRowEditDelete(e)}>Delete</button>} />
        </DataTable>
      </div>
  );
};
