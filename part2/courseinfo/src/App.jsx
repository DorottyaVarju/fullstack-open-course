import Course from './components/Course'

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => ({ exercises: s.exercises + p.exercises }))

  return (
    <b>total of {total.exercises} exercises</b>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map((course, index) => {
        return (
          <div key={index}>
            <Course course={course} />
            <Total parts={course.parts} />
          </div>
        )
      })
      }
    </div>
  )
}

export default App