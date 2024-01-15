import { useState } from 'react';
import './App.css';

function App() {

  const studentsData = [
    {
      id: 1,
      name: 'John Doe',
      marks: {
        math: 85,
        science: 78,
        english: 92,
        history: 88,
      },
    },
    {
      id: 2,
      name: 'Alice Johnson',
      marks: {
        math: 90,
        science: 92,
        english: 88,
        history: 80,
        art: 95,
      },
    },
    {
      id: 3,
      name: 'Bob Smith',
      marks: {
        math: 78,
        science: 82,
        english: 75,
        history: 68,
      },
    },
    {
      id: 4,
      name: 'Eva Williams',
      marks: {
        math: 60,
        science: 70,
        english: 72,
        art: 75,
      },
    },
    {
      id: 5,
      name: 'Charlie Brown',
      marks: {
        math: 72,
        science: 68,
        english: 65,
        history: 80,
        geography: 78,
      },
    },
    {
      id: 6,
      name: 'Sophia Miller',
      marks: {
        math: 95,
        science: 88,
        english: 92,
        history: 90,
        art: 85,
      },
    },
    {
      id: 7,
      name: 'Oliver Wilson',
      marks: {
        math: 82,
        science: 75,
        english: 78,
        history: 80,
        geography: 85,
      },
    },
    {
      id: 8,
      name: 'Emma Davis',
      marks: {
        math: 88,
        science: 90,
        english: 85,
        history: 92,
        geography: 78,
      },
    },
    {
      id: 9,
      name: 'Daniel Taylor',
      marks: {
        math: 75,
        science: 80,
        english: 72,
        history: 68,
        geography: 60,
      },
    },
    {
      id: 10,
      name: 'Mia Martinez',
      marks: {
        math: 92,
        science: 95,
        english: 88,
        history: 90,
        art: 85,
        geography: 78,
      },
    },
  ];


  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [maths, setMaths] = useState("");
  const [science, setScience] = useState("");
  const [english, setEnglish] = useState("");
  const [history, setHistory] = useState("");

  const buttonClicked = () => {
    console.log("button clicked")
    console.log(search);


    let result = studentsData.filter(checkId)

    console.log(result);
    console.log(result.map(el => el.name));
    setName(result.map(el => el.name));
    console.log(result.map(el => el.marks));
    setMaths(result.map(el => el.marks.math));
    setScience(result.map(el => el.marks.science));
    setEnglish(result.map(el => el.marks.english));
    setHistory(result.map(el => el.marks.history))

    function checkId(el) {
      return el.id === Number(search);
    }
  }

  return (
    <div className="App">
      <div className="card">
        <input type="search" placeholder='Search studentId...' onChange={(e) => setSearch(e.target.value)} />
        <button onClick={buttonClicked}>Search</button>
        <div className='content'>
          <h3>Name:</h3>
          <p>{name}</p>
          <h3>Marks:</h3>
          <p>Math: </p>
          <p>{maths}</p>
          <p>Science: </p>
          <p>{science}</p>
          <p>English:</p>
          <p>{english}</p>
          <p>History:</p>
          <p>{history}</p>
          <h3>Total Marks: </h3>
          <p>{Number(maths) + Number(science) + Number(english) + Number(history)}</p>

          <progress id="file" value={((Number(maths) + Number(science) + Number(english) + Number(history)) / 400) * 100} max="100">  </progress>

        </div>
      </div>
    </div>
  );
}

export default App;
