import chalk from "chalk"
import chalkAnimation from "chalk-animation"


const sleep = () => {
    return new Promise((res)=>{
        setTimeout(res,2000)
    })
}

async function Welcome() {
    let gameTitle = chalkAnimation.neon('Welcome to the Adventure game')
    await sleep();
    gameTitle.stop();


    console.log(chalk.greenBright(`
    ██▄ ██ █▄█ ██ █╬ ███ ███ ╬╬ ██▄ █╬█ ╬╬ ██ ███ ███ ██▄ ██ ██ █╬╬█
    █╬█ █▄ ███ █▄ █╬ █╬█ █▄█ ╬╬ █▄█ █▄█ ╬╬ █▄ █▄█ █▄╬ █╬█ █▄ █▄ ██▄█
    ███ █▄ ╬█╬ █▄ ██ █▄█ █╬╬ ╬╬ █▄█ ╬█╬ ╬╬ █╬ █╬█ █╬█ ███ █▄ █▄ █╬██`))
    
}


export default Welcome