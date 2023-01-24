

const mcbutton = {
  closedToOpen: {
    exit: {display: 'none'},
  },
  openToClosed: {
    initial: {},
    animate: {},
    exit: {display: 'none'},
  },
};

const mcbuttonTop = {
  closedToOpen: {
    initial: { top: '8px' },
    animate: {
      top: '40px',
      rotate: 45,
      // transition: {
      //   duration: .5,
      //   delay: .2
      // }
    },
    exit: {},
  },
  openToClosed: {
    initial: {
      top: '40px',
      rotate: 45,
    },
    animate: {
        top: "8px",
        rotate: 0,
        // transition: {
        //   duration: .5,
        //   delay: .2
        // }
    },
    exit: {},
  },
};

const mcbuttonMiddle = {
  closedToOpen: {
    initial: {
      top: '40px',
      width: "70%",
    },
    animate: {
      width: 0,
      opactity: 0,
      // transition: {
      //   duration: .5,
      //   delay: .2
      // }
    },
    exit: {},
  },
  openToClosed: {
    initial: {
      top: '40px',
      width: 0,
      opactity: .0,
    },
    animate: {
      opacity: 1,
      width: '70%',
      // transition: {
      //   duration: .5,
      //   delay: .2
      // }
    },
    exit: {},
  },
};

const mcbuttonBottom = {
  closedToOpen: {
    initial: {
      top: '70px',
      rotate: 0,
    },
    animate: {
      top: '40px',
      rotate: -45,
      // transition: {
      //   duration: .5,
      //   delay: .2
      // }
    },
    exit: {},
  },
  openToClosed: {
    initial: {
      top: '40px',
      rotate: -45,
    },
    animate: {
      top: '70px',
      rotate: 0,
      // transition: {
      //   duration: .5,
      //   delay: .2
      // }
    },
    exit: {},
  },
};

module.exports = {
  mcbutton,
  mcbuttonTop,
  mcbuttonMiddle,
  mcbuttonBottom,
}