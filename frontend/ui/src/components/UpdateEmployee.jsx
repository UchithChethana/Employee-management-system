import axios from 'axios'
import React,{useState, useEffect} from "react"
import { Link, useParams, useNavigate } from 'react-router-dom'
import './UpdateEmployee.css';

function UpdateEmployee() {
    const [employee, setEmployees] = useState({
        emplyeeID:"",
        name:"",
        address:"",
        nic:"",
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/employees/${id}`)
            .then((res) => {
                setEmployees({
                    emplyeeID : res.data.employeeID,
                    name: res.data.name,
                    address: res.data.address,
                    nic: res.data.nic,  
                });
            })
            .catch((err) => {
                console.log("Erroe from the update employee",err);
            });
    },[id]);


    const onChange = (e) => {
        console.log(e.target.value)
        setEmployees({...employee,[e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            emplyeeID : employee.employeeID,
            name: employee.name,
            address: employee.address,
            nic: employee.nic,
        };
        axios
            .put(`http://localhost:3000/api/employees/${id}`, data)
            .then((res) => {
                navigate(`/showdetails/${id}`);
            })
            .catch((err) => {
                console.log("Error in update")
            });
    };
    
    return (
    <div className="update-employee-wrapper">
      <div className="form-card">
        <Link to="/" className="back-btn">← Show Employee List</Link>
        <h2 className="form-title">Update Employee</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="employeeID">Employee ID</label>
            <input
              type="text"
              id="employeeID"
              name="employeeID"
              placeholder="Enter Employee ID"
              value={employee.employeeID}
              onChange={onChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Full Name"
              value={employee.name}
              onChange={onChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter Address"
              value={employee.address}
              onChange={onChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="nic">NIC</label>
            <input
              type="number"
              id="nic"
              name="nic"
              placeholder="Enter NIC Number"
              value={employee.nic}
              onChange={onChange}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Update Employee</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateEmployee
