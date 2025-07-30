import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
//import instructors from './instructors';
import './InstructorList.css';
import instructors from './instructors';

function InstructorList() {
  const { deptSlug } = useParams();
  const instructors1 = instructors[deptSlug] || [];
  const [selected, setSelected] = useState({});

  const handleSelect = (id) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

return (
    <div className="instructor-list-page">
      <h2>{deptSlug.replace(/-/g, ' ').toUpperCase()} – Instructors</h2>
      <div className="instructor-list">
        {instructors1.map((inst) => (
          <div key={inst.id} className="instructor-row">
            <div className="info">
              <p><strong>Name:</strong> {inst.name}</p>
              <p><strong>Role:</strong> {inst.role}</p>
              <p><strong>ID:</strong> {inst.id}</p>
            </div>
            <div className="select-box">
              <label className="checkbox-wrapper">
                <input
                  type="checkbox"
                  checked={!!selected[inst.id]}
                  onChange={() => handleSelect(inst.id)}
                />
                <span className="checkmark">{selected[inst.id] ? '✔' : ''}</span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorList;
