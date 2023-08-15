import React,{useState,useEffect} from "react";
import axios from 'axios';
import {Link, useNavigate, useParams} from "react-router-dom";
const ShowEmployee = () =>{
    const navigate = useNavigate();
    const [employees, setEmployee] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/employee")
            .then(data => {
                console.log(data)
                setEmployee(data.data)
            }).catch(function (err){
            console.log(err)
        })
    },[])
    const delete1 = (id) => {
        axios.post("http://localhost:8080/employee/delete/" + id)
            .then(data => {
                console.log(data);
                setEmployee(employees.filter((employee) => employee.id !== id));
            })
            .catch(function (err) {
                console.log(err);
            });
    };
    return (
        <>
            <div className="container">
                <h2>Student List</h2>
                <Link to={"/create"}>
                    <button>Create</button>
                </Link>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>employeeCode</th>
                        <th>name</th>
                        <th>age</th>
                        <th>salary</th>
                        <th>department</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map((e) => {
                            return (
                                <tr>
                                    <td>{e.id}</td>
                                    <td>{e.employeeCode}</td>
                                    <td>{e.name}</td>
                                    <td>{e.age}</td>
                                    <td>{e.salary}</td>
                                    <td>{e.department.name}</td>
                                    <td>
                                        <Link to={"/update/" + e.id}>
                                            <button type="button" className="btn btn-warning">Edit</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button type="button" onClick={() => delete1(e.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ShowEmployee;