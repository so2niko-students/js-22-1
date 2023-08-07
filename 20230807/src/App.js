import {useState} from 'react';
import './App.css';
import questionsList from './data/questions';
import Questions from './components/questions/Questions';
import Show from './components/Show';
import UserForm from './components/user_form/UserForm';

function App() {
  const [user, setUser] = useState({});
  
  return (
    <div className="App">
      {(user.name && user.email) && (<h3>QUIZ by {user.name}. Send to {user.email}</h3>)}
      <UserForm setForm={setUser} />
      <Show title='Quiz'>
        <Questions list={questionsList} />
      </Show>
    </div>
  );
}

export default App;
