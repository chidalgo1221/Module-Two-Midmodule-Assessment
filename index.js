const diceArr = [
	{ dice: '⚀' , value: 1 },
	{ dice: '⚁', value: 2 },
	{ dice: '⚂', value: 3 },
	{ dice: '⚃', value: 4 },
	{ dice: '⚄', value: 5 },
	{ dice: '⚅', value: 6 },
];

document.addEventListener('DOMContentLoaded', () => {
	const input = document.querySelector('input')
	const btn = document.querySelector('button')
	const diceResult = document.querySelector('#dice-para')
	const sumPara = document.querySelector('#sum-para')
    let sum = 0
    let diceRoll = ""

	btn.addEventListener('click', () => {
	    diceNum(); 
	})

const diceNum = () => {
    diceRoll.innerHTML = ""
        for (let i = 0; i < input.value; i++) {
            let randomNumber = Math.floor(Math.random() * diceArr.length)
            diceRoll += diceArr[randomNumber].dice
            sum += diceArr[randomNumber].value
        };
        sumPara.textContent = `Sum = ${sum}`
        diceResult.textContent = diceRoll;
    };

    btn.addEventListener('click', () => {
        const history = document.querySelector('#header-two')
        let li = document.createElement("li")
        li.textContent = `${diceRoll} = ${sum}`;
        history.appendChild(li)
    })

});