import React,{ useEffect,useState} from "react";
import './view.css';
import axios from "axios";
function DataBaseView(){
    const [content, addContent]=useState([]);
    useEffect(()=>{

    axios.get('http://localhost:8080/passenger').then(function (response) {
        addContent(response.data);
    });
    })
    return(
        <div className="d1">
            <center><h1 class="head">TRAIN PASSENGER DETAILS</h1></center>
            <br></br><br></br>
            <table style={{width:"70%",height:"150px"}}>
                
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Class</th>
                    <th>ArrivalPoint</th>
                    <th>DepaturePoint</th>
                    <th>Date of Journey</th>
                </tr>
               
                {content.map((value)=>(
                    <tr>
                        <td>{value.passengerId}</td>
                        <td>{value.passengerName}</td>
                        <td>{value.passengerAge}</td>
                        <td>{value.passengerGender}</td>
                        <td>{value.passengerClass}</td>
                        <td>{value.arrivalpoint}</td>
                        <td>{value.depaturePoint}</td>
                        <td>{value.date}</td>
                    </tr>
                ))}          
            </table>
        </div>
    )
}
export default DataBaseView;