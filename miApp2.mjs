import colors from 'picocolors' 
import inquerer from 'inquirer'


async function main(){
    console.log(colors.white("Benvenido a esta encuenta"))
    

    const { name } = await inquerer.prompt({
        type: "input",
        name: "name",
        message: "¿Como te llamas?"
    })

    console.log(colors.blue(`Hola, ${name}`))

    const { pet } = await inquerer.prompt({
        type: "input",
        name: "pet",
        message: "¿Entre perros y gatos a que team pertenecerias?"
    })


    if (pet == 'perro') {
        console.log(colors.green("perfecto eres team perro🐶"))
    } else {
        console.log(colors.red(" Lo sentimos, este sitio no es para ti"))
    }

}

main()
