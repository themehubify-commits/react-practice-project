import Gallery from './components/section'
import './App.css'
import Profile from './components/profile'
import Test from './components/Test'
import TodoList from './components/ToDoList'
import PackingList from './components/PackingList'
import Button from './components/Button'
import Toolbar from './components/Tollber'
import Toolbar1 from './components/Toolber'
import Signup from './components/Signup'
import Gallery1 from './components/Gallery'

const People = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];


function App() {

  // const listItem = People.map((P) => <li>{P}</li>)

  return (
    <>
    {/* <Gallery /> */}
     {/* <Test /> */}
     {/* <TodoList /> */}
     {/* <PackingList /> */}
     {/* <Profile /> */}
     {/* <ul>
      <li>{listItem}</li>
     </ul> */}
     {/* <Button />  */}
     {/* <Toolbar /> */}
     {/* <Toolbar1 /> */}
     {/* <Signup /> */}
     <Gallery1 />
     <hr />
     <Gallery1 />
    </>
  )
}

export default App
