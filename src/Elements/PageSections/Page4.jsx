import EducationBlock from "./EducationBlock"
import { useState, useEffect } from "react"

export default function Education({saveList, data}){
    const [eduList, setEduList] = useState( data || [])

    const addChild = () => {
        setEduList(eduList.concat({id: Date.now(), type: "", name: "", start: "", end: ""}))
    }

    const removeChild = () => {
        setEduList(prev => prev.slice(0, -1))
    }

    const AllBlocks = eduList.map((block) =>
        (<EducationBlock _class="element"
            key={block.id}
            data = {block}
            updater = {(id, type, name, start, end) => updateEducation(id, type, name, start, end)}
        />)
    )

    const updateEducation = (id, type, name, start, end) => {
        setEduList((prev) => (prev.map((block) => block.id === id ? {id: id, type: type, name: name, start: start, end: end} : block)))
    }

    useEffect(() => {
            saveList(eduList);
    }, [eduList, saveList]);

    return(
        <>
            <div className="elementHeader">
                <h2>Please provide Education history</h2>
                <button onClick={addChild}>+</button>
                <button onClick={removeChild}>-</button>
            </div>
            <div className = "elementPage">
                {AllBlocks}
            </div>
        </>
    )
}