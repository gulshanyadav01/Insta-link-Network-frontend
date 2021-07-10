import React from 'react';
// import './App.css';

const voters = [{ name: 'Alex', age: 10, gender:'Male' },
{ name: 'Ajay', age: 20,gender:'Male' },
{ name: 'Barathi', age: 30,gender:'Female' },
{ name: 'Cindrella', age: 18,gender:'Female' },
{ name: 'Daniel', age: 25,gender:'Male' },
{ name: 'Sara', age: 20,gender:'Female' },
{ name: 'Nickolas', age: 40,gender:'Male' },
{ name: 'Alen', age: 35,gender:'Female' },
{ name: 'Mitra', age: 15,gender:'Female' },
{ name: 'Philip', age:70,gender:'Male' }
]

const names = voters.filter((voter) => voter.age >= 18); 
const notNames = voters.filter((voter) => voter.age< 18); 
// console.log(names);
function App() {
  return (
    <div className="App">
        <h2 id = "election-announcement">Election Announcements</h2>
        <p>An election is a formal group decision-making process by which a population chooses an individual to hold public office. Elections have been the usual mechanism by which modern representative democracy has operated since the 17th century.</p>
        <h2 id = "eligible-vote" >Eligible to Vote</h2>
        <ul id = "eligible-voters">
        {names.map((name) => {
            return (
                
                <li>{name.name}</li>
            )
        })}
        </ul>
        
        <h2 id = "non-eligible-vote">Not Eligible to Vote</h2>
        <ul id = "non-eligible-vote">
        {notNames.map((name) => {
            return (
                
                <li>{name.name}</li>
            )
        })}
        </ul>
    </div>
  );
}

export default App;
