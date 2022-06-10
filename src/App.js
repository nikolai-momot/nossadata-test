import TextList from './components/TextList'
import Error from './components/Error'
import { GiphyFetch } from '@giphy/js-fetch-api'
import {useState} from 'react'
import './App.css';

const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY)
const params = {limit: 20}

const App = () => {
  const [text, setText] = useState('')
  const [results, setResults] = useState([])
  const [err, setErr] = useState(false)

  const handleInput = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = async () => {
    if(text.length === 0) {
      setErr(true)
      return
    }

    const res = await giphy.search(text, params)
      
    setResults(res.data)
    setText('')
    setErr(false)
  }
  
  const loadTrending = async () => {
    const res = await giphy.trending(params)
    setResults(res.data)
  }

  loadTrending()
  return (
    <div className="App">
      <h1>Nikolai Momot Nossa Data GIF Generator</h1>
      <h3>Search</h3>
      <input className='input-field' value={text} onChange={handleInput} />
      <button className='submit-btn' onClick={handleSubmit}>Submit</button>
      <Error isError={err} text='The input length needs to be at least 1 character'/>
      {results && <TextList gifs={results}  />}
    </div>
  );
}
export default App;