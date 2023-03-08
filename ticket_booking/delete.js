import React from 'react';
import axios from 'axios';
import { useState} from 'react';
import "./delete.css";


function Deleteform() {
    const [passengerId, setPassengerId] = useState();
    const [error, setError] = useState('');


    function del() {
        axios.delete('http://localhost:8080/passenger/delete/' + passengerId)
            .then((response) => {
                console.log(response.data);
                
            })
            .catch((error) => setError(error.message));
        alert("User Deleted");
    }
    return (
        <div className="bclr">
            <div className='middle'>
        <>  <center>
            <h2>Delete The Details</h2>
            <br></br>
            <div>

                <input type="number" placeholder='Enter ID Number' className="form-control1" value={passengerId} onChange={(e) => setPassengerId(e.target.value)}>

                </input>
        <br></br><br></br>
            </div>
            <button type="submit" class="btn btn-primary" onClick
                ={del}>Submit</button>
                </center>
          
            <h2>
                {error}
            </h2>
          
        </>
        </div>
        </div>
    );
}

export default Deleteform;