import React,{ useState } from 'react';
import './InsertEmployee.css';
import axios from 'axios';

const InsertEmployee = () => {

    const [employeeData, setEmployeedata] = useState({
        employeeID:"",
        name:"",
        address:"",
        nic:"",
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setEmployeedata({
            ...employeeData,
            [name]: value,
        });
        console.log(employeeData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/employees" ,employeeData).then(() => {
            setEmployeedata({
                employeeID:"",
                name:"",
                address:"",
                nic:"",
            });
        });
    };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="form-title">Employee Form</h2>

        <div className="form-group">
          <label htmlFor="employeeID">Employee ID</label>
          <input 
            type="text" 
            id="employee_id" 
            name="employeeID"  
            onChange={handleChange}
            value={employeeData.employeeID} />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"  onChange={handleChange} value={employeeData.name}/>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" onChange={handleChange} value={employeeData.address}/>
        </div>

        <div className="form-group">
          <label htmlFor="nic">NIC</label>
          <input type="text" id="nic" name="nic" onChange={handleChange} value={employeeData.nic}/>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default InsertEmployee;
