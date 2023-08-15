import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import axios from "axios";
const EditEmployee = () => {
    const [employee, setEmployee] = useState({
        id: 0,
        employeeCode: "",
        name: "",
        age: "",
        salary: "",
        department: {id: 0}
    });
    const [department, setIdDepartment] = useState(); //2
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        console.log(id)
        axios.get("http://localhost:8080/employee/detail/" +id)
            .then(data => {
                console.log(1);
                console.log(data.data);
                setEmployee(data.data);
            })
            .catch(function (err) {
                console.log(err)
            })
    },[]);
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        let obj = {...employee, [name]: value}
        setEmployee(obj);
    };

    const handleInputChangeIdDepartment = (e) => {
        const value = e.target.value;
        console.log(value);
        setEmployee({ ...employee, department: { id: value } });
        setIdDepartment(value);
    };

    const edit = () => {
        setEmployee({...employee})
        axios.post("http://localhost:8080/employee/update/" +id, employee)
            .then(data => {
                console.log(data)
                navigate("/");
            })
            .catch(function (err) {
                console.log(err)
            })
    }
    return (
        <div className="container">
            <h2>Update</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>employeeCode</th>
                    <th><input name="employeeCode"  value={employee.employeeCode} onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>name</th>
                    <th><input name="name"  value={employee.name} onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>age</th>
                    <th><input name="age"  value={employee.age} onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>salary</th>
                    <th><input name="salary"  value={employee.salary} onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>IdDepartment</th>
                    <th><input value={employee.department.id} onChange={handleInputChangeIdDepartment}/></th>
                </tr>

                <button onClick={edit}>Update</button>

                </thead>
            </table>
        </div>
    )

}
export default EditEmployee;