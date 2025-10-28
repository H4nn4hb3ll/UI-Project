
import { useState, useEffect, useRef } from "react"
import DocumentPage from "./PageSections/Page0.jsx"
import Personalinfo from "./PageSections/Page1.jsx"
import Application from "./PageSections/Page2.jsx"
import EmploymentHistory from "./PageSections/Page3.jsx"
import Education from "./PageSections/Page4.jsx"
import References from "./PageSections/Page5.jsx"
import EmergencyContacts from "./PageSections/Page6.jsx"
import DisabilitiesDeclaration from "./PageSections/Page7.jsx"
import VeteranStatus from "./PageSections/Page8.jsx"
import AckSubmit from "./PageSections/Page9.jsx"
import {validateForm} from "../Validator.js"

export default function Page(){
    const [personal, setPersonal] = useState([])
    const[app, setApp] = useState([])
    const [emphistory, setEmpHistory] = useState([])
    const [eduHistoty, setEduHistory] = useState([])
    const [refs, setRefs] = useState([])
    const [emgs, setEmgs] = useState([])
    const [disState, setDisState] = useState("")
    const [vetState, setVetState] = useState("")
    const [errors, setErrors] = useState(new Array(9).fill(false));
    const selector = useRef([]);

    //need states for personal info, and application, still need disabilities and veteran status
    //need to hook up the verification to the page
    const Section = [() => <Personalinfo data={personal} saveList={setPersonal}/>, 
                    () => <Application data={app} saveList={setApp}/>, 
                    () => <EmploymentHistory data={emphistory} saveList={setEmpHistory} />, 
                    () => <Education data={eduHistoty} saveList={setEduHistory}/>, 
                    () => <References data={refs} saveList={setRefs}/>, 
                    () => <EmergencyContacts data = {emgs} saveList={setEmgs}/>, 
                    () => <DisabilitiesDeclaration data = {disState} saveList={setDisState}/>, 
                    () => <VeteranStatus data = {vetState} saveList={setVetState}/>, 
                    () => <AckSubmit errors={errors}/>]
    const [pageState, setPage] = useState(0);
    const CurrentSection = Section[pageState];

    
    let adv = () => {
        if(pageState >= 9){
            alert("page submitted")
        } else {
            if(!validateForm(pageState)){
                let hasErrors = validateForm(pageState);

                if (selector.current[pageState]) {
                    selector.current[pageState].style.color = hasErrors ? "red" : "black";
                }

                let newPage = pageState + 1;
                setPage(newPage);
            } else {
                let hasErrors = validateForm(pageState);

                if (selector.current[pageState]) {
                    selector.current[pageState].style.color = hasErrors ? "red" : "black";
                }

                setErrors(prev => {
                    const newErrors = [...prev];
                    newErrors[pageState] = hasErrors;
                    return newErrors;
                });
            }
        }
    }

    let back = () => {
        if(pageState <= 0){
            alert("Too far back")
        } else {
            let hasErrors = validateForm(pageState);

            if (selector.current[pageState]) {
                selector.current[pageState].style.color = hasErrors ? "red" : "black";
            
            }
            let newPage = pageState - 1;
            setPage(newPage);
        }
    }

    let handleNav= (page) => {
        let prevPage = pageState
        let hasErrors = validateForm(pageState);
        if (selector.current[pageState]) {
            selector.current[pageState].style.color = hasErrors ? "red" : "black";
        }

        // update errors array for current page
        setErrors(prev => {
            const newErrors = [...prev];
            newErrors[pageState] = hasErrors;
            return newErrors;
        });

        setPage(page)
    }

    return(
        <>
            <SectionSelector  handler = {handleNav} selector={selector}/>
            <CurrentSection />
            <div className="navigationElement">
                <div>
                    {(pageState > 0) ? <button onClick={back}>Previous</button> : <div></div>}
                </div>
                <div>
                    {(pageState < 8) ? <button onClick={adv}>Next</button> : <div></div>}
                </div>
            </div>
        </>
    )
}

function SectionSelector({handler, selector}){

    return(
        <div>
            <div id = "sectionBox">
                <div ref={el => selector.current[0] = el} className = "sectionSelector" onClick = {() => handler(0)}>Personal information</div>
                <div ref={el => selector.current[1] = el} className = "sectionSelector" onClick = {() => handler(1)}>Availability and job prefrences</div>
                <div ref={el => selector.current[2] = el} className = "sectionSelector" onClick = {() => handler(2)}>Employment History</div>
                <div ref={el => selector.current[3] = el} className = "sectionSelector" onClick = {() => handler(3)}>Education</div>
                <div ref={el => selector.current[4] = el} className = "sectionSelector" onClick = {() => handler(4)}>References</div>
                <div ref={el => selector.current[5] = el} className = "sectionSelector" onClick = {() => handler(5)}>Emergency Contacts</div>
                <div ref={el => selector.current[6] = el} className = "sectionSelector" onClick = {() => handler(6)}>Voluntary Disabilities Declaration</div>
                <div ref={el => selector.current[7] = el} className = "sectionSelector" onClick = {() => handler(7)}>Veteran Status</div>
            </div>
            <div id = "submissionSelector">
                <div onClick = {() => handler(8)}>Submission and Acknoledgement</div>
            </div>
        </div>
    )
}