import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button, CardActionArea, CardActions} from '@mui/material';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmployeeCard = ({ employee }) => {


    const onDeleteClick = (id)=>{
        axios.delete(`http://localhost:3000/api/employees/${id}`).then(() => {
            window.location.reload();
        }).catch((err)  => {
            console.log("Delete error",err);
        })
    }


  return (


    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {employee.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {employee.employeeID}
          <br/>
          {employee.address}
          <br/>
          {employee.nic}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>onDeleteClick(employee._id)}>Delete</Button>
        <Link className="btn btn-outline-warning float-right" to={`/showdetails/${employee._id}`}>Detail</Link>
      </CardActions>
    </Card>
  );
};
export default EmployeeCard
