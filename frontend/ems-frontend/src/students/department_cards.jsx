import React from 'react';
import './DepartmentCards.css';
import { useNavigate } from 'react-router-dom';

const departments = [
  { name: 'Computer Science', slug: 'computer-science', hod: 'Dr. XYZ', students: 230 },
  { name: 'Civil Engineering', slug: 'civil-engineering', hod: 'Prof. ABC', students: 180 },
  { name: 'Artificial Intelligence', slug: 'artificial-intelligence', hod: 'Dr. LMN', students: 145 },
];

function DepartmentCards() {
  const navigate = useNavigate();

  return (
    <div className="department-container">
      {departments.map((dept, index) => (
        <div className="department-card" key={index} onClick={() => navigate(`/department/${dept.slug}`)}>
          <h2>{dept.name} Department</h2>
          <p><strong>HOD:</strong> {dept.hod}</p>
          <p><strong>Total Students:</strong> {dept.students}</p>
          <p><strong>Current Semester:</strong> Fall 2025</p>
        </div>
      ))}
    </div>
  );
}

export default DepartmentCards;
