import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./details.css";
import axios from 'axios';

function Details() {
    const[passengerName,setPassengerName]=useState("");
    const[passengerAge,setPassengerAge]=useState("");
    const[passengerGender,setPassengerGender]=useState("");
    const[passengerClass,setPassengerClass]=useState("");
    const[arrivalPoint,setArrivalPoint]=useState("");
    const[depaturePoint,setDepaturePoint]=useState("");
    const[date,setDate]=useState("");
    const[loading,setLoading]=useState(false);
    const[open,setOpen]=useState();
    
    function handleClose(){
        setOpen(false);
    }

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);

        try{
            const data={
                passengerName:passengerName,
                passengerAge:Number(passengerAge),
                passengerGender:passengerGender,
                passengerClass:passengerClass,
                arrivalpoint:arrivalPoint,
                depaturePoint:depaturePoint,
                date:date
            };
            const res=await axios.post("http://localhost:8080/passenger",data);
            await console.log(res);
            await setOpen(true);
        }
        catch(e){
            console.log(e.message);
        }

        setLoading(false);
        alert("Submitted Successfully");
    }

    return (  
        <>
        <div className="d1"><center>
        <div className="d2"><br></br>
        <h2>RAILWAYS RESERVATION</h2>
            <TextField required value={passengerName} id="passengerName" label="Name"  placeholder='Enter your name' onChange={(event)=>setPassengerName(event.target.value)} /> <br></br><br></br>
            <TextField value={passengerAge} id="passengerAge" label="Age" type="number" placeholder='Enter your age' InputLabelProps={{ shrink: true, }} onChange={(event)=>setPassengerAge(event.target.value)} /> <br></br><br></br>
            <TextField value={passengerGender} id="passengerGender" label="Gender"  placeholder='Male/Female/Others' onChange={(event)=>setPassengerGender(event.target.value)}/> <br></br><br></br>
            <TextField value={passengerClass} id="passengerClass" label="Class"  placeholder='1A/2A/3A/3E/EA/EC/FC/CC' onChange={(event)=>setPassengerClass(event.target.value)}/> <br></br><br></br>
            <TextField value={arrivalPoint} id="arrivalPoint" label="ArrivalPoint" onChange={(event)=>setArrivalPoint(event.target.value)}/> <br></br><br></br>
            <TextField value={depaturePoint} id="depaturePoint" label="DepaturePoint" onChange={(event)=>setDepaturePoint(event.target.value)}/> <br></br><br></br>
            <TextField value={date} id="date" label="Date" placeholder='Date of journey' onChange={(event)=>setDate(event.target.value)}/> <br></br><br></br>
            <Button className='button'variant='contained' style={{color:'white'}} onClick={handleSubmit}> Submit </Button> <br></br><br></br>
        </div></center>  
        </div>
        </>
    );
}

export default Details;