export default function AckSubmit({errors}){

    let sub = () => {
        for(let i = 0; i < errors.length; i++){
            if(errors[i] == true){
                alert("there are some errors in your form, please go back and fix them before you resubmit")
                return
            }
        }
        alert("page was submitted")
    }
    return(
        <div className="SubmitPage">
            <div>
                <p>
                    In applying for this job, I agree that:
                    Applying or being hired does not create a contract. Handbooks, benefits, or policies do not make a contract. 
                    This job is at-will. I or Unfinished Business can end it at any time. No notice or reason is needed. Only 
                    the president or general manager may change these terms. Unfinished Business may change benefits, rules, or 
                    procedures at any time.
                </p>
                <p>
                    All my answers will be checked. If I lie or leave info out, I can be fired. Unfinished Business may contact 
                    schools, past jobs, or references. They are not liable for problems from this contact. 
                    I agree to drug and alcohol tests before being hired and while being hired. If I fail, I can be fired. I may 
                    be given job related health exams. If I fail, I can be fired. 
                </p>
                <p>
                    Unfinished Business may check my background. This may include credit, character, or reputation checks. I can 
                    ask for details on the reports. By law info on these reports must be given. 
                </p> 
            </div>
            <input type="button" onClick={() => sub()} value="Submit" />
        </div>
    )
}