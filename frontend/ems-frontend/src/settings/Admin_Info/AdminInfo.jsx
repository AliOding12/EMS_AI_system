import React, { useState } from 'react';
import './AdminInfo.css';

const AdminSettings = () => {
  const [adminInfo, setAdminInfo] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    title: '',
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminInfo({ ...adminInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin Info Updated:', adminInfo);
    // Add saving logic here
  };

  return (
    <div className="admin-settings">
      <h3>Admin Information</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <input type="text" name="name" value={adminInfo.name} onChange={handleChange} />
        </label>
        <label>
          Email Address
          <input type="email" name="email" value={adminInfo.email} onChange={handleChange} />
        </label>
        <label>
          Phone Number
          <input type="text" name="phone" value={adminInfo.phone} onChange={handleChange} />
        </label>
        <label>
          Department
          <input type="text" name="department" value={adminInfo.department} onChange={handleChange} />
        </label>
        <label>
          Title
          <input type="text" name="title" value={adminInfo.title} onChange={handleChange} />
        </label>
        <label>
          Bio
          <textarea name="bio" value={adminInfo.bio} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default AdminSettings;
