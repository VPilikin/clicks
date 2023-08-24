import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { useState, useEffect } from 'react'

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function App() {
  const [letter, setLetter] = useState('')
  let count = 0

  useEffect(() => {
    const onKeypress = (e) => {
      let l = e.key
      if (l > 0) count = l
      if (l == 'Enter' || l == 'ContextMenu' || l == ' ') {
        ++count
        if (count > 29) count = 0
        setLetter(count)
      } else {
        setLetter(l.toUpperCase())
      }
    }

    document.addEventListener('keypress', onKeypress)

    return () => {
      document.removeEventListener('keypress', onKeypress)
    }
  }, [])

  return (
    <div className="ch1" style={{ borderColor: getRandomColor() }}>
      <h1>{letter}</h1>
    </div>
  )
}

export default App
