import React, { useState } from 'react';
import './NewStudentForm.css';

const NewStudentForm = (props) => {
  //const {fullname, setFullName} = useState('');
  //const {email, setEmail} = useState('');

  //another version below for useState, give it a JS object
  //one variable with two fields
  const [student, setStudent] = useState({
    fullName: '',
    email: '',
  });

  //function that gets called everytime they type in this field 
  const onNameChange = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    const newStudent = {
      ...student, //
      fullName: event.target.value,
    }
    //above is the shorthand
    // const newStudent = {
    //   fullName: student.fullName,
    //   email: student.email;
    //   fullName: event.target.value,
    // }
    setStudent(newStudent); //newstudent form got rendered, typing in the browser field, this triggered my onNameChange fx, then hits the setState fx, at this point react updates the state on its own, call newstudent form fx again and rerender the form
  };

  const onEmailChange = (event) => { //this dfx will run when onChange is triggered by entering data in the email field
    const newStudent = { 
      ...student, //
      email: event.target.value, //whatever user typed in here
    }
    setStudent(newStudent); //update the state and redraws the form
  };

  return ( //code below returns the HTML
    <form className="new-student-form">
      <div>
        <label htmlFor="fullName">Name:</label>
        <input 
          name="fullName" 
          value={student.fullName}
          onChange={onNameChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input 
          name="email" 
          value={student.email}
          onChange={onEmailChange}
        />
      </div>
      <input
        type="submit"
        value="Add Student"
      />
    </form>
  );
}

export default NewStudentForm;