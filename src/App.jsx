import React from 'react';
import StudentCard from './StudentCard.jsx';

function App() {
  // Data is passed to StudentCard using React props.
  const student = {
    name: 'Sameer',
    course: 'B.Tech Biotechnology',
    faculty: 'Dr. Priya Sharma'
  };

  return (
    <main className="page">
      <header className="hero">
        <div className="badge">STUDENT PORTAL</div>
        <h1>Student Course Details</h1>
        <p>A simple React application demonstrating the <strong>props</strong> concept.</p>
      </header>

      <StudentCard
        studentName={student.name}
        courseName={student.course}
        facultyName={student.faculty}
      />

      <p className="note">The App component sends data to StudentCard through props.</p>
    </main>
  );
}

export default App;