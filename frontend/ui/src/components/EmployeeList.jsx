import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import axios from 'axios';
import "./EmployeeList.css";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const EmployeeList = () => {
    const [employees, setEmployee] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredEmployees, setfilteredEmployees] = useState([]);

    // Filter based on search input
    useEffect(() => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = employees.filter((employee) =>
            employee.name.toLowerCase().includes(lowerCaseQuery)
        );
        setfilteredEmployees(filtered);
    }, [searchQuery, employees]);

    // Fetch employee data from backend
    useEffect(() => {
        axios.get("http://localhost:3000/api/employees")
            .then((res) => {
                setEmployee(res.data);
                setfilteredEmployees(res.data);
            })
            .catch(() => {
                console.log("Error while getting data");
            });
    }, []);

    // Generate PDF with full employee info
    const generatePDF = () => {
        const doc = new jsPDF();

        const tableColumn = ["Employee Name","Employee ID", "NIC", "Address"];
        const tableRows = [];

        filteredEmployees.forEach((employee) => {
            const employeeData = [
              employee.name || "N/A",
                employee._id || "N/A",
                
                employee.nic || "N/A",
                employee.address || "N/A"
            ];
            tableRows.push(employeeData);
        });

        doc.text("Employee List", 14, 15);

        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 20,
        });

        doc.save("EmployeeList.pdf");
    };

    const employeeList = filteredEmployees.length === 0
        ? "No employee found!"
        : filteredEmployees.map((employee, index) => (
            <EmployeeCard key={index} employee={employee} />
        ));

    return (
        <div className="show_EmployeeList">
            <div className="container">
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="🔍 Search Employee..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <br />
                <div className="genPDF">
                    <button onClick={generatePDF}>Download PDF</button>
                </div>
                <div className="list">{employeeList}</div>
            </div>
        </div>
    );
};

export default EmployeeList;
