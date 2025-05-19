const optionImages = document.querySelectorAll(".option-image")
const container = document.querySelector(".container")
const resultText = document.querySelector(".result-text")
const userResult = document.querySelector(".user-result img")
const computerResult = document.querySelector(".computer-result img")

// Todas as imagens das opções do jogo
const allImg = ["src/img/pedra.png", "src/img/papel.png", "src/img/tesoura.png"]

// Possíveis resultados do jogo
const winner = {
  RR: "Empate",
  RP: "Computador",
  RS: "Você",
  PR: "Você",
  PP: "Empate",
  PS: "Computador",
  SR: "Computador",
  SP: "Você",
  SS: "Empate",
}

function handleOptionClick(event) {
  const clickedImage = event.currentTarget
  const userIndex = Array.from(optionImages).indexOf(clickedImage)

  container.classList.add("start")
  resultText.innerHTML = "..."

  // Retorna para a imagem inicial de pedra
  userResult.src = computerResult.src = allImg[0]

  setTimeout(() => {
    container.classList.remove("start")

    // imagem da opção clicada pelo usuário
    userResult.src = allImg[userIndex]

    // imagem da opção do computador
    const randomNumber = Math.floor(Math.random() * allImg.length)
    computerResult.src = allImg[randomNumber]

    // Resultado Final
    const userValue = ["R", "P", "S"][userIndex]
    const computerValue = ["R", "P", "S"][randomNumber]
    const userComputerResult = userValue + computerValue
    const finalResult = winner[userComputerResult]
    resultText.innerHTML =
      userValue === computerValue ? "Empate" : `${finalResult} Ganhou`
  }, 2000)
}

optionImages.forEach((img) => {
  img.addEventListener("click", handleOptionClick)
})
