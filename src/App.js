import { React, useEffect, useState } from 'react';
import './App.css'
import { errorArray, generateError } from './Utils';
import Iframe from './Components/Iframe';
import Stars from './Components/Stars';
import LoginForm from './Components/LoginForm';
import Activity from './Components/Activity';

const ErrorSimulator = () => {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    alert(`User ${active ? "Login" : "Logout"} Succesfully`)
    setActive(!active);
  };

  // Random Checkbox Selection, Select All amd Deselect All

  // const [selected, setSelected] = useState([]);
  // const isAllSelected = errorArray?.length > 0 && errorArray?.length === selected?.length;

  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   console.log(value);

  //   if (value === "all") {
  //     setSelected(selected.length === errorArray.length ? [] : errorArray);
  //     return;
  //   }

  //   const newSelected = [...selected];
  //   const index = selected.indexOf(value);

  //   if (index > -1) {
  //     newSelected.splice(index, 1);
  //   } else {
  //     newSelected.push(value);
  //   }

  //   setSelected(newSelected);
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const newSelected = [...selected];
  //     const randomIndex = Math.floor(Math.random() * errorArray.length);
  //     const value = errorArray[randomIndex];

  //     if (newSelected.includes(value)) {
  //       newSelected.splice(newSelected.indexOf(value), 1);
  //     } else {
  //       newSelected.push(value);
  //     }

  //     setSelected(newSelected);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   }
  // }, [errorArray, selected]);

  // useEffect(() => {
  //   setInterval(() => {
  //     const randomNumber = Math.floor(Math.random() * 11 + 1)
  //     const e = {
  //       target : {
  //         value : errorArray[randomNumber]
  //       }
  //     }
  //     generateError(e)
  //     generateError(e)
  //     generateError(e)
  //     generateError(e)
  //     generateError(e)
  //     generateError(e)
  //     generateError(e)
  //     generateError(e)
  //     generateError(e)

  //   }, 0.001);
  // },[])

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center' }}>

        {/* <div className='checkbox-for-p0'>
          <input type='checkbox' onClick={handleChange} value='all' checked={isAllSelected} />All
          {errorArray.map((i, index) =>
            <div>
              <input type="checkbox" onClick={handleChange} checked={selected.indexOf(i) > -1} value={i} />{i}
            </div>
          )}
        </div> */}
      
      </div>
      {/* <Stars /> */}
      <h1 style={{ color: 'white' }}>ERROR GENERATOR</h1>
      {/* <form>
          <input type="text" placeholder='Enter text' />
        <button type="button" className='button' style={{ marginLeft: '10px'}} onClick={handleClick}> {active ? "Login" : "Logout"} </button>
      </form> */}

      <LoginForm />

      <div className="errors">
        {errorArray.map((i, index) =>
          <button type="button" onClick={generateError} className='button-29' key={index} value={i}>{i}</button>
        )}
      </div>
      {/* <Iframe /> */}

      <Activity/>

    </div>
  )
};

export default ErrorSimulator;