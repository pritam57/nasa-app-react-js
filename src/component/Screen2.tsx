import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Screen2.css";

const Screen2 = () => {


  const [ft, st] = useState(false);
  const [show, setshow] = useState(false);
  const fetchdata = useSelector((state: any) => state.productData);
  var p = "";

  useEffect(() => {
    if (fetchdata.length!==0) {
      setshow(true);
    }
    st(true);
  }, [fetchdata]);

  if (fetchdata.length !== 0) {
    var t: Boolean = fetchdata.is_sentry_object;
    p = t.toString();

  }


  return (
    <div >
      {show === false ? <div>
        <h1>loading...</h1>
      </div> : null}
      {show === true ? <div className="main">
        <div className="middle">
        <h1 className="heading" >name : </h1>
        <h1 className="answer" >{fetchdata.name}</h1>
        </div>
        <div className="middle">
        <h1 className="heading" >nasa_jpl_url : </h1>
        <h1 className="answer" > {fetchdata.nasa_jpl_url}</h1>
        </div>
        <div className="middle">
        <h1 className="heading" >fetchdata.is_potentially_hazardous_asteroid :</h1>
        <h1 className="answer" >{p}</h1>
        </div>
      </div> : null}
    </div>
  )
}


export default Screen2;