import colors from 'picocolors' 
import inquerer from 'inquirer'

async function main(){
    console.log(colors.green("Que team es el mejor, team perro🐶 o team gato🐱"))

    const { pet } = await inquerer.prompt({
        type:"input",
        pet:"pet",
        message:"Que team prefieres"
    })

    if (pet == "Perro"){
        console.log(colors.yellow("Perfecto eres Team Perro😃"))
    } else{
        console.log(colors.red("Es mejor Team Perro🐶"))
    }
}