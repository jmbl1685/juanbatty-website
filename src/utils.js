export function ScrollAnimation(e) {
  const classname = e.target.id
  const scrollElement = document.querySelector(`.${classname}`)
  scrollElement.scrollIntoView({ behavior: 'smooth' })
}

