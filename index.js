let option;
let tasks = [
    {
        id: 1,
        day:1,
        task: 'ir a comer',
        state: 'pendiente'
    },
  
    {
        id: 2,
        day:2,
        task: 'juntada familiar',
        state: 'pendiente'
    },
];
const day = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo',
];

const states = [
    'En proceso',
    'Pendiente',
    'finalizado',
];
  
while(option !== 0) {
    option = Number (prompt('ingrese una opcion; \n1. agregar tarea \n2. ver tareas \n3. borrar tarea \n0. salir '));
    switch (option) {
        case 1:
            const day = Number (prompt('ingrese el dia de la semana por la tarea que desea crear:\n1. lunes \n2. martes \n3. miercoles \n.4 jueves \n5. viernes \n6. sabado \n7. domingo'));
            const task = prompt ('ingrese la tarea:');
            const state = Number(prompt('ingrese el estado de la tarea: \n1. En proceso \n2. Pendiente \n3. Finalizado'));
            const creationId = getLastID + 1;
            createtask (creationId, day, task, state);
            
            break; 

        case 2:
            getAllTasks ();

            break;

        case 3:
            let deleteId = Number(prompt('ingrese el id de la tarea a eliminar:'));
            deletetask();

            break;

        case 0: 
             alert('gracias,vuelva pronto');
            break;
    
        default:
            alert( 'la opcion ingresada no es correcta, intenta nuevamente');
            break;
    }
}

function createtask (id, day, task, state) {
          
    tasks.push ({
        id,
        day,
        task,
        state: states [ state - 1]
    });
    
}

function getAllTasks (){
    console.log ('----------------');
    tasks.forEach((task) => console.log(task.id + " - " + day[task.day - 1] + " - " + task.task + " - " + task.state));
}

function deletetask (id) {
    tasks = tasks.filter (task => task.id != id);
}

function getLastID (){
    return tasks.length;
}


const dias = ['lunes', 'martes', 'miercoles','jueves','viernes','sabado','domingo'];
let select = document.createElement("select");
for (let index = 0; index < dias.length; index++) {
    select.innerHTML +=  `<option value='${index}'>${dias[index]}</option>`;
}

select.addEventListener('change', function (e) {
    const h3 = document.createElement('h3');
    h3.innerHTML = dias[e.target.value];
    document.body.appendChild(h3);
})
document.body.appendChild(select);

let usuario = localStorage.getItem('nombre');
if (usuario == null) {
    localStorage.setItem('nombre', prompt('INGRESAR NOMBRE'));
} else {
    alert('EL NOMBRE ES ' + usuario);
}