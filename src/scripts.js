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

const calcImc = () =>{//calcular imc
    const heightValue = height.value
    const weightValue = weight.value
    
    const imc = (weightValue / (heightValue * heightValue)).toFixed(2)
    
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
    const nameValue = name.value
    const informImc = 'A classificação do índice de massa corporal (IMC), pode ajudar a identificar obesidade ou desnutrição.'
    const informResultImc = ' Esse resultado é classificado como'
    const recommendation = 'Para informações mais precisas, consulte seu médico ou nutricionista.'

    invisibleContainer()

    popupImc.classList.remove('invisible')
    contentImc.innerText = informImc
    resultImc.innerText = `${nameValue}, seu IMC é de ${calcImc()} kg/m².`

    if (calcImc() <= 18.5) {
        resultImc.innerText += `${informResultImc} abaixo do peso. ${recommendation}`
      } else if (calcImc() <= 25) {
        resultImc.innerText += `${informResultImc} peso ideal. Parabéns! ${recommendation}`
      } else if (calcImc() <= 30) {
        resultImc.innerText += `${informResultImc} levemente acima do peso. ${recommendation}`
      } else if (calcImc() <= 35) {
        resultImc.innerText += `${informResultImc} obesidade grau I. ${recommendation}`
      } else if (calcImc() <= 40) {
        resultImc.innerText += `${informResultImc} obesidade grau II. ${recommendation}`
      } else {
        resultImc.innerText += `${informResultImc} obesidade grau III. ${recommendation}`
      }
}

const showHydration = () =>{//abrir popup hydration
    
    invisibleContainer()

    popupHydration.classList.remove('invisible')

    
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

buttonImc.addEventListener('click', showImc)
buttonHydration.addEventListener('click', showHydration)
buttonCloseImc.addEventListener('click', closePopup)
buttonCloseHidration.addEventListener('click', closePopup)
buttonPopupImc.addEventListener('click', redirectPopup)
buttonPopupHydration.addEventListener('click', redirectPopup)






