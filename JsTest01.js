let nombre = 'Ponciano';
const apellido = 'Huarcaya';

const miFunction = (param1, param2)=>{
    return `${param1} ${param2}`
}

var fullName = `Mi apellido es ${apellido} y mi nombre es ${apellido} ${miFunction('Edad 34', 'Pais Peru')}`;

const user = {
    name: 'Administrador',
    lastname: 'Apellido',
    hobbies: ['Futbol','Basquet']
}

const {name,lastname,hobbies}= user

console.log(`${name} ${lastname} ${hobbies}`);

