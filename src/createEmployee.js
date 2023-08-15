import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreateEmployee = () => {
    const [employee, setEmployee] = useState({id:0, employeeCode: "",name: "",age: "",salary: "",department:{id: ""} });
    const [idDepartment, setIdDepartment] = useState(employee.department.id);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setEmployee({...employee, [name]: value})
    }
    const handleInputChangeIdDepartment = (e) => {
        const value = e.target.value;
        setIdDepartment(value);
        setEmployee({ ...employee, department: { id: value } });
    };
    const create = () => {
        axios
            .post("http://localhost:8080/employee", employee)
            .then((data) => {
                console.log(data);
                navigate("/");
            })
            .catch(function (err) {
                console.log(err);
            });
    };
    return (
        <div className="container">
            <h2>Create Employee</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>employeeCode</th>
                    <th><input name="employeeCode" onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>name</th>
                    <th><input name="name" onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>age</th>
                    <th><input name="age" onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>salary</th>
                    <th><input name="salary" onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>IdDepartment</th>
                    <th><input  onChange={handleInputChangeIdDepartment}/></th>
                </tr>

                <button onClick={create}>Create</button>

                </thead>
            </table>
        </div>
    )
}
export default CreateEmployee;