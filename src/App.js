import './App.css';
import List from './components/list';

function App() {

  const users = [
    {
      id:0,
      name: 'david'
    },
    {
      id:1,
      name: 'junior'
    },

  ]
  return (
    <div>
      <List items={users}/>
    </div>
  );
}

export default App;