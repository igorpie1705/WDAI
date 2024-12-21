import { useState } from "react";

interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

function Studenci() {
  const Students = [
    { imie: "Jan", nazwisko: "Michalski", rocznik: 1953 },
    { imie: "Anna", nazwisko: "Kowalska", rocznik: 1985 },
    { imie: "Tomasz", nazwisko: "Nowak", rocznik: 1990 },
    { imie: "Katarzyna", nazwisko: "Wiśniewska", rocznik: 1978 },
    { imie: "Piotr", nazwisko: "Wójcik", rocznik: 1963 },
    { imie: "Ewa", nazwisko: "Krawczyk", rocznik: 2000 },
  ];
}
