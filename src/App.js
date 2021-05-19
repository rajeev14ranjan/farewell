import './App.css';
import Post from './Posts/Posts';
import Form from './Form/Form';

function App() {
  let dummy = [
    {
      id: 1,
      sender: "Rajeev",
      date: new Date(),
      message: "I will miss my colleague and best friend, but the sweet memories we shared together will stay in my heart forever. You are the best staff I have ever worked with. Bye. —— While it pains me to bid you farewell as you start a new phase of your career, I sincerely wish you continued success in all your future endeavors.",
      likes: 6
    },
    {
      id: 2,
      sender: "John Doe",
      date: new Date(),
      message: "The monthly targets and performance which you achieved here were amazing. You set the standards to another level here. With a heavy heart, we bid you farewell!",
      likes: 10
    },
  ]


  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is what your colleagues have to say about you ...
        </p>
      </header>
      <div className="farewell-posts">
        {dummy.map(d => <Post key={d.id} {...d} />)}
      </div>
      <Form></Form>
    </div>
  );
}

export default App;
