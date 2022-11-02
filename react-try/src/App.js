import _ from 'lodash';
import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [users, setUsers] = useState([]);
  const [sortBy, setSortBy] = useState('');

  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      console.log(data);
      setUsers(data)
    })
  };

  useEffect(() => {
    getData()
  }, [])

  let sortedUsers = users;
  if (sortBy === 'name') {
    sortedUsers = _.sortBy(users, 'name');
  } else if (sortBy === 'companyName') {
    sortedUsers = _.sortBy(users, 'company.name');
  }

  const Row = ({ person }) => {
    const [isRed, setIsRed] = useState(false)
    return (
      <tr style={{ backgroundColor: isRed ? "red" : "transparent" }}>
        <td>{person.name}</td>
        <td><a href={`https://${person.website}`}>{person.website}</a></td>
        <td>{person.company.name}</td>
        <td><input type="checkbox" onClick={() => setIsRed(!isRed)} /></td>
      </tr>
    )
  }

  return (
    <div >
      <table >
        <thead>
          <tr >

            <th onClick={() => setSortBy('name')}>Name</th>
            <th>website</th>
            <th onClick={() => setSortBy('companyName')}>Company</th>
            <th scope='col'>
              <input type="checkbox" />
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((person, index) => <Row key={index} person={person} />)}
        </tbody>
      </table>
    </div>
  )
}

export default App;
