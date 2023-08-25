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

const enToRu = {
  q: 'й',
  w: 'ц',
  e: 'у',
  r: 'к',
  t: 'е',
  y: 'н',
  u: 'г',
  i: 'ш',
  o: 'щ',
  p: 'з',
  '[': 'х',
  ']': 'ъ',
  a: 'ф',
  s: 'ы',
  d: 'в',
  f: 'а',
  g: 'п',
  h: 'р',
  j: 'о',
  k: 'л',
  l: 'д',
  ';': 'ж',
  "'": 'э',
  z: 'я',
  x: 'ч',
  c: 'с',
  v: 'м',
  b: 'и',
  n: 'т',
  m: 'ь',
  ',': 'б',
  '.': 'ю',
  '`': 'ё',
}

function App() {
  const [letter, setLetter] = useState('')
  let count = 0

  useEffect(() => {
    const onKeypress = (e) => {
      let l = e.key
      if (l > 0) count = l
      if (l == 'Enter' || l == 'ContextMenu' || l == ' ' || l == 'Backspace') {
        ++count
        if (count > 30) count = 0
        setLetter(count)
      } else {
        if (l.toLowerCase() in enToRu) {
          setLetter(enToRu[l].toUpperCase())
        } else {
          setLetter(l.toUpperCase())
        }
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
