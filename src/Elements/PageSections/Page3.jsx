import EmploymentBlock from "./EmploymentBlock"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid";

export default function EmploymentHistory({saveList, data}){

    const [employmentList, setEmploymentList] = useState( data || [])

    const addChild = () => {
        setEmploymentList(employmentList.concat({id: Date.now(), name: "", title: "", responsibilities: ""}))
    }

    const removeChild = () => {
        setEmploymentList(prev => prev.slice(0, -1))
    }

    const updateEmployment = (id, name, title, responsibilities) => {
        setEmploymentList(
            employmentList.map((block) => (block.id === id ? {id: id, name: name, title: title, responsibilities: responsibilities} : block))
        )
    }

   let AllBlocks = employmentList.map((emp) => (
        <EmploymentBlock _class="element"
            key = {emp.id}
            data={emp}
            updater={(id, name, title, responsibilities) => updateEmployment(id, name, title, responsibilities)}
        />
    ))

    useEffect(() => {
        saveList(employmentList);
    }, [employmentList, saveList]);

    return(
        <>
            <div className="elementHeader">
                <h2>Please provide previous work experience</h2>
                <button onClick={addChild}>+</button>
                <button onClick={removeChild}>-</button>
            </div>
            <div className = "elementPage">
                {AllBlocks}
            </div>
        </>
    )
}