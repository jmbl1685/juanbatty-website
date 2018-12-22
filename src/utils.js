export function ScrollAnimation(e) {
  const classname = e.target.id
  const scrollElement = document.querySelector(`.${classname}`)
  scrollElement.scrollIntoView({ behavior: 'smooth' })
}

export function DisplayStyleValue(value, element) {

  let scroll = {
      BODY: document.body.scrollTop,
      DOCUMENT_ELEMENT: document.documentElement.scrollTop
  };

  if (scroll.BODY > value || scroll.DOCUMENT_ELEMENT > value)
      element.style.opacity = 1;
  else
      element.style.opacity = 0;
}
