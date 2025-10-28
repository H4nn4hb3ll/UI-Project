import { useState, useEffect } from "react";

export default function Personalinfo({saveList, data}){
    
    const [personalState, setPersonalState] = useState(data || {
        firstName: "",
        middleName: "",
        lastName: "",
        address: "",
        state: "",
        zip:"",
        phone:"",
        email:"",
        eightteen: "",
        maritalStatus: ""
    })

    useEffect(() => {
        if(personalState.firstName !== data.firstName ||
        personalState.middleName !== data.middleName ||
        personalState.lastName !== data.lastName ||
        personalState.address !== data.address ||
        personalState.state !== data.state ||
        personalState.zip !== data.zip ||
        personalState.phone !== data.phone ||
        personalState.email !== data.email ||
        personalState.eightteen !== data.eightteen ||
        personalState.maritalStatus !== data.maritalStatus){
            saveList(personalState)
        };
    }, [personalState, saveList]);

    return(
        <div className="Page">
			<div>
				<div>
					<label htmlFor = "FirstName">First Name</label>
				</div>
				<input type = "text" name = "FirstName" 
                    onBlur={(e)=>setPersonalState((prev) => ({...prev, firstName: e.target.value}))}
                    defaultValue={data.firstName} 
                    required>
                </input>
			</div>

            <div>
				<div>
					<label htmlFor = "MiddleName">Middle Name</label>
				</div>
				<input type = "text" name = "MiddleName"
                    onBlur={(e)=>setPersonalState((prev)=>({...prev, middleName: e.target.value}))}
                    defaultValue={data.middleName}>
                </input>
			</div>
			
			<div>
				<div>
					<label htmlFor = "LastName">Last Name</label>
				</div>
				<input type = "text" name = "LastName"
                    onBlur={(e)=>setPersonalState((prev)=>({...prev, lastName: e.target.value}))}
                    defaultValue={data.lastName}>
                </input>
			</div>
			
			<div>
				<div>
					<label htmlFor = "Address">Address</label>
				</div>
				<input type = "text" name = "Address"  required
                    onBlur={(e)=>setPersonalState((prev)=>({...prev, address: e.target.value}))}
                    defaultValue={data.address}>    
                </input>
			</div>

            <div>
				<div>
					<label htmlFor = "State">State</label>
				</div>
				<select name="State"
                    onChange={e=>setPersonalState((prev)=>({...prev, state:e.target.value}))}>
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
				<input type = "text" name = "Zip"  id = "Zip" placeholder = "12345" required
                    onBlur={(e)=>setPersonalState((prev)=>({...prev, zip: e.target.value}))}
                    defaultValue={data.zip}>
                </input>
			</div>
			
			<div>
				<div>
					<label htmlFor = "Phone">Phone #</label>
				</div>
				<input type = "text" name = "Phone" placeholder = "123-456-7890" id = "Phone" required
                    onBlur={(e)=>setPersonalState((prev)=>({...prev, phone: e.target.value}))}
                    defaultValue={data.phone}>
                </input>
			</div>

			<div>
				<div>
					<label htmlFor = "Email">Email Address</label>
				</div>
				<input type = "text" name = "Email" placeholder = "johndoe@gmail.com" id = "Email" required
                    onBlur={(e)=>setPersonalState((prev)=>({...prev, email: e.target.value}))}
                    defaultValue={data.email}>
                </input>
			</div>

            <div>
                <div>
					<label htmlFor = "Eighteen">Are you at least 18 years old?</label>
				</div>
                <div>
                    <input type = "Radio" id = "Yes" name = "Eighteengroup" value="Yes" required
                        onChange={(e)=>setPersonalState((prev)=>({...prev, eightteen: e.target.value}))}
                        checked={personalState.eightteen === "Yes"}>
                    </input>
                    <label htmlFor="Yes">Yes</label>

                    <input type = "Radio" id = "No" name = "Eighteengroup" value="No" required
                        onChange={(e)=>setPersonalState((prev)=>({...prev, eightteen: e.target.value}))}
                        checked={personalState.eightteen === "No"}>
                    </input>
                    <label htmlFor="No">No</label>
                </div>
            </div>

            <div>
				<div>
					<label htmlFor = "MarriedRadio">Marital Status</label>
				</div>
                <div>
                    <input type = "Radio" id = "Married" name = "Marriedgroup" value="Married" required
                        onChange={(e)=>setPersonalState((prev)=>({...prev, maritalStatus: e.target.value}))}
                        checked={personalState.maritalStatus === "Married"}>
                    </input>
                    <label htmlFor="Married">Married</label>

                    <input type = "Radio" id = "Single" name = "Marriedgroup" value="Single" required
                        onChange={(e)=>setPersonalState((prev)=>({...prev, maritalStatus: e.target.value}))}
                        checked={personalState.maritalStatus === "Single"}>
                    </input>
                    <label htmlFor="Single">Single</label>

                    <input type = "Radio" id = "Separated" name = "Marriedgroup" value="Separated" required
                        onChange={(e)=>setPersonalState((prev)=>({...prev, maritalStatus: e.target.value}))}
                        checked={personalState.maritalStatus === "Separated"}>
                    </input>
                    <label htmlFor="Separated">Separated</label>

                    <input type = "Radio" id = "Divorced" name = "Marriedgroup" value="Divorced" required
                        onChange={(e)=>setPersonalState((prev)=>({...prev, maritalStatus: e.target.value}))}
                        checked={personalState.maritalStatus === "Divorced"}>
                    </input>
                    <label htmlFor="Divorced">Divorced</label>

                    <input type = "Radio" id = "Widowed" name = "Marriedgroup" value="Widowed" required
                        onChange={(e)=>setPersonalState((prev)=>({...prev, maritalStatus: e.target.value}))}
                        checked={personalState.maritalStatus === "Widowed"}>
                    </input>
                    <label htmlFor="Widowed">Widowed</label>
                </div>
			</div>
        </div>
    )
}