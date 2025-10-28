import { useState, useEffect } from "react"

export default function EmploymentBlock({updater, data, _class}){
    const [name, setName] = useState(data.name || "")
    const [title, setTitle] = useState(data.title || "")
    const [responsibilities, setRes]  = useState(data.responsibilities || "")
    const [id, setID] = useState(data.id)

    useEffect(() => {
        if (
            name !== data.name ||
            title !== data.title ||
            responsibilities !== data.responsibilities
        ) {
            updater(id, name, title, responsibilities);
        }
    }, [id, name, title, responsibilities]);

    return(
        <div className={_class}>
            <div>
				<div>
					<label htmlFor = "CompanyName">Company</label>
				</div>
				<input type = "text" name = "CompanyName" onBlur={(e) => setName(e.target.value)} defaultValue={data.name} required></input>
			</div>
            <div>
                <div>
					<label htmlFor = "Title">Title</label>
				</div>
				<input type = "text" name = "Title" onBlur={(e) => setTitle(e.target.value)} defaultValue={data.title} required></input>
            </div>
            <div>
                <div>
					<label htmlFor = "Responsibilities">Responsibilities</label>
				</div>
				<input type = "text" name = "Responsibilities" onBlur={(e) => setRes(e.target.value)} defaultValue={data.responsibilities} required></input>
            </div>
        </div>
    )
}