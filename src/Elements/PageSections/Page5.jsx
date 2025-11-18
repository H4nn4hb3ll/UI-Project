import RefBlock from "./RefBlock"
import { useState, useEffect,useRef } from "react"

export default function References({saveList, data, setRef}){
    const [refList, setRefList] = useState( data || [])
    const refListRef = useRef(refList)

    const addChild = () => {
        setRefList(refList.concat({id: Date.now(), name: "", phone: "", email: "", rel: ""}))
    }

    const removeChild = () => {
        setRefList(prev => prev.slice(0, -1))
    }

    const AllBlocks = refList.map((block) =>
        (<RefBlock 
            _class="element"
            key = {block.id}
            data={block}
            updater={(id, name, phone, email, rel) => updateRefrences(id, name, phone, email, rel)}
        />)
    )

    const updateRefrences = (id, name, phone, email, rel) => {
        setRefList((prev) => (prev.map((block) => block.id === id ? {id: id, name: name, phone: phone, email: email, rel: rel} : block)))
    }
    
    //update the ref when the list changes
    useEffect(() => {
        refListRef.current = refList;
    }, [refList]);
    
    //send the ref up on unmount
    useEffect(() => {
        return () => {
            saveList(refListRef.current);
        }
    }, []);

    //send the ref up on mount
    useEffect(() => {
        saveList(refListRef.current);
    }, []);
    
    //make the container ref on mount
    const containerRef = useRef(null);
    useEffect(() => {
        if (setRef) setRef(containerRef.current);
    }, []);

    return(
        <div ref={containerRef}>
            <div className="elementHeader">
                <h2>Please provide some refrences</h2>
                <button onClick={addChild}>+</button>
                <button onClick={removeChild}>-</button>
            </div>
            <div className = "elementPage">
                {AllBlocks}
            </div>
        </div>
    )
}