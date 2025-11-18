import { useState, useEffect } from "react";
import {validateZip, validatePhone, validateEmail} from "../../Validator.js"

export default function RefBlock({data, updater, _class}){
    const [name, setName] = useState(data.name || "")
    const [phone, setPhone] = useState(data.phone || "")
    const [email, setEmail] = useState(data.email || "")
    const [rel, setRel] = useState(data.rel || "")
    const [id, setId] = useState(data.id)

    useEffect(
        () => {
            if(name !== data.name || phone !== data.phone || email !== data.email || rel !== data.rel){
                updater(id, name, phone, email, rel)
            }
        }, [id, name, phone, email, rel, updater]
    )

    return(
        <div className={_class}>
            <div>
                <div>
					<label htmlFor = "Name">Name</label>
				</div>
				<input type = "text" name = "Name" onBlur={(e) => setName(e.target.value)} defaultValue={data.name} required></input>
            </div>
            <div>
                <div>
					<label htmlFor = "Email">Email address</label>
				</div>
				<input type = "text" name = "Email" id = "Email" 
                onBlur={(e) => {
                    setEmail(e.target.value)
                    if (!validateEmail(e.target.value)) {
                        e.target.style.backgroundColor = "red";
                    } else {
                        e.target.style.backgroundColor = "white";
                    }
                }} 
                defaultValue={data.email}
                required></input>
            </div>
            <div>
                <div>
					<label htmlFor = "Phone">Phone Number</label>
				</div>
				<input type = "text" name = "Phone" id= "Phone" 
                onBlur={(e) => {
                    setPhone(e.target.value)
                    if (!validatePhone(e.target.value)) {
                        e.target.style.backgroundColor = "red";
                    } else {
                        e.target.style.backgroundColor = "white";
                    }
                }} 
                defaultValue={data.phone}
                required
                ></input>
            </div>
            <div>
                <div>
					<label htmlFor = "Relation">Relationship</label>
				</div>
				<input type = "text" name = "Relation" onBlur={(e) => setRel(e.target.value)} defaultValue={data.rel} required></input>
            </div>
        </div>
    )

}