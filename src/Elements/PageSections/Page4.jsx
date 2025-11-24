import EducationBlock from "./EducationBlock"
import { useState, useEffect, useRef } from "react"

export default function Education({saveList, data, setRef}){
    const [eduList, setEduList] = useState( data || [])
    const eduListRef = useRef(eduList)

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

    //update the ref when the list changes
    useEffect(() => {
        eduListRef.current = eduList;
    }, [eduList]);

    //send the ref up on unmount
    useEffect(() => {
        return () => {
            saveList(eduListRef.current);
        }
    }, []);

    //send the ref up on mount
    useEffect(() => {
        saveList(eduListRef.current);
    }, []);

    //make the container ref on mount
    const containerRef = useRef(null);
    useEffect(() => {
        if (setRef) setRef(containerRef.current);
    }, []);

    return(
        <div ref={containerRef}>
            <div className="elementHeader">
                <h2>Please provide education history</h2>
                <button onClick={addChild}>+</button>
                <button onClick={removeChild}>-</button>
            </div>
            <div className = "elementPage">
                {AllBlocks}
            </div>
        </div>
    )
}