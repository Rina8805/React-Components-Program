import './Home.css';

function CourseCard(course)
{
    return <div className='coursecard-container'>
        <h1>Course Name: {course.courseName}</h1>
        <h2>Course Fees: {course.courseFees}</h2>
        <h2>Course Duration: {course.duration}</h2>
    </div>
}

export default CourseCard;