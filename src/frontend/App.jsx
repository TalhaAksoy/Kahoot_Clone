import React from 'react';
import $ from 'jquery';
import '../style/App.css';
import  { Redirect } from 'react-router-dom';
import isSubmitted from '../variable/isSubmited';
import { Link } from 'react-router-dom';

$(document).ready(function(){
  console.log(window.name);
  $(".theme-picker").change(function(){
    let a = $(".theme-picker").val();
    $(".App").attr("data-theme", a);
  });
  const REACT_VERSION = React.version;
  console.log("React Version :"+REACT_VERSION+"");
});

function App() 
{
  /* Login Kontrol */
  function click()
  {
    window.name = true;
    console.log(window.name);
  }
  return (
    <div className="App w-full h-screen flex" data-theme="dark">
      <div className='sm:w-96 sm:h-96 w-full h-screen m-auto flex'>
        <div className="card sm:w-96 w-full  my-auto bg-base-100 shadow-xl">
          <figure><img src="https://api.lorem.space/image/game?w=400&h=225" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title mx-auto">Tahmin ET!</h2>
            <input type="text" placeholder="Enter Your Name :D" className="input input-bordered w-full max-w-xs" required/>
            <input type="text" placeholder="Enter Login ID" className="input input-bordered w-full max-w-xs" required/>
            <div className="card-actions flex">
              <Link to={"/Main"} className="btn btn-primary w-1/2 loginbtn">Login</Link>
              <div className="form-control w-1/5">
                <div className="input-group">
                  <select className="select select-bordered theme-picker">
                    <option selected>dark</option>
                    <option>cyberpunk</option>  
                    <option>bumblebee</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
