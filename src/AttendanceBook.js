import React from "react";

const AttendanceBook = (props) => {
    const students = [
        {id:1, name:"카리나"},
        {id:2, name:"윈터"},
        {id:3, name:"닝닝"},
        {id:4, name:"지젤"},
    ];

    return(
        <ul>
            {students.map((student, index)=>{
                console.log(student.id, student.name);
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;