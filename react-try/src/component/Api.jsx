import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";


function Api() {

  const [persons, setPerson] = useState([]);

  const getApiUser = () => {
    axios.get("https://randomuser.me/api/?results=20").then(({ data }) => {

      console.log(data.results);
      setPerson(data.results);
    }).catch(err => {

      console.log(err);
    })
  }
  useEffect(() => {
    getApiUser()

  }, []);

  return (
    <div>
      {persons.map((person, index) => <div key={index}>
        <table>
          <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Country</th>
          
          </tr>
          <tr>
            <td>{person.name.first}</td>
            <td>{person.email}</td>
            <td>{person.gender}</td>
            <td>{person.location.country}</td>
          </tr>
        </table>
      </div>)}
    </div>
  )
}

export default Api;