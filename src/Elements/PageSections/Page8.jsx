import { useState, useEffect } from "react";

export default function VeteranStatus({saveList, data}){

    const [vetStatus, setVetStatus] = useState(data || "")

    useEffect(() => {
        if(vetStatus !== data){
            saveList(vetStatus)
        };
    }, [vetStatus, saveList]);

    return(
        <div>
        <h1>Voluntary Self-Identification of “Protected” Veteran Status</h1>
        <div>
            <div>
                <h2>Why Are You Being Asked to Complete This Form?</h2>
                <p>
                    Because we do business with the government, we must reach out to current employees, new hires and applicants, and
                    take affirmative action to employ and advance in employment: (1) disabled veterans; (2) recently separated veterans; (3)
                    active duty wartime or campaign badge veterans; and (4) Armed Forces service medal veterans. These classifications are
                    defined as follows:
                </p>
            </div>
            <div>
                <h2>Definitions:</h2>
                <div>
                    <ul>
                        <li>
                            <p>A “disabled veteran” is one of the following:</p>
                            <ol>
                                <li>
                                    a veteran of the U.S. military, ground, naval or air service who is entitled to compensation (or who but
                                    for the receipt of military retired pay would be entitled to compensation) under laws administered by
                                    the Secretary of Veterans Affairs; or
                                </li>
                                <li>
                                    a person who was discharged or released from active duty because of a service-connected disability.
                                    A “recently separated veteran” means any veteran during the three-year period beginning on the date
                                    of such veteran's discharge or release from active duty in the U.S. military, ground, naval, or air service.
                                </li>
                            </ol>
                        </li>
                        <li>
                            An “active duty wartime or campaign badge veteran” means a veteran who served on active duty in the U.S.
                            military, ground, naval or air service during a war, or in a campaign or expedition for which a campaign badge
                            has been authorized under the laws administered by the Department of Defense.
                        </li>
                        <li>
                            An “Armed forces service medal veteran” means a veteran who, while serving on active duty in the U.S. military,
                            ground, naval or air service, participated in a United States military operation for which an Armed Forces service
                            medal was awarded pursuant to Executive Order 12985.
                        </li>
                    </ul>
                    <p>
                        Protected veterans may have additional rights under USERRA - the Uniformed Services Employment and
                        Reemployment Rights Act. In particular, if you were absent from employment in order to perform service in the
                        uniformed service, you may be entitled to be re-employed by your employer in the position you would have
                        obtained with reasonable certainty if not for the absence due to service. For more information, call the U.S.
                        Department of Labor's Veterans Employment and Training Service (VETS), toll- free, at 1-866-4-USA-DOL.
                    </p>
                    <p>
                        To help us measure how well we are doing, we are asking you to tell us if you are an individual as defined above.
                        Completing this form is voluntary, but we hope that you will choose to fill it out. If you are applying for a job, any answer
                        you give will be kept private and will not be used against you in any way.
                    </p>
                </div>
            </div>
            <div>
                <h2>APPLICANT</h2>
                <p>
                    If you believe you belong to any of the categories of protected veterans listed above, please indicate by checking
                    the appropriate box below. As a Government contractor subject to VEVRAA, we request this information in order to
                    measure the effectiveness of the outreach and positive recruitment efforts we undertake pursuant to VEVRAA.
                </p>
            </div>
            <div className="RadioContainer">
                <div>
                    <input type = "Radio" id = "Yes" name = "vetGroup" value="Yes" required
                        onChange={(e)=>setVetStatus(e.target.value)}
                        checked={vetStatus === "Yes"}>
                    </input>
                    <label htmlFor="Yes"> I identify as one ore more of the classifications</label>
                </div>
                <div>
                    <input type = "Radio" id = "No" name = "vetGroup" value="No" required
                        onChange={(e)=>setVetStatus(e.target.value)}
                        checked={vetStatus === "No"}>
                    </input>
                    <label htmlFor="No"> I am not a protected veteran</label>
                </div>
                <div>
                    <input type = "Radio" id = "Yes" name = "vetGroup" value="NA" required
                        onChange={(e)=>setVetStatus(e.target.value)}
                        checked={vetStatus === "NA"}>
                    </input>
                    <label htmlFor="NA"> I do not wish to answer</label>
                </div>               </div>
            </div>
        </div>
    )
}