//reto03

const diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

function businessHours(hour) {
    return hour >= 9 && hour <= 18 ? true : false;
}

function businesDay(day) {
    return day >= 1 && day <= 5 ? true : false;

}

let day = new Date().getDay();
let hour = new Date().getHours();

console.log(diaSemana[day] + " a las " + hour + " horas es " + (businessHours(hour) && businesDay(day) ? "laboral" : "no laboral"));

day = 0
hour = 10
console.log(diaSemana[day] + " a las " + hour + " horas es " + (businessHours(hour) && businesDay(day) ? "laboral" : "no laboral"));

day = 1
hour = 10
console.log(diaSemana[day] + " a las " + hour + " horas es " + (businessHours(hour) && businesDay(day) ? "laboral" : "no laboral"));

day = 1
hour = 20
console.log(diaSemana[day] + " a las " + hour + " horas es " + (businessHours(hour) && businesDay(day) ? "laboral" : "no laboral"));
