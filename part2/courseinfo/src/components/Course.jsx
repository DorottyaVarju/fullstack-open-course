const Header = (props) => <h1>{props.course}</h1>

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part) => <Part key={part.id} part={part} />)}
        </div>
    )
}

const Part = ({ part }) => (
    <p>
        {part.name} {part.exercises}
    </p>
)

const Course = ({ course }) => (
    <>
        <Header course={course.name} />
        <Content parts={course.parts} />
    </>
)

export default Course