export function validateControl(control, name, length){
	let element = document.getElementById(name);
	
	if(!validLength(control, length)){
		return false;
	} else if (!validNumber(control)){
		return false;
	} else {
		return true;
	}	
}

export function validateEmail(control){
	//look for @ and .XXX
	if(control.match(/@/) && control.match(/\S\w\w\w$/)){
		return false;
	} else {
		return true;
	}
}

export function validateForm(page){
	
	//grab all the elements
	let txtBoxes = document.querySelectorAll('input[type="text"], textarea');
    let selector = document.getElementsByClassName("sectionSelector");
	
	//reset all warnings, change the border colors back to black
	let errors = false;
	for(let i = 0; i < txtBoxes.length; i++){
		txtBoxes[i].style.borderColor = "Black";
		txtBoxes[i].title = "Valid";
	}
	
	//check each text box
    for(let i = 0; i < txtBoxes.length; i++){
        if(txtBoxes[i].id === "Zip"){
            if(validateZip(txtBoxes[i].value)){
                txtBoxes[i].style.borderColor = "Red";
                errors = true
            }
        } else if(txtBoxes[i].id === "Phone"){
            if(validatePhone(txtBoxes[i].value)){
                txtBoxes[i].style.borderColor = "Red";
                errors = true
            }
        }  else if(txtBoxes[i].id === "Email"){
            if(validateEmail(txtBoxes[i].value)){
                txtBoxes[i].style.borderColor = "Red";
                errors = true
            }
        }
    }
    return errors
}

export function validateZip(control){
    control = control.trim();
    if(!control.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)){
        return true;
    } else {
        return false;
    }
}

export function validatePhone(control){
	
	//make a string with just digits
	control = control.trim();
	let pNum = "";
	for(let i = 0; i < control.length; i++){
		if(control.charAt(i).match(/\d/)){
			pNum = pNum + control.charAt(i);
		}
	}
	
	if(!validNumber(pNum)){
		return true;
	} else if(pNum.length != 10){
		return true;
	} else {
		return false;
	}
}

export function validLength(value, length){
	//value gets turned into a string to leverage the length property
	value = value + "";
	if (value.length === length){
		return true;
	} else {
		return false;
	}
	
}

export function validNumber(value){
	//makes value an int, works if value is already an int
	let num = parseInt(value);
	
	if (!isNaN(num)){
		return true;
	} else {
		return false;
	}
}