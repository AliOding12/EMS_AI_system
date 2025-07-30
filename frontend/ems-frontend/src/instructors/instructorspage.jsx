import React from 'react';
import './InstructorsPage.css';
import { useNavigate } from 'react-router-dom';
import instructors from './instructors';
const departments = [
  { name: 'Computer Science', slug: 'computer-science', hod: 'Dr. XYZ', instructors: 230 },
  { name: 'Civil Engineering', slug: 'civil-engineering', hod: 'Prof. ABC', instructors: 180 },
  { name: 'Artificial Intelligence', slug: 'artificial-intelligence', hod: 'Dr. LMN', instructors: 145 },
];

function InstructorsPage() {

    const navigate = useNavigate();

  return (
    <div className="instructors-page" >
      <h1 className="page-title">Department Instructors</h1>
      <div className="instructor-card-container" >
        {departments.map((dept, idx) => (
          <div key={idx} className="instructor-card" onClick={() => navigate(`/department/${dept.slug}/instructors`)}>
            <h2>{dept.name} Department</h2>
            <p><strong>HOD:</strong> {dept.hod}</p>
            <p><strong>Instructors:</strong> {dept.instructors}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstructorsPage;
