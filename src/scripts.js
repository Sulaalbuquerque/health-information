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

const calcImc = () =>{
    const imc = (weight.value / (height.value * height.value)).toFixed(2)
    
    return imc
}

const invisibleContainer = () => {
    const containerInvisible = container.classList.contains('invisible')
    
    if(!containerInvisible){
        container.classList.add('invisible')
    }
}

const closePopup = () => {
    container.classList.remove('invisible')
    popupImc.classList.add('invisible')
    popupHydration.classList.add('invisible')
}

const showImc = () => {
    const informImc = 'A classifica????o do IMC (??ndice de massa corporal) pode ajudar a identificar obesidade ou desnutri????o. Para informa????es mais precisas, consulte seu m??dico ou nutricionista.'
    const informResultImc = ' Esse resultado ?? classificado como'

    invisibleContainer()

    popupImc.classList.remove('invisible')
    contentImc.innerText = informImc
    resultImc.innerText = `${name.value}, seu IMC ?? de ${calcImc()} kg/m??.`

    if (calcImc() <= 18.5) {
        resultImc.innerText += `${informResultImc} abaixo do peso.`
      } else if (calcImc() <= 25) {
        resultImc.innerText += `${informResultImc} peso ideal. Parab??ns!`
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

const showHydration = () =>{
    const informHydration = '?? importante informar que existem outros fatores a serem considerados como a frequ??ncia de exerc??cios f??sicos, temperatura ambiente, entre outros. Para uma maior precis??o, procure seu m??dico ou nutricionista.'

    let mlPerKg 

    invisibleContainer()

    popupHydration.classList.remove('invisible')

    if(age.value <= 17){
        mlPerKg = 40
        const calcHydration = weight.value * mlPerKg
        let toConvertMlPerL = (calcHydration / 1000).toFixed(1)
        resultHydration.innerText = `${name.value}, voc?? deve beber cerca de ${calcHydration} mL (${toConvertMlPerL} L) por dia.`
        contentHydration.innerHTML = informHydration
    }
    if(age.value > 17 && age.value <= 55){
        mlPerKg = 35
        const calcHydration = weight.value * mlPerKg
        let toConvertMlPerL = (calcHydration / 1000).toFixed(1)
        resultHydration.innerText = `${name.value}, voc?? deve beber cerca de ${calcHydration} mL (${toConvertMlPerL} L) por dia.`
        contentHydration.innerHTML = informHydration
    }
    if(age.value > 55 && age.value <= 65){
        mlPerKg = 30
        const calcHydration = weight.value * mlPerKg
        let toConvertMlPerL = (calcHydration / 1000).toFixed(1)
        resultHydration.innerText = `${name.value}, voc?? deve beber cerca de ${calcHydration} mL (${toConvertMlPerL} L) por dia.`
        contentHydration.innerHTML = informHydration
    }
    if(age.value > 66){
        mlPerKg = 25
        const calcHydration = weight.value * mlPerKg
        let toConvertMlPerL = (calcHydration / 1000).toFixed(1)
        resultHydration.innerText = `${name.value}, voc?? deve beber cerca de ${calcHydration} mL (${toConvertMlPerL} L) por dia.`
        contentHydration.innerHTML = informHydration
    }
}

const redirectPopup = () => {
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






