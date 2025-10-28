import RefBlock from "./RefBlock"
import { useState, useEffect } from "react"

export default function References({saveList, data}){
    const [refList, setRefList] = useState( data || [])

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

    useEffect(() => {
            saveList(refList);
    }, [refList, saveList]);

    return(
        <>
            <div className="elementHeader">
                <h2>Please provide some refrences</h2>
                <button onClick={addChild}>+</button>
                <button onClick={removeChild}>-</button>
            </div>
            <div className = "elementPage">
                {AllBlocks}
            </div>
        </>
    )
}