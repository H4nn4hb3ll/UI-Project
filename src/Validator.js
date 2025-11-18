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
	if(!control) return false;
	
	//look for @ and .XXX
	if(control.includes('@') && /\.[a-zA-Z]{2,}$/.test(control)){
		return true;
	} else {
		return false;
	}
}

export function validateForm(page){
	
	//grab all the elements
	let txtBoxes = page.querySelectorAll('input[type="text"], textarea');
	
	//reset all warnings, change the border colors back to black
	let errors = false;
	for(let i = 0; i < txtBoxes.length; i++){
		txtBoxes[i].removeAttribute("data-error");
		txtBoxes[i].style.borderColor = "Black";
		txtBoxes[i].title = "Valid";
	}
	
	//check each text box
    for(let i = 0; i < txtBoxes.length; i++){
		if(txtBoxes[i].required && txtBoxes[i].value == ""){
			if(!txtBoxes[i].parentElement.querySelector('.required')){
				const newElement = document.createElement('div');
				newElement.textContent = 'This field is required';
				newElement.classList.add('required');
				txtBoxes[i].parentElement.appendChild(newElement);
			}
			errors = true;
		}else if(txtBoxes[i].id === "Zip"){
            if(!validateZip(txtBoxes[i].value)){
                txtBoxes[i].style.borderColor = "Red";
                errors = true
            }
        } else if(txtBoxes[i].id === "Phone"){
            if(!validatePhone(txtBoxes[i].value)){
                txtBoxes[i].style.borderColor = "Red";
                errors = true
            }
        }  else if(txtBoxes[i].id === "Email"){
            if(!validateEmail(txtBoxes[i].value)){
                txtBoxes[i].style.borderColor = "Red";
                errors = true
            }
        }
    }
    return errors
}

export function validateZip(control){
	if(!control) return false;

    control = (control || "").trim();
    if(control.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/) || control == ""){
        return true;
    } else {
        return false;
    }
}

export function validatePhone(control){
	if(!control) return false;

	//make a string with just digits
	control = (control).trim();
	let pNum = "";
	for(let i = 0; i < control.length; i++){
		if(control.charAt(i).match(/\d/)){
			pNum = pNum + control.charAt(i);
		}
	}
	
	if(!validNumber(pNum) || pNum.length != 10){
		return false;
	} else {
		return true;
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