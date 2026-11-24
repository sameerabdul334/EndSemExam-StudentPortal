import React from 'react';

function StudentCard({ studentName, courseName, facultyName }) {
  return (
    <section className="card">
      <div className="card-top">
        <div className="avatar">{studentName.charAt(0).toUpperCase()}</div>
        <div>
          <span className="label">STUDENT PROFILE</span>
          <h2>{studentName}</h2>
        </div>
      </div>

      <div className="details">
        <div className="detail">
          <span className="icon">🎓</span>
          <div><small>COURSE</small><strong>{courseName}</strong></div>
        </div>
        <div className="detail">
          <span className="icon">👩‍🏫</span>
          <div><small>FACULTY NAME</small><strong>{facultyName}</strong></div>
        </div>
      </div>
      <div className="footer">Student information retrieved using React props</div>
    </section>
  );
}

export default StudentCard;