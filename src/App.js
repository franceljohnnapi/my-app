import { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState()
  const [shortendUrl, setShortenedUrl] = useState('')

  return (
    <div className="app">
      <div className='shortener'>
        <h2>URL shortener</h2>
        {/* form to enter URL to be shortened */}
        <form>
          <input
            placeholder='Enter URL'
            value={url}
            onChange={(e) => setUrl(e.target.value)}/>
          <button>Submit</button>
        </form>
        {/* Section to view shortened URLS */}
        {shortendUrl &&
          <div className='shortener__viewShot'>
            {shortendUrl}
          </div>
        }
      </div>
    </div>
  );
}

export default App;
