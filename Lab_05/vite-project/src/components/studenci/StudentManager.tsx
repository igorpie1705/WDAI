import { useState } from "react";
import Dodawanie from "./Dodawanie";

interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

const StudentManager = () => {
  const [Students, setStudents] = useState<Student[]>([
    { imie: "Jan", nazwisko: "Michalski", rocznik: 1953 },
    { imie: "Anna", nazwisko: "Kowalska", rocznik: 1985 },
    { imie: "Tomasz", nazwisko: "Nowak", rocznik: 1990 },
    { imie: "Katarzyna", nazwisko: "Judasz", rocznik: 1978 },
    { imie: "Piotr", nazwisko: "Wójcik", rocznik: 1963 },
    { imie: "Ewa", nazwisko: "Krawczyk", rocznik: 2000 },
  ]);

  const addStudent = (newStudent: Student) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <div>
      <h1>Lista studentów</h1>
      <table>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rocznik</th>
          </tr>
        </thead>
        <tbody>
          {Students.map((student, index) => (
            <tr key={index}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Dodawanie onAddStudent={addStudent} />
    </div>
  );
};

export default StudentManager;
