import { useState, useEffect } from "react";

export default function DisabilitiesDeclaration({data, saveList}){

    const [disabilityState, setDisability] = useState(data || "")

    useEffect(() => {
        if(disabilityState !== data){
            saveList(disabilityState)
        };
    }, [disabilityState, saveList]);

    return(
        <div>
        <h1>Voluntary self-identification of disabilities</h1>
        <div>
            <div>
                <h2>Why are you being asked to complete this form?</h2>
                <p>
                    Because we do business with the government, and consistent with our diversity and inclusion values, 
                    we must reach out to, hire, and provide equal opportunity to qualified people with disabilities. 
                    To help us measure how well we are doing, we are asking you to tell us if you have a disability or 
                    if you ever had a disability. Completing this form is voluntary, but we hope that you will choose to 
                    fill it out. If you are applying for a job, any answer you give will be kept private and will not 
                    be used against you in any way. If you already work for us, your answer will not be used against you
                    in any way. Because a person may become disabled at any time, we are required to ask all of our 
                    employees to update their information every five years. You may, as an applicant or employee, voluntarily 
                    self-identify as having a disability on this form without fear of any punishment because you did 
                    not identify as having a disability earlier.
                </p>
            </div>
            <div>
                <h2>How do I know if I have a disability?</h2>
                <p>
                    You are considered to have a disability if you have a physical or mental impairment or medical condition 
                    that substantially limits a major life activity, or if you have a history or record of such an impairment 
                    or medical condition.
                </p>
            </div>
            <div>
                <h2>Reasonable Accommodation Notice</h2>
                <p>
                    Federal law requires employers to provide reasonable accommodation to qualified individuals with disabilities. 
                    Please tell us if you require a reasonable accommodation to apply for a job or to perform your job. Examples 
                    of reasonable accommodation include making a change to the application process or work procedures, providing 
                    documents in an alternate format, using a sign language interpreter, or using specialized equipment.
                </p>
            </div>
            <div className="RadioContainer">
                    <div>
                        <input type = "Radio" id = "Yes" name = "disabilityGroup" value="Yes" required
                            onChange={(e)=>setDisability(e.target.value)}
                            checked={disabilityState === "Yes"}>
                        </input>
                        <label htmlFor="Yes">Yes, I have a disability (or previously had a disability)</label>
                    </div>

                    <div>
                        <input type = "Radio" id = "No" name = "disabilityGroup" value="No" required
                            onChange={(e)=>setDisability(e.target.value)}
                            checked={disabilityState === "No"}>
                        </input>
                        <label htmlFor="No">No, I dont have a disability</label>
                    </div>
                    
                    <div>
                        <input type = "Radio" id = "Yes" name = "disabilityGroup" value="NA" required
                            onChange={(e)=>setDisability(e.target.value)}
                            checked={disabilityState === "NA"}>
                        </input>
                        <label htmlFor="NA">I do not wish to answer</label>
                    </div>
            </div>
        </div>
        </div>
    )
}