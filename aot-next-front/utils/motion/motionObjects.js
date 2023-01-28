
const top = {
  openToClosed: {
    initial: { top: '40px', rotate: 45, y: '-50%' },
    animate: { top: "10px", rotate: 0, y: '-50%'},
    exit: {}
  },
  closedToOpen: {
    initial: { top: "10px", rotate: 0, y: '-50%' },
    animate: { top: "40px", rotate: 45, y: '-50%' },
    exit: {}
  }
}

const middle = {
  openToClosed: {
    initial: { top: '40px', opacity: 0, width: 0, y: '-50%' },
    animate: { top: "40px", opacity: 1, width: "70%", y: '-50%' },
    exit: {}
  },
  closedToOpen: {
    initial: { top: "40px", opacity: 1, width: '70%', y: '-50%' },
    animate: { top: "40px", opacity: 0, width: 0, y: '-50%' },
    exit: {}
  }
}

const bottom = {
  openToClosed: {
    initial: { top: '40px', rotate: -45, y: '-50%' },
    animate: { top: "70px", rotate: 0, y: '-50%' },
    exit: {}
  },
  closedToOpen: {
    initial: { top: "70px", rotate: 0, y: '-50%' },
    animate: { top: "40px", rotate: -45, y: '-50%' },
    exit: {}
  }
}

module.exports = {
  // mcbutton,
  top,
  middle,
  bottom,
}