// set current year in footer
const currentYear = new Date().getFullYear()
document.querySelector('#year').innerHTML = currentYear

// show and hide aside or sidebar
const iconMenu = document.querySelector('#icon-menu')
const iconClose = document.querySelector('#icon-close')
const header = document.querySelector('header')
const sidebar = document.querySelector('aside')

const toggleMenu = () => {

    const isActive = sidebar.classList.contains('show')

    if (isActive) {
        header.style.position = 'relative'
        sidebar.classList.add('hide')
        sidebar.classList.remove('show')
        iconMenu.classList.remove('hide')
        iconClose.classList.add('hide')
    }

    if (!isActive) {
        header.style.position = 'fixed'
        header.style.top = 0
        sidebar.classList.add('show')
        sidebar.classList.remove('hide')
        iconMenu.classList.add('hide')
        iconClose.classList.remove('hide')
    }
    
}