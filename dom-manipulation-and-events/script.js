const container = document.querySelector('#container')

const content = document.createElement('div')
content.classList.add('content')
content.textContent = 'This is the glorious text-content'

container.appendChild(content)

const redP = document.createElement('p')
redP.style.color = 'red'
redP.textContent = "Hey I'm red!"

container.appendChild(redP)

const blueH = document.createElement('h3')
blueH.style.color = 'blue'
blueH.textContent = "I'm a blue h3!"

container.appendChild(blueH)

const divContainer = document.createElement('div')
divContainer.style.backgroundColor = 'pink'
divContainer.style.borderColor = 'black'
divContainer.style.borderStyle = 'double'

const divH = document.createElement('h1')
divH.textContent = "I'm in a div"
divContainer.appendChild(divH)

const divP = document.createElement('p')
divP.textContent = "ME TOO!"
divContainer.appendChild(divP)

container.appendChild(divContainer)