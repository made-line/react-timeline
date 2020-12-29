import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

function App() {
  console.log(timelineData);


  const exampleList = {
    "person": "Ada Lovelace",
    "events": [
      {
        "person": "Adele Goldberg",
        "status": "In Smalltalk, everything happens somewhere else.",
        "timeStamp": "2018-05-18T22:12:03Z"
      },
      {
        "person": "Erica Baker",
        "status": "Every once in a while, life affords you the opportunity to have real, authentic, genuine happiness. It's up to you to see it. Pay attention.",
        "timeStamp": "2018-05-18T22:19:40Z"
      },
    ]
    }


  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Timeline</h1>
      </header>
      <main className="App-main">
        <TimelineEvent test={exampleList}/>
      </main>
    </div>
  );
}

export default App;
