STUDENT COURSE DETAILS - REACT PROPS APP

HOW TO RUN IN VS CODE
1. Extract the student-props-app.zip file.
2. Open VS Code.
3. Select File > Open Folder and choose the student-props-app folder.
4. Open Terminal > New Terminal.
5. Run: npm install
6. After installation, run: npm run dev
7. Open the local URL shown in the terminal (usually http://localhost:5173).

ABOUT THE APP
This app displays:
- Student name
- Student course
- Faculty name

PROPS CONCEPT
In App.jsx, the parent component passes studentName, courseName and
facultyName to the StudentCard component as props.
StudentCard.jsx receives those props and displays their values.

TO CHANGE THE DETAILS
Open src/App.jsx and edit the values in the student object:
name, course, faculty.
Save the file; Vite refreshes the page automatically.

PROJECT STRUCTURE
student-props-app/
  index.html
  package.json
  README.txt
  src/
    main.jsx
    App.jsx
    StudentCard.jsx
    style.css
