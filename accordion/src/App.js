import React from "react"
import data from "./data"
import SingleQuestion from "./Question"

function App() {
    const [questions, setQuestions] = React.useState(data)

    // console.log(questions)

    return (
        <main>
            <div className="container">
                <h3>questions and answers about login</h3>
                <section className="info">
                    {questions.map((q) => (
                        <SingleQuestion key={q.id} {...q} />
                    ))}
                </section>
            </div>
        </main>
    )
}

export default App
