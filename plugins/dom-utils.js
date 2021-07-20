const isInViewport = (element) => {
  const distance = element.getBoundingClientRect()
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

export default (context, inject) => {
  inject('isInViewport', isInViewport)
}
