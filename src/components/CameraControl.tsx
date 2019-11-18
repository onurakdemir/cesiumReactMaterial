import React from 'react';
import render from 'react-dom';
import { Formik, Field, Form} from 'formik';
import '../style/skeleton.css';
import '../style/main.css';
import {CameraProps} from '../interfaces/Interfaces';



 const CameraControl: React.SFC<CameraProps> = (props) => {
  return <h1>Hello, {props.yaw}</h1>;
 }

// const CameraControl: React.SFC<CameraProps> = (props) => {
//   <div>
//     <h1>Signup</h1>
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//       }}
//       onSubmit={(values: Values) => {
        
//       }}
//       render={() => (
//         <Form>
//           <label htmlFor="firstName">First Name</label>
//           <Field id="firstName" name="firstName" placeholder="John" />

//           <label htmlFor="lastName">Last Name</label>
//           <Field id="lastName" name="lastName" placeholder="Doe" />

//           <label htmlFor="email">Email</label>
//           <Field id="email" name="email" placeholder="john@acme.com" type="email" />

//           <button type="submit">Submit</button>
//         </Form>
//       )}
//     />
//   </div>
// );

export default CameraControl;