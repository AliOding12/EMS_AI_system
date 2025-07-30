import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import studentsData from './students';
import './StudentList.css';

function StudentList() {
  const { deptSlug } = useParams();
  const [search, setSearch] = useState('');
  const [filterSemester, setFilterSemester] = useState('');

  const students = studentsData[deptSlug] || [];

  const grouped = students.reduce((acc, student) => {
    if (!acc[student.semester]) acc[student.semester] = [];
    acc[student.semester].push(student);
    return acc;
  }, {});

  const semesters = Object.keys(grouped);

  return (
    <div className="student-list-container">
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by name or CMS ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setFilterSemester(e.target.value)} value={filterSemester}>
          <option value="">All Semesters</option>
          {semesters.map((sem, idx) => (
            <option key={idx} value={sem}>{sem}</option>
          ))}
        </select>
        <button onClick={() => {
          setSearch('');
          setFilterSemester('');
        }}>Reset</button>
      </div>

      {semesters.map((semester, idx) => {
        if (filterSemester && semester !== filterSemester) return null;

        const filteredStudents = grouped[semester].filter(s =>
          s.name.toLowerCase().includes(search.toLowerCase()) ||
          s.cmsId.toLowerCase().includes(search.toLowerCase())
        );

        return (
          <div key={idx} className="semester-block">
            <h3>{semester}</h3>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, i) => (
                <div key={i} className="student-card">
                  <p><strong>Name:</strong> {student.name}</p>
                  <p><strong>CMS ID:</strong> {student.cmsId}</p>
                  <p><strong>Semester:</strong> {student.semester}</p>
                </div>
              ))
            ) : (
              <p style={{ fontStyle: 'italic' }}>No students found for this filter.</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default StudentList;
