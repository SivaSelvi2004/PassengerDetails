import * as React from 'react';
import { useState} from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import "./update.css";
export default function UpdateForm() {
    const[passengerId,setPassengerId]=useState("");
    const[passengerName,setPassengerName]=useState("");
    const[passengerAge,setPassengerAge]=useState("");
    const[passengerGender,setPassengerGender]=useState("");
    const[passengerClass,setPassengerClass]=useState("");
    const[arrivalPoint,setArrivalPoint]=useState("");
    const[depaturePoint,setDepaturePoint]=useState("");
    const[date,setDate]=useState("");

    async function save(event) {
        event.preventDefault();
        try {

            await axios.put("http://localhost:8080/passenger/put",

                { 
                    passengerId:passengerId,
                    passengerName:passengerName,
                    passengerAge:Number(passengerAge),
                    passengerGender:passengerGender,
                    passengerClass:passengerClass,
                    arrivalpoint:arrivalPoint,
                    depaturePoint:depaturePoint,
                    date:date
                });

            alert("Passenger Detail Updated Successfully");

            setPassengerId("");
            setPassengerName("");
            setPassengerAge("");
            setPassengerGender("");
            setPassengerClass("");
            setArrivalPoint("");
            setDepaturePoint("");
            setDate("");
         

        }
        catch (err) {
            alert("User Updation Failed");
        }
    }

    return (
        <div class="d1">
           <center >
        <div class="d2">
            <h2>Updated Details Of Passenger</h2>
            <br></br>
             <TextField  value={passengerId} id="passengerId" label="Id" type="number" placeholder='Enter ID Number' onChange={(event) => setPassengerId(event.target.value)}/> <br></br><br></br>
            <TextField required value={passengerName} id="passengerName" label="Name"  placeholder='Enter your name' onChange={(event)=>setPassengerName(event.target.value)} /> <br></br><br></br>
            <TextField value={passengerAge} id="passengerAge" label="Age" type="number" placeholder='Enter your age' InputLabelProps={{ shrink: true, }} onChange={(event)=>setPassengerAge(event.target.value)} /> <br></br><br></br>
            <TextField value={passengerGender} id="passengerGender" label="Gender"  placeholder='Male/Female/Others' onChange={(event)=>setPassengerGender(event.target.value)}/> <br></br><br></br>
            <TextField value={passengerClass} id="passengerClass" label="Class"  placeholder='1A/2A/3A/3E/EA/EC/FC/CC' onChange={(event)=>setPassengerClass(event.target.value)}/> <br></br><br></br>
            <TextField value={arrivalPoint} id="arrivalPoint" label="ArrivalPoint" onChange={(event)=>setArrivalPoint(event.target.value)}/> <br></br><br></br>
            <TextField value={depaturePoint} id="depaturePoint" label="DepaturePoint" onChange={(event)=>setDepaturePoint(event.target.value)}/> <br></br><br></br>
            <TextField value={date} id="date" label="Date" placeholder='Date of journey' onChange={(event)=>setDate(event.target.value)}/> 
         
            <br></br><br></br>
                <button type="submit" class="btn btn-primary" onClick={save}> Update </button> 
            </div>
            </center>
        </div>
    );
}