import React from 'react';

import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import Deleteform from './delete';
import Details from './details';
import DataBaseView from './view';
import UpdateForm from './update';
function Routing(){
    return(
        <>
        <Router>
    <ul class="nav nav-tabs">
  <li class="nav-item">
    <Link to="/Details" class="nav-link">Ticket Booking</Link>
  </li>
  <li class="nav-item">
    <Link to="/view" class="nav-link">View Details</Link>
  </li>
  <li class="nav-item">
    <Link to="/delete" class="nav-link">Ticket Cancellation</Link>
  </li>
  <li class="nav-item">
    <Link to="/update" class="nav-link">Details Updation</Link>
  </li>

  
</ul>
<Routes>
  <Route path="/Details" element={<Details/>}/>
  <Route path="/view" element={<DataBaseView/>}/>
  <Route path="/delete" element={<Deleteform/>}/>
  <Route path="/update" element={<UpdateForm/>}/>
  
</Routes>
    </Router>
        </>
    );
}
export default Routing;