import React from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const Question = (q) => {
    const [showInfo, setShowInfo] = React.useState(false)

    //     console.log(q)

    return (
        <article className="question">
            <header>
                <h4>{q.title}</h4>
                <button className="btn" onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {showInfo && <p>{q.info}</p>}
        </article>
    )
}

export default Question
