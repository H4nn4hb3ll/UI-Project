import { useState, useEffect, useRef } from "react";

export default function Application({saveList, data, setRef}){

    let minDate = new Date();
    let maxDate = new Date(minDate)

    const[appState, setAppState] = useState(data ||{
        startDate: "",
        employmentType: "",
        desiredSalary: "",
        sun: "",
            sundayStart: minDate,
            sundayEnd: "",
        mon: "",
            mondayStart: minDate,
            mondayEnd: "",
        tues: "",
            tuesdayStart: minDate,
            tuesdayEnd: "",
        wed: "",
            wednesdayStart: minDate,
            wednesdayEnd: "",
        thurs: "",
            thursdayStart: minDate,
            thursdayEnd: "",
        fri: "",
            fridayStart: minDate,
            fridayEnd: "",
        sat: "",
            satdayStart: minDate,
            satdayEnd: "",
        desiredWeeklyHours: ""

    })
    const appStateRef = useRef(appState)

    //update the ref when the list changes
    useEffect(() => {
        appStateRef.current = appState;
    }, [appState]);

    //send the ref up on unmount
    useEffect(() => {
        return () => {
            saveList(appStateRef.current);
        }
    }, []);

    //send the ref up on mount
    useEffect(() => {
        saveList(appStateRef.current);
    }, []);

    //make the container ref on mount
    const containerRef = useRef(null);
    useEffect(() => {
        if (setRef) setRef(containerRef.current);
    }, []);
    
    maxDate.setMonth(minDate.getMonth() + 1)
    const today = new Date().toISOString().split("T")[0];

    return(
        <div ref={containerRef}>
            <div className="Page">
        
            <div>
				<div>
					<label htmlFor = "StartDate">When can you start working for us?</label>
				</div>
				<input type = "date" name = "StartDate" id = "StartDate" 
                    min={today}
                    onChange={(e) => setAppState((prev) => ({...prev, startDate: e.target.value}))}
                    defaultValue={data.startDate}
                    required>
                </input>
			</div>

            <div>
                <div>
					<label htmlFor = "EmployementType">Employment type desired</label>
				</div>
                <div>
                    <input type = "Radio" id = "PartTime" name = "EmployementTypegroup" defaultValue="Yes" required
                        onChange={(e) => setAppState((prev) => ({...prev, employmentType: e.target.value}))}
                        checked={appState.employmentType === "Yes"}>
                    </input>
                    <label htmlFor="PartTime">Part Time</label>

                    <input type = "Radio" id = "FullTime" name = "EmployementTypegroup" defaultValue="No" required
                        onChange={(e) => setAppState((prev) => ({...prev, employmentType: e.target.value}))}
                        checked={appState.employmentType === "No"}>
                    </input>
                    <label htmlFor="FullTime">Full Time</label>
                </div>
            </div>

            <div>
				<div>
					<label htmlFor = "DesiredSalary">Desired Salary (usd)</label>
				</div>
				<input type = "number" name = "DesiredSalary" id = "DesiredSalary" 
                    min={0} max={9999999}
                    onBlur={(e) => setAppState((prev) => ({...prev, desiredSalary: Number(e.target.value)}))}
                    defaultValue={data.desiredSalary}
                    required>
                </input>
			</div>

            

            <div>
				<div>
					<label htmlFor = "DesiredWeeklyHours">Desired weekly hours</label>
				</div>
				<input type = "number" name = "DesiredWeeklyHours" id = "DesiredWeeklyHours" 
                    min={0} max={40}
                    onBlur={(e) => {
                        let value = Number(e.target.value);
                        if (value < 0) value = 0;
                        if (value > 40) value = 40;
                        e.target.value = value;

                        setAppState((prev) => ({...prev, desiredWeeklyHours: Number(e.target.value)}))
                    }}
                    defaultValue={data.desiredWeeklyHours} 
                    required>
                </input>
			</div>

            </div>
            <div id = "dailyAvailability">
				<h3>Days Available</h3>

                <div>
                    <label>
                        <input type = "checkbox" name = "DaysAvailable" className="dayHeader"   
                            onChange={(e) => setAppState((prev) => ({...prev, sun: e.target.checked}))}
                            defaultChecked={appState.sun}>
                        </input>
                        Sunday
                        <div className="timeField">
                            <label htmlFor="sundayStart">start</label>
                            <input type="number" 
                                min={0} max={23} 
                                onBlur={(e) => setAppState((prev) => ({...prev, sundayStart: Number(e.target.value)}))}
                                defaultValue={data.sundayStart}>
                            </input>
                            <label htmlFor="sundayEnd">End</label>
                            <input type="number" 
                                min={appState.sundayStart} max={24} 
                                onBlur={(e) => setAppState((prev) => ({...prev, sundayEnd: Number(e.target.value)}))}
                                defaultValue = {data.sundayEnd}>
                            </input>
                        </div>
                    </label>

                    <label>
                        <input type = "checkbox" name = "DaysAvailable"  className="dayHeader"  
                            onChange={(e) => setAppState((prev) => ({...prev, mon: e.target.checked}))}
                            defaultChecked={appState.mon}>
                        </input>
                        Monday
                        <div className="timeField">
                            <label htmlFor="mondayStart">start</label>
                            <input type="number" 
                                min={0} max={23} 
                                onBlur={(e) => setAppState((prev) => ({...prev, mondayStart: Number(e.target.value)}))}
                                defaultValue={data.mondayStart}>
                            </input>
                            <label htmlFor="mondayEnd">End</label>
                            <input type="number" 
                                min={appState.mondayStart} max={24} 
                                onBlur={(e) => setAppState((prev) => ({...prev, mondayEnd: Number(e.target.value)}))}
                                defaultValue = {data.mondayEnd}>
                            </input>
                        </div>
                    </label>

                    <label>
                        <input type = "checkbox" name = "DaysAvailable"  className="dayHeader" 
                            onChange={(e) => setAppState((prev) => ({...prev, tues: e.target.checked}))}
                            defaultChecked={appState.tues}>
                        </input>
                        Tuesday
                        <div className="timeField">
                            <label htmlFor="tuesdayStart">start</label>
                            <input type="number" 
                                min={0} max={23} 
                                onBlur={(e) => setAppState((prev) => ({...prev, tuesdayStart: Number(e.target.value)}))}
                                defaultValue={data.tuesdayStart}>
                            </input>
                            <label htmlFor="tuesdayEnd">End</label>
                            <input type="number" 
                                min={appState.tuesdayStart} max={24} 
                                onBlur={(e) => setAppState((prev) => ({...prev, tuesdayEnd: Number(e.target.value)}))}
                                defaultValue = {data.tuesdayEnd}>
                            </input>
                        </div>
                    </label>

                    <label>
                        <input type = "checkbox" name = "DaysAvailable"  className="dayHeader"
                            onChange={(e) => setAppState((prev) => ({...prev, wed: e.target.checked}))}
                            defaultChecked={appState.wed}>
                        </input>
                        WednesDay
                        <div className="timeField">
                            <label htmlFor="wednesdayStart">start</label>
                            <input type="number" 
                                min={0} max={23} 
                                onBlur={(e) => setAppState((prev) => ({...prev, wednesdayStart: Number(e.target.value)}))}
                                defaultValue={data.wednesdayStart}>
                            </input>
                            <label htmlFor="wednesdayEnd">End</label>
                            <input type="number" 
                                min={appState.wednesdayStart} max={24} 
                                onBlur={(e) => setAppState((prev) => ({...prev, wednesdayEnd: Number(e.target.value)}))}
                                defaultValue = {data.wednesdayEnd}>
                            </input>
                        </div>
                    </label>

                    <label>
                        <input type = "checkbox" name = "DaysAvailable"  className="dayHeader"
                            onChange={(e) => setAppState((prev) => ({...prev, thurs: e.target.checked}))}
                            defaultChecked={appState.thurs}>
                        </input>
                        Thursday
                        <div className="timeField">
                            <label htmlFor="thursdayStart">start</label>
                            <input type="number" 
                                min={0} max={23} 
                                onBlur={(e) => setAppState((prev) => ({...prev, thursdayStart: Number(e.target.value)}))}
                                defaultValue={data.thursdayStart}>
                            </input>
                            <label htmlFor="thursdayEnd">End</label>
                            <input type="number" 
                                min={appState.thursdayStart} max={24} 
                                onBlur={(e) => setAppState((prev) => ({...prev, thursdayEnd: Number(e.target.value)}))}
                                defaultValue = {data.thursdayEnd}>
                            </input>
                        </div>
                    </label>

                    <label>
                        <input type = "checkbox" name = "DaysAvailable" className="dayHeader" 
                            onChange={(e) => setAppState((prev) => ({...prev, fri: e.target.checked}))}
                            defaultChecked={appState.fri}>
                        </input>
                        Friday
                        <div className="timeField">
                            <label htmlFor="fridayStart">start</label>
                            <input type="number" 
                                min={0} max={23} 
                                onBlur={(e) => setAppState((prev) => ({...prev, fridayStart: Number(e.target.value)}))}
                                defaultValue={data.fridayStart}>
                            </input>
                            <label htmlFor="fridayEnd">End</label>
                            <input type="number" 
                                min={appState.fridayStart} max={24} 
                                onBlur={(e) => setAppState((prev) => ({...prev, fridayEnd: Number(e.target.value)}))}
                                defaultValue = {data.fridayEnd}>
                            </input>
                        </div>
                    </label>

                    <label>
                        <input type = "checkbox" name = "DaysAvailable" className="dayHeader"
                            onChange={(e) => setAppState((prev) => ({...prev, sat: e.target.checked}))}
                            checked={appState.sat}>
                        </input>
                        Saturday
                        <div className="timeField">
                            <label htmlFor="saturdayStart">start</label>
                            <input type="number" 
                                min={0} max={23} 
                                onBlur={(e) => setAppState((prev) => ({...prev, saturdayStart: Number(e.target.value)}))}
                                defaultValue={data.saturdayStart}>
                            </input>
                            <label htmlFor="saturdayEnd">End</label>
                            <input type="number" 
                                min={appState.saturdayStart} max={24} 
                                onBlur={(e) => setAppState((prev) => ({...prev, saturdayEnd: Number(e.target.value)}))}
                                defaultValue = {data.saturdayEnd}>
                            </input>
                        </div>
                    </label>
                </div>
			</div>
        </div>
    )
}