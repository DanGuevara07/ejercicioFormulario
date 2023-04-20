//variables

let buttonChoices = [
    {'name':'Masculino', 'btnattr':'btn btn-primary align-self-center'},
    {'name':"Femenino", 'btnattr':'btn btn-pink align-self-center'},
    {'name':"Seleccione...", 'btnattr':'btn btn-secondary align-self-center'},
]
let formFields = [
    {'id':'#firstName', 'value': ''},
    {'id':'#firstLastName', 'value': ''},
    {'id':'#desiredSalary', 'value': '0'},
    {'id':'#email', 'value': ''},
    {'id':'#gender', 'value': 'Seleccione...'},
    {'id':'#position', 'value': 'Seleccione...'},
]
let candidates=[];
let invalidChars = [
    "-",
    "+",
    "e",
  ];

//events
document.querySelector('#gender').addEventListener('input' ,() =>{
    let currentValue = document.querySelector('#gender').value;
    buttonColor(currentValue);
})
document.querySelector('#position').addEventListener('input' ,() =>{
    let currentValue = document.querySelector('#position').value;
    otherCharge(currentValue);
})
document.querySelector('#submitbtn').addEventListener('click' ,() =>{
    // console.log(document.querySelector('#email').value)
    saveCandidate();
})
document.querySelector('#desiredSalary').addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
});

//functions
function otherCharge(value){
    if(value==='Otro...'){
        document.querySelector('#othercharge').setAttribute('class','shown')
    }else{
        document.querySelector('#othercharge').setAttribute('class','hidden')
    } 

}
function checkFields(){
    console.log(document.querySelector('#desiredSalary').value);
    let result = true;
    let message = 'Llene todos los campos porfavor'
    formFields.forEach(function(current){
        if(document.querySelector(current.id).value === current.value){
           result = false;
        }
    })
    if(document.querySelector('#position').value==='Otro...'){
        if(document.querySelector('#otherPosition').value===''){
            result= false;
            message  += '\n El campo de otro cargo está vacio'
        }
    }
    // if(isNaN(document.querySelector('#desiredSalary').value)){
    //     result=false;
    //     message += '\n El campo de número tiene un valor prohibido'
    // }
    return [result, message];
}
function buttonColor(value){
    let result = buttonChoices.find(function(option){
        return option.name === value;
    })
    document.querySelector('#submitbtn').setAttribute('class', result.btnattr);
}
function saveCandidate(){
    let result = checkFields()
    if(result[0]){
        let firstName = document.querySelector('#firstName').value;
        let secondName = document.querySelector('#secondName').value;
        let firstLastName = document.querySelector('#firstLastName').value;
        let secondLastName = document.querySelector('#secondLastName').value;
        let desiredSalary = document.querySelector('#desiredSalary').value;
        let email = document.querySelector('#email').value;
        let gender = document.querySelector('#gender').value;
        let position = document.querySelector('#position').value;
        let otherPosition = document.querySelector('#otherPosition').value;
        candidates.push(
            {
                'firstName': firstName,
                'secondName': secondName,
                'firstLastName': firstLastName,
                'secondLastName': secondLastName,
                'desiredSalary': desiredSalary,
                'email': email,
                'gender': gender,
                'position': position,
                'otherPosition': otherPosition,

            }
        )
        document.querySelector('#firstName').value=''
        document.querySelector('#secondName').value=''
        document.querySelector('#firstLastName').value=''
        document.querySelector('#secondLastName').value=''
        document.querySelector('#desiredSalary').value=''
        document.querySelector('#email').value=''
        document.querySelector('#gender').value='Seleccione...'
        document.querySelector('#position').value='Seleccione...'
        document.querySelector('#otherPosition').value=''
        document.querySelector('#othercharge').setAttribute('class','hidden')
        document.querySelector('#submitbtn').setAttribute('class', 'btn btn-primary align-self-center');
        alert('Todo Correcto Datos Guardados');
        console.log(candidates);
    }else{
        alert(result[1]);
    }

}

    