import { useState, useEffect, use } from "react";


export default function EducationBlock({data, updater, _class}){
    const [type, setType] = useState(data.type || "")
    const [name, setName] = useState(data.name || "")
    const [start, setStart] = useState(data.start || "")
    const [end, setEnd] = useState(data.end || "")
    const [id, setId] = useState(data.id)

    useEffect(
        () => {
            if(type !== data.type || name !== data.name || start !== data.start || end !== data.end){
                updater(id, type, name, start, end)
            }
        }, [id, type, name, start, end, updater]
    )

    return (
        <>
        <div className={_class}>
            <div>
				<div>
					<label htmlFor = "type">Level of Eduction</label>
				</div>
				<select name="DegreeType" onChange={(e) => setType(e.target.value)} value={type}>
                    <option value = "">Select a type</option>
                    <option value="Highschool">High School</option>
                    <option value="associate">Associate's degree</option>
                    <option value="bachelor">Bachelor's degree</option>
                    <option value="master">Masters degree</option>
                    <option value="doctor">Doctorate degree</option>
                    <option value="vocation">Vocational Program</option>
                </select>
			</div>
            <div>
                <div>
					<label htmlFor = "Name">Name of school or program</label>
				</div>
				<input type = "text" name = "Name" onBlur={(e) => setName(e.target.value)} defaultValue={data.name} required></input>
            </div>
            <div>
                <div>
					<label htmlFor = "Start">Start Date</label>
				</div>
				<input type = "date" name="Start" onChange={(e) => setStart(e.target.value)} defaultValue={data.start} required></input>
            </div>
            <div>
                <div>
					<label htmlFor = "end">Graduation date</label>
				</div>
				<input type = "date" name="end" onChange={(e) => setEnd(e.target.value)} defaultValue={data.end} min={start} required></input>
            </div>
        </div>
        </>
    )
}