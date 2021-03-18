import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import '@material-ui/core'
import './Entry.css';
import {useHistory} from 'react-router-dom';
import Select from 'react-select'

import {  TextField } from '@material-ui/core';

function Entry(){
 
   
  const [details,setDetails] = useState({name:"",range:0});

  const history = useHistory()

  const optionsRange = [
    { value: 1, label: '1-100' },
    { value: 2, label: '100-1000' },
    { value:3, label: 'above 1000' }
  ]
          
  const submitHandler = (e) => {
    e.preventDefault()
    localStorage.setItem("name",details.name)
    history.push("/gamepage")
  }
    return(
        <div>
            <h1 className="header">GUESSING GAME</h1>
            <Card className="login" style={{width:'16rem',textAlign:'center',marginTop:'50px',backgroundColor:"  rgb(194, 45, 181)"}}>
                <h5>LOGIN</h5>
            </Card>
            <Card className="login1" style={{width:'16rem',textAlign:'center'}}>
                <Card.Body>
                    <Form onSubmit={submitHandler}>
                        <TextField type="text" placeholder="Name" onChange= {e =>setDetails({...details,name:e.target.value})} value={details.name}  required></TextField><br /><br />



                        <Select options={optionsRange}   className="level"  onChange= {e =>setDetails({...details,range:e.options})} /><br /><br />


                        <button className="buttonStyle" onClick={submitHandler} value="login" >ENTER</button><br /><br />
                
                    </Form>
                </Card.Body>
            </Card>

           
        </div>


    );
}

export default Entry;
