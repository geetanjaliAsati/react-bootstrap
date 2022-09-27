import React from 'react'
// import './alert.css';
function Alert(props) {
  const styling = {
    backgroundColor: "#0c4c37",
    color: "#00ff00",
    textAlign: "center",
    boxSizing: "border-box",
    padding: "7px",
    // position: "relative",

  }

  return (
    <div style={styling}>
        {/* <p className='text-center'>{props.alert}</p> */}
        {props.alert}
    </div>
  )
}

export default Alert