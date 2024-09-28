import './App.css';
import CourseCard from './CourseCard';
import { Counter } from './Counter';

function App() {
  return (
    <div>
      <h1>Demonstraight React Components</h1>
      <div className='grid'>
        <CourseCard courseName="Java FullStack" courseFees={80000} duration="6 month"/>
        <CourseCard courseName="Python FullStack" courseFees={75000} duration="5 month"/>
        <CourseCard courseName="AWS Cloud" courseFees={55000} duration="4 month"/>
      </div>
      <Counter/>
    </div>
  );
}

export default App;
