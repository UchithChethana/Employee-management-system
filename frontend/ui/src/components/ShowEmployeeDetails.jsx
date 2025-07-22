import React,{useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios"

function ShowEmployeeDetails() {

    const[employees,setEmployees] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/employees/${id}`)
            .then((res) => {
                setEmployees(res.data)
            })
            .catch(() => {
                console.log("Error from ShowBookdetails");
            });
    },[id]);

    const TableItem = (
        <div>
            <table className="table table-hover table-dark">
                <tbody>
                    <tr>
                        <th scope='row'>1</th>
                        <td>ID-</td>
                        <td>{employees.employeeID}</td>
                    </tr>
                    <tr>
                        <th scope='row'>2</th>
                        <td>NAME-</td>
                        <td>{employees.name}</td>
                    </tr>
                    <tr>
                        <th scope='row'>3</th>
                        <td>Address-</td>
                        <td>{employees.address}</td>
                    </tr>
                    <tr>    
                        <th scope='row'>4</th>
                        <td>NIC-</td>
                        <td>{employees.nic}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

  return (
    <div className="showEmployeeDetails">

        <div className="col-md-10 m-auto">
            <br/>
        <Link to={"/"} className='btn btn-outline-danger float-right'>back to main</Link>
        </div>

        <br/>
        <div className='col-md-8 m-auto'>
            <h1 className='display-6-bold text-center'>Employee Detail</h1>
            <p className='text-center'>This is full details of employee</p>
            <hr/>
            <br/>

        <div>
            <div className='col-md-10 m-auto'>{TableItem}</div>

            <div className='col-md-6 m-auto'>
                <Link to={`/updatedetails/${employees._id}`} className="btn btn-outline-info btn-lg btn--block d-flex justify-content-center">Edit Employee</Link>
            </div>
        </div>


        </div>
      
    </div>
  )
}

export default ShowEmployeeDetails
