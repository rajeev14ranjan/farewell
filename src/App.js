import React, { useState, useEffect } from 'react';
import Post from './Posts/Posts';
import Form from './Form/Form';
import './App.css';

function App() {
  let dummy = [{ "id": "1", "date": "2021-05-20 00:00:00", "message": "I will miss my colleague and best friend, but the sweet memories we shared together will stay in my heart forever. You are the best staff I have ever worked with. Bye. \u2014\u2014 While it pains me to bid you farewell as you start a new phase of your career, I sincerely wish you continued success in all your future endeavors.", "sender": "John Doe" }, { "id": "2", "date": "2021-05-20 13:14:08", "message": "The monthly targets and performance which you achieved here were amazing. You set the standards to another level here. With a heavy heart, we bid you farewell!", "sender": "Jane Doe" }];

  const [data, setData] = useState(dummy);

  //remove logo
  (function removeLogo() {
    setTimeout(() => {
      const aElt = document.querySelectorAll("a");
      for (let i = 0; i < aElt.length; i++) {
        if (aElt[i].title.includes("Hosted on free")) {
          aElt[i].remove();
          break;
        }
      }
    }, 100);
  })();

  useEffect(async () => {
    const response = await fetch('./api/post.php', {
      method: 'post',
      body: JSON.stringify({ action: 'getposts' })
    });
    let data = await response.json()
    setData(data);
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is what your colleagues have to say about you ...
        </p>
      </header>
      <div className="farewell-posts">
        {data.map(d => <Post key={d.id} {...d} />)}
      </div>
      <Form></Form>
    </div>
  );
}

export default App;
