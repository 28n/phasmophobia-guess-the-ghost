import { useState, useEffect } from 'react'

const ghostData = [
  {
    type: "Banshee",
    evidence: ["Ghost Orb", "Fingerprints", "DOTS"]
  },
  {
    type: "Demon",
    evidence: ["Freezing Temperatures", "Fingerprints", "Ghost Writing"]
  },
  {
    type: "Deogen",
    evidence: ["Spirit Box", "Ghost Writing", "DOTS"]
  },
  {
    type: "Goryo",
    evidence: ["EMF", "Fingerprints", "DOTS"]
  },
  {
    type: "Hantu",
    evidence: ["Ghost Orbs", "Freezing Temperatures", "Fingerprints"]
  },
  {
    type: "Jinn",
    evidence: ["EMF", "Freezing Temperatures", "Fingerprints"]
  },
  {
    type: "Mare",
    evidence: ["Ghost Orbs", "Spirit Box", "DOTS"]
  },
  {
    type: "Moroi",
    evidence: ["Spirit Box", "Freezing Temperatures", "Ghost Writing"]
  },
  {
    type: "Myling",
    evidence: ["EMF", "Fingerprints", "Ghost Writing"]
  },
  {
    type: "Obake",
    evidence: ["EMF", "Ghost Orbs", "Fingerprints"]
  },
  {
    type: "Oni",
    evidence: ["EMF", "Freezing Temperatures", "DOTS"]
  },
  {
    type: "Onryo",
    evidence: ["Ghost Orbs", "Spirit Box", "Freezing Temperatures"]
  },
  {
    type: "Phantom",
    evidence: ["Spirit Box", "Fingerprints", "DOTS"]
  },
  {
    type: "Poltergeist",
    evidence: ["Spirit Box", "Fingerprints", "Ghost Writing"]
  },
  {
    type: "Raiju",
    evidence: ["EMF", "Ghost Orbs", "DOTS"]
  },
  {
    type: "Revenant",
    evidence: ["Ghost Orbs", "Freezing Temperatures", "Ghost Writing"]
  },
  {
    type: "Shade",
    evidence: ["EMF", "Freezing Temperatures", "Ghost Writing"]
  },
  {
    type: "Spirit",
    evidence: ["EMF", "Spirit Box", "Ghost Writing"]
  },
  {
    type: "Thaye",
    evidence: ["Ghost Orbs", "Ghost Writing", "DOTS"]
  },
  {
    type: "The Mimic",
    evidence: ["Spirit Box", "Freezing Temperatures", "Fingerprints"]
  },
  {
    type: "The Twins",
    evidence: ["EMF", "Spirit Box", "Freezing Temperatures"]
  },
  {
    type: "Wraith",
    evidence: ["EMF", "Spirit Box", "DOTS"]
  },
  {
    type: "Yokai",
    evidence: ["Ghost Orbs", "Spirit Box", "DOTS"],
  },
  {
    type: "Yurei",
    evidence: ["Ghost Orbs", "Freezing Temperatures", "DOTS"]
  }
]

const Game = () => {
  const [ghost, setGhost] = useState(null)
  const [score, setScore] = useState(0)
  useEffect(() => {
    setGhost(ghostData[Math.floor(Math.random() * ghostData.length)])
  }, [])
  function guess(type) {
    if (type === ghost.type) {
      setScore(score + 1)
      setGhost(ghostData[Math.floor(Math.random() * ghostData.length)])
    } else {
      alert("Wrong!")
    }
  }
  return (
    <div className="game">
      <h1>Guess the Ghost Type</h1>
      <h2>Score: {score}</h2>
      <br />
      <div className='evidence'>
        <ul>
          {ghost && ghost.evidence.map((evidence, index) => (
            <li key={index}>{evidence}</li>
          ))}
        </ul>
      </div>
      <br />
      <h2>The Ghost is a:</h2>
      <div className='types'>
        <ul>
          {ghost && ghostData.map((g, index) => {
            return (
              <button key={index} onClick={() => { guess(g.type) }}> {g.type}</button>
            )
          })}
        </ul>
      </div>
      <div className='footer'>
        <p>Created by <a href="https://www.samsierra.de">Sam Sierra</a></p>
        Copyright {new Date().getFullYear()}
      </div>
    </div >
  )
}

export default Game
