// Utility Functions
const label = element => {
  return document.querySelector(element)
}

// Links
const homeLink = label('#home_link')
const aboutLink = label('#about_link')
const projectLink = label('#projects_link')
const contactLink = label('#contact_link')

const display = label('.display_pane')
const links = document.querySelectorAll('li')
const pages = document.querySelectorAll('.page')

// elements

const home = label('#home')
const about = label('#about')
const projects = label('#projects')
const contact = label('#contact')

// utility functions
const clearFocus = e => {
  e.preventDefault()
  for (let element of links) {
    element.classList.remove('focus')
  }
  e.target.parentElement.classList.add('focus')
}

// helper function to determine if an element is in the screen

const isInView = element => {
  const position = element.getBoundingClientRect()
  const screenWidth = window.innerWidth || document.documentElement.clientWidth
  const screenHeight = window.innerHeight || document.documentElement.clientHeight

  return (
    position.left >= 0 &&
    position.top >= 0 &&
    position.right <= screenWidth &&
    position.bottom <= screenHeight
  )
}

// helper function to determine which page is in view
const currentDisplay = () => {
  let current
  for (let page of pages) {
    if (isInView(page)) {
      current = page.id + '_link'
    }
  }
  return current
}

// event listeners
homeLink.addEventListener('click', e => {
  clearFocus(e)
  document.querySelector('#home').scrollIntoView({
    behavior: 'smooth',
  })
})
aboutLink.addEventListener('click', e => {
  clearFocus(e)
  document.querySelector('#about').scrollIntoView({
    behavior: 'smooth',
  })
})
projectLink.addEventListener('click', e => {
  clearFocus(e)
  document.querySelector('#projects').scrollIntoView({
    behavior: 'smooth',
  })
})
contactLink.addEventListener('click', e => {
  clearFocus(e)
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth',
  })
})

// Detect Scroll Stop Function
let isScrolling

display.addEventListener('scroll', () => {
  clearTimeout(isScrolling)
  isScrolling = setTimeout(() => {
    let element = document.querySelector(`#${currentDisplay()}`).parentElement
    for (let link of links) {
      link.classList.remove('focus')
    }
    element.classList.add('focus')
  }, 75)
})
