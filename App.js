import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function eduBackground(user) {
  return user.educationalBackground;
}

function profBackground(user) {
  return user.professionalBackground;
}

function listSkills(user) {
  return user.skills;
}

const user = {
firstName: 'Yayra',
lastName: 'de Souza',
educationalBackground: 'Front-end development',
professionalBackground: 'Engineering',
skills: 'HTML, CSS, Javascript, React'
};

const element = (
  <div>
    <h1>Hello, My name is {formatName(user)} </h1>
    <h2>Educational Background: {eduBackground(user)} </h2>
    <p>I have an {profBackground(user)} background. My skills are {listSkills(user)} </p>
  </div>

)

function App() {
  return (
    {/* <div>
      <h1>Hello World</h1>
      <p> I am Yayra de Souza, this is my first React application </p>
    </div> */
  
    element
  
  }
  );
}

export default App;
