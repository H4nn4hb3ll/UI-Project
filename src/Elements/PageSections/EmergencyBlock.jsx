import { useState, useEffect } from "react";

export default function EmergencyBlock({data, updater, _class}){
    const [name, setName] = useState(data.name || "")
    const [phone, setPhone] = useState(data.phone || "")
    const [address, setAddress] = useState(data.address || "")
    const [zip, setZip] = useState(data.zip || "")
    const [state, setState] = useState(data.state || "")
    const [rel, setRel] = useState(data.rel || "")
    const [id, setId] = useState(data.id)

    useEffect(
        () => {
            if(name !== data.name || phone !== data.phone || address !== data.address || zip  !== data.zip || state !== data.state || rel !== data.rel){
                updater(id, name, phone, address, zip, state, rel)
            }
        }, [id, name, phone, address, zip, state, rel, updater]
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
                    <label htmlFor = "Address">Address</label>
                </div>
                <input type = "text" name = "Address" onBlur={(e) => setAddress(e.target.value)} defaultValue={data.address}></input>
            </div>
            <div>
				<div>
					<label htmlFor = "State">State</label>
				</div>
				<select name="State" onChange={(e) => setState(e.target.value)} value={state}>
                    <option value="" defaultValue="selected">Select a State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
			</div>
            <div>
				<div>
					<label htmlFor = "Zip">Zip Code</label>
				</div>
				<input type = "text" name = "Zip"  placeholder = "12345" id = "Zip" onBlur={(e) => setZip(e.target.value)} defaultValue={data.zip} required></input>
			</div>
            <div>
                <div>
                    <label htmlFor = "Phone">Phone Number</label>
                </div>
                <input type = "text" name = "Phone" id = "Phone" onBlur={(e) => setPhone(e.target.value)} defaultValue={data.phone}></input>
            </div>
            <div>
                <div>
                    <label htmlFor = "Relation">Relationship</label>
                </div>
                <input type = "text" name = "Relation" onBlur={(e) => setRel(e.target.value)} defaultValue={data.rel}></input>
            </div>
        </div>
    )

}