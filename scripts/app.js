const form = document.querySelector('.sign-up-form')
const inputs = document.querySelectorAll('.input')
const errorText = document.querySelectorAll('.error-text')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    inputs.forEach(input => {
        if (!input.value) {
            input.classList.add('invalid')
            console.log('error')
            input.parentElement.lastElementChild.classList.add('invalid')
        } else {
            input.classList.remove('invalid')
            input.parentElement.lastElementChild.classList.remove('invalid')
        }
    })
})
