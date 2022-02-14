const name = document.querySelector('#name')
const height = document.querySelector('#height')
const age = document.querySelector('#age')
const weight = document.querySelector('#weight')
 
const container = document.querySelector('.container')
const popupImc = document.querySelector('.popup-imc')
const popupHydration = document.querySelector('.popup-hydration')

const buttonImc = document.querySelector('.imc')
const buttonHydration = document.querySelector('.hydration')

const buttonCloseImc = document.querySelector('.popup-close-imc')
const buttonCloseHidration = document.querySelector('.popup-close-hydration')

const buttonPopupImc = document.querySelector('.button-popup-imc')
const buttonPopupHydration = document.querySelector('.button-popup-hydration')

const resultImc = document.querySelector('.result-imc')
const resultHydration = document.querySelector('.result-hydration')

const contentImc = document.querySelector('.content-imc')
const contentHydration = document.querySelector('.content-hydration')

const buttonPopupImcNew = document.querySelector('.button-popup-imc-new')
const buttonPopupHydrationNew = document.querySelector('.button-popup-hydration-new')

const disableButtons = () => {
    buttonImc.disabled = true
    buttonHydration.disabled = true
}

const enableButtons = () => {
    const filled = name.value && height.value && age.value && weight.value
    if (filled){
        buttonImc.disabled = false
        buttonHydration.disabled = false
        return
    }
    buttonImc.disabled = true
    buttonHydration.disabled = true
}

const calcImc = () =>{//calcular imc
    const imc = (weight.value / (height.value * height.value)).toFixed(2)
    
    return imc
}

const invisibleContainer = () => {//tormar ocontainer invisível
    const containerInvisible = container.classList.contains('invisible')
    
    if(!containerInvisible){
        container.classList.add('invisible')
    }
}

const closePopup = () => {//fechar os popups
    container.classList.remove('invisible')
    popupImc.classList.add('invisible')
    popupHydration.classList.add('invisible')
}

const showImc = () => {//abrir popup imc
    const informImc = 'A classificação do IMC (índice de massa corporal) pode ajudar a identificar obesidade ou desnutrição. Para informações mais precisas, consulte seu médico ou nutricionista.'
    const informResultImc = ' Esse resultado é classificado como'

    invisibleContainer()

    popupImc.classList.remove('invisible')
    contentImc.innerText = informImc
    resultImc.innerText = `${name.value}, seu IMC é de ${calcImc()} kg/m².`

    if (calcImc() <= 18.5) {
        resultImc.innerText += `${informResultImc} abaixo do peso.`
      } else if (calcImc() <= 25) {
        resultImc.innerText += `${informResultImc} peso ideal. Parabéns!`
      } else if (calcImc() <= 30) {
        resultImc.innerText += `${informResultImc} levemente acima do peso.`
      } else if (calcImc() <= 35) {
        resultImc.innerText += `${informResultImc} obesidade grau I.`
      } else if (calcImc() <= 40) {
        resultImc.innerText += `${informResultImc} obesidade grau II.`
      } else {
        resultImc.innerText += `${informResultImc} obesidade grau III.`
      } 
}

const showHydration = () =>{//abrir popup hydration
    const informHydration = 'É importante informar que existem outros fatores a serem considerados como a frequência de exercícios físicos, temperatura ambiente, entre outros. Para uma maior precisão, procure seu médico ou nutricionista.'

    let mlPerKg 

    invisibleContainer()

    popupHydration.classList.remove('invisible')

    if(age.value <= 17){
        mlPerKg = 40
        const calcHydration = weight.value * mlPerKg
        let toConvertMlPerL = (calcHydration / 1000).toFixed(1)
        resultHydration.innerText = `${name.value}, você deve beber cerca de ${calcHydration} mL (${toConvertMlPerL} L) por dia.`
        contentHydration.innerHTML = informHydration
    }
    if(age.value > 17 && age.value <= 55){
        mlPerKg = 35
        const calcHydration = weight.value * mlPerKg
        let toConvertMlPerL = (calcHydration / 1000).toFixed(1)
        resultHydration.innerText = `${name.value}, você deve beber cerca de ${calcHydration} mL (${toConvertMlPerL} L) por dia.`
        contentHydration.innerHTML = informHydration
    }
    if(age.value > 55 && age.value <= 65){
        mlPerKg = 30
        const calcHydration = weight.value * mlPerKg
        let toConvertMlPerL = (calcHydration / 1000).toFixed(1)
        resultHydration.innerText = `${name.value}, você deve beber cerca de ${calcHydration} mL (${toConvertMlPerL} L) por dia.`
        contentHydration.innerHTML = informHydration
    }
    if(age.value > 66){
        mlPerKg = 25
        const calcHydration = weight.value * mlPerKg
        let toConvertMlPerL = (calcHydration / 1000).toFixed(1)
        resultHydration.innerText = `${name.value}, você deve beber cerca de ${calcHydration} mL (${toConvertMlPerL} L) por dia.`
        contentHydration.innerHTML = informHydration
    }
}

const redirectPopup = () => {//redirecionar o popup
    const popupImcInvisible = popupImc.classList.contains('invisible')
    const popupHydrationInvisible = popupHydration.classList.contains('invisible')

    if(!popupImcInvisible){
        popupImc.classList.add('invisible')
        showHydration()
    }
    if(!popupHydrationInvisible){
        popupHydration.classList.add('invisible')
        showImc()
    }
}

const newQuery = () => {
    popupHydration.classList.add('invisible')
    popupImc.classList.add('invisible')
    container.classList.remove('invisible')

    name.value = ''
    height.value = ''
    age.value = ''
    weight.value = ''

    disableButtons()
    
    name.focus()
}

name.addEventListener('change', enableButtons)
height.addEventListener('change', enableButtons)
age.addEventListener('change', enableButtons)
weight.addEventListener('change', enableButtons)

buttonImc.addEventListener('click', showImc)
buttonHydration.addEventListener('click', showHydration)

buttonCloseImc.addEventListener('click', closePopup)
buttonCloseHidration.addEventListener('click', closePopup)

buttonPopupImc.addEventListener('click', redirectPopup)
buttonPopupHydration.addEventListener('click', redirectPopup)

buttonPopupImcNew.addEventListener('click', newQuery)
buttonPopupHydrationNew.addEventListener('click', newQuery)






