import EmergencyBlock from "./EmergencyBlock.jsx"
import { useState, useEffect, useRef } from "react"

export default function EmergencyContacts({saveList, data, setRef}){
    const [emgList, setEmgList] = useState( data || [])
    const emgListRef = useRef(emgList)

    const addChild = () => {
        setEmgList(emgList.concat({id: Date.now(), name: "", phone: "", address: "", zip: "", state:"", rel:""}))
    }

    const removeChild = () => {
        setEmgList(prev => prev.slice(0, -1))
    }

    const AllBlocks = emgList.map((block) =>
        (<EmergencyBlock
            _class="element" 
            key = {block.id}
            data={block}
            updater={(id, name, phone, address, zip, state, rel) => updateContacts(id, name, phone, address, zip, state, rel)}
        />)
    )

    const updateContacts = (id, name, phone, address, zip, state, rel) => {
        setEmgList((prev) => (prev.map((block) => block.id === id ? {id: id, name: name, phone: phone, address: address, zip: zip, state: state, rel: rel} : block)))
    }

    //update the ref when the list changes
    useEffect(() => {
        emgListRef.current = emgList;
    }, [emgList]);
        
    //send the ref up on unmount
    useEffect(() => {
        return () => {
            saveList(emgListRef.current);
        }
    }, []);
    
    //send the ref up on mount
    useEffect(() => {
        saveList(emgListRef.current);
    }, []);
        
    //make the container ref on mount
    const containerRef = useRef(null);
    useEffect(() => {
        if (setRef) setRef(containerRef.current);
    }, []);

    return(
        <div ref={containerRef}>
            <div className="elementHeader">
                <h2>Emergency contacts</h2>
                <button onClick={addChild}>+</button>
                <button onClick={removeChild}>-</button>
            </div>
            <div className = "elementPage">
                {AllBlocks}
            </div>
        </div>
    )
}