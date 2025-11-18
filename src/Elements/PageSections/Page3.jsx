import EmploymentBlock from "./EmploymentBlock"
import { useState, useEffect, useRef } from "react"
import { v4 as uuidv4 } from "uuid";

export default function EmploymentHistory({saveList, data, setRef}){

    const [employmentList, setEmploymentList] = useState( data || [])
    const employmentListRef = useRef(employmentList)

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

    //update the ref when the list changes
    useEffect(() => {
        employmentListRef.current = employmentList;
    }, [employmentList]);

    //send the ref up on unmount
    useEffect(() => {
        return () => {
            saveList(employmentListRef.current);
        }
    }, []);

    //send the ref up on mount
    useEffect(() => {
        saveList(employmentListRef.current);
    }, []);

    //make the container ref on mount
    const containerRef = useRef(null);
    useEffect(() => {
        if (setRef) setRef(containerRef.current);
    }, []);

    return(
        <div ref={containerRef}>
            <div className="elementHeader">
                <h2>Please provide previous work experience</h2>
                <button onClick={addChild}>+</button>
                <button onClick={removeChild}>-</button>
            </div>
            <div className = "elementPage">
                {AllBlocks}
            </div>
        </div>
    )
}