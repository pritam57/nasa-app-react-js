import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asteroiddata, asteroidrandom } from "../redux/asteroidactions";
import { useNavigate } from "react-router-dom";
import "./Screen1.css";

const Screen1 = () => {

  let navigates = useNavigate();
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.productData);
  const [show, setshow] = useState(false);
  const [d,setd]=useState(false);
  const [inputfield, setinputfield] = useState(0);

  const  fetchdata = async () => {
  
    // console.log("hello");
   
    dispatch(asteroiddata(inputfield));
    console.log(counter.name + "counter");
    setinputfield(0);
    setshow(false);
  }

  useEffect(()=>{
    if(d===true){
   navigatepage()}
    setd(true);
  },[counter])

  const navigatepage = () => {
    navigates("/screen2")
  }
  
  function fetchdatarandom() {
    console.log("hello");
    dispatch(asteroidrandom());
    navigatepage();
    console.log(counter);
    setshow(false);
  }

  const saveinputfield = (e: any) => {
    console.log(e.target.value);
    setinputfield(e.target.value);
    if (inputfield > 100000) {
      setshow(true)
    }
    if (inputfield < 100000) {
      setshow(false);
    }
   
  }
  

  return (
    <div className="maincomponent">
      <div >
        <div className="topblock">
      <h1 >ASTEROID  APP</h1>
      <input className="inputbox" type="number"  placeholder="Enter Asteroid ID" onChange={saveinputfield}   /> 
      </div>
      <div className="bottomblock">
        <div>
        {show === false ? <button className="btn"  disabled>SUBMIT</button> : null}
        {show === true ? <button className="btn" color="#f194ff"  onClick={fetchdata} >SUBMIT</button> : null}
      </div>
      <div >
        <button  className="button"onClick={fetchdatarandom}>Random Asteroid</button>
      </div>
      </div>
    </div>
    </div>
  )
}


export default Screen1;