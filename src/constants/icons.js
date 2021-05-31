const icons = {
  add: {
    size: 24,
    path:
      "M16.6,11h-3.7V7.3c0-0.5-0.4-0.9-0.9-0.9s-0.9,0.4-0.9,0.9V11H7.4c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9h3.7v3.7c0,0.5,0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9v-3.7h3.7c0.5,0,0.9-0.4,0.9-0.9C17.6,11.4,17.2,11,16.6,11z M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22.1C6.4,22.1,1.9,17.6,1.9,12S6.4,1.9,12,1.9S22.1,6.4,22.1,12S17.6,22.1,12,22.1z",
  },
  addUser: {
    size: 24,
    path:
      "M23,17h-4v-4c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1v4h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h4v4c0,0.6,0.4,1,1,1c0.6,0,1-0.5,1-1v-4h4c0.6,0,1-0.4,1-1S23.6,17,23,17z M10,0C6.7,0,4,2.7,4,6v2c0,1.2,0.4,2.4,1,3.3c-3,1.7-5,5-5,8.7v1c0,1.7,1.3,3,3,3h9c0.6,0,1-0.5,1-1c0-0.5-0.4-1-1-1H3c-0.6,0-1-0.5-1-1v-1c0-3.1,1.8-5.9,4.5-7.2c1,0.7,2.2,1.2,3.5,1.2c3.3,0,6-2.7,6-6V6C16,2.7,13.3,0,10,0z M14,8c0,2.2-1.8,4-4,4s-4-1.8-4-4V6c0-2.2,1.8-4,4-4s4,1.8,4,4L14,8L14,8z",
  },
  advertisingIcon: {
    size: 24,
    path:
      "M23.7,1c-0.3-0.5-0.8-0.8-1.3-1c-0.6-0.1-1.2,0-1.6,0.2l-9,5.3l-8.5,0C1.4,5.7,0,7.3,0,9v3.3c0,0.1,0,0.1,0,0.2c0.1,0.8,0.5,1.6,1.1,2.1c0.6,0.5,1.4,0.8,2.2,0.7h2.2V21c0,0.1,0,0.1,0,0.2c0.1,0.8,0.5,1.6,1.1,2.1C7.1,23.8,7.8,24,8.5,24c0.1,0,0.2,0,0.2,0h2.2c0.6,0,1.1-0.5,1.1-1.1v-7.4l8.7,5.3c0,0,0,0,0,0c0.3,0.2,0.6,0.3,0.9,0.3c0.1,0,0.1,0,0.2,0c0.5,0,1-0.2,1.4-0.5c0.4-0.4,0.7-0.9,0.8-1.6V2.4C24,1.9,23.9,1.4,23.7,1z M9.8,21.8H8.6c-0.2,0-0.5-0.1-0.7-0.2c-0.2-0.1-0.3-0.4-0.3-0.7v-5.6h2.2V21.8L9.8,21.8z M9.8,13.2H6.6c0,0,0,0,0,0c0,0,0,0,0,0H3.2c-0.2,0-0.5-0.1-0.7-0.2c-0.2-0.2-0.3-0.4-0.3-0.7V9c0-0.7,0.5-1.2,1.1-1.3h6.5V13.2z M17.4,16.3l-4.9-3c-0.2-0.1-0.4-0.2-0.6-0.2V7.7c0.2,0,0.4-0.1,0.6-0.1l4.9-2.9L17.4,16.3L17.4,16.3z M21.8,2.3l0,16.6l-2.2-1.3c0,0,0-0.1,0-0.1v-14l2.2-1.3C21.8,2.2,21.8,2.3,21.8,2.3z",
  },
  approved: {
    size: 24,
    path:
      "M23.6,0.3c-0.4-0.4-1.1-0.4-1.4,0.2L8.9,20.9l-7.2-9.1c-0.4-0.5-1-0.5-1.4,0c-0.4,0.5-0.4,1.3,0,1.8l8,10.1C8.5,23.9,8.7,24,9,24c0,0,0,0,0,0c0.3,0,0.5-0.2,0.7-0.5l14-21.5C24.1,1.5,24.1,0.7,23.6,0.3z",
  },
  cancel1: {
    size: 24,
    path:
      "M13.4,12L23.7,1.7c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L1.7,0.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L10.6,12L0.3,22.3c-0.4,0.4-0.4,1,0,1.4C0.5,23.9,0.7,24,1,24s0.5-0.1,0.7-0.3L12,13.4l10.3,10.3c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L13.4,12z",
  },
  cancel: {
    size: 24,
    path:
      "M16,14.6l-2.6-2.6L16,9.3c0.4-0.4,0.4-1,0-1.3c-0.4-0.4-1-0.4-1.3,0l-2.6,2.6L9.4,8c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,1,0,1.3l2.6,2.6l-2.6,2.6c-0.4,0.4-0.4,1,0,1.3c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2.6-2.6l2.6,2.6c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3C16.4,15.5,16.4,14.9,16,14.6z M20.5,3.5c-4.7-4.7-12.3-4.7-17,0C1.2,5.8,0,8.8,0,12s1.2,6.2,3.5,8.5C5.9,22.8,8.9,24,12,24s6.1-1.2,8.5-3.5C25.2,15.8,25.2,8.2,20.5,3.5z M19.2,19.2c-4,4-10.4,4-14.3,0c-1.9-1.9-3-4.5-3-7.2s1.1-5.3,3-7.2c4-4,10.4-4,14.3,0C23.1,8.8,23.1,15.2,19.2,19.2z",
  },
  caretDown: {
    size: 24,
    path:
      "M6.3,10.4l4.3,4.3c0.8,0.8,2,0.8,2.8,0l4.3-4.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L12,13.3L7.7,9c-0.4-0.4-1-0.4-1.4,0C5.9,9.4,5.9,10,6.3,10.4z",
  },
  check: {
    size: 24,
    path:
      "M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22.1C6.4,22.1,1.9,17.6,1.9,12S6.4,1.9,12,1.9S22.1,6.4,22.1,12S17.6,22.1,12,22.1z M17.5,7.8c-0.4-0.3-1-0.3-1.3,0.1l-5.7,6.2l-2.7-2.8c-0.4-0.4-0.9-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l3.4,3.5c0.2,0.2,0.4,0.3,0.7,0.3c0,0,0,0,0,0c0.3,0,0.5-0.1,0.7-0.3l6.3-7C17.9,8.8,17.9,8.2,17.5,7.8z",
  },
  close: {
    size: 24,
    path:
      "M10.5857864,12 L4.22182541,18.363961 C3.83130112,18.7544853 3.83130112,19.3876503 4.22182541,19.7781746 C4.6123497,20.1686989 5.24551468,20.1686989 5.63603897,19.7781746 L12,13.4142136 L18.363961,19.7781746 C18.7544853,20.1686989 19.3876503,20.1686989 19.7781746,19.7781746 C20.1686989,19.3876503 20.1686989,18.7544853 19.7781746,18.363961 L13.4142136,12 L19.7781746,5.63603897 C20.1686989,5.24551468 20.1686989,4.6123497 19.7781746,4.22182541 C19.3876503,3.83130112 18.7544853,3.83130112 18.363961,4.22182541 L12,10.5857864 L5.63603897,4.22182541 C5.24551468,3.83130112 4.6123497,3.83130112 4.22182541,4.22182541 C3.83130112,4.6123497 3.83130112,5.24551468 4.22182541,5.63603897 L10.5857864,12 L10.5857864,12 Z",
  },
  drag: {
    size: 24,
    path:
      "M11,18 C11,19.1 10.1,20 9,20 C7.9,20 7,19.1 7,18 C7,16.9 7.9,16 9,16 C10.1,16 11,16.9 11,18 Z M9,10 C7.9,10 7,10.9 7,12 C7,13.1 7.9,14 9,14 C10.1,14 11,13.1 11,12 C11,10.9 10.1,10 9,10 Z M9,4 C7.9,4 7,4.9 7,6 C7,7.1 7.9,8 9,8 C10.1,8 11,7.1 11,6 C11,4.9 10.1,4 9,4 Z M15,8 C16.1,8 17,7.1 17,6 C17,4.9 16.1,4 15,4 C13.9,4 13,4.9 13,6 C13,7.1 13.9,8 15,8 Z M15,10 C13.9,10 13,10.9 13,12 C13,13.1 13.9,14 15,14 C16.1,14 17,13.1 17,12 C17,10.9 16.1,10 15,10 Z M15,16 C13.9,16 13,16.9 13,18 C13,19.1 13.9,20 15,20 C16.1,20 17,19.1 17,18 C17,16.9 16.1,16 15,16 Z",
  },
  edit: {
    size: 24,
    path:
      "M18.7,15.5c-0.6,0-1.2,0.5-1.2,1.2v3.7c0,0.7-0.5,1.2-1.2,1.2H3.5c-0.6,0-1.2-0.5-1.2-1.2V5c0-0.7,0.5-1.2,1.2-1.2h6.8c0.6,0,1.2-0.5,1.2-1.2s-0.5-1.2-1.2-1.2H3.5C1.6,1.5,0,3.1,0,5v15.4c0,2,1.6,3.6,3.5,3.6h12.8c1.9,0,3.5-1.6,3.5-3.6v-3.7C19.8,16.1,19.3,15.5,18.7,15.5z M22.7,1.3C21.8,0.4,20.7,0,19.6,0c-1.2,0-2.3,0.4-3.2,1.3l-7.9,8c-1.2,1.2-1.8,2.7-1.8,4.4v2.7c0,0.7,0.5,1.2,1.2,1.2h2.6c1.6,0,3.2-0.6,4.3-1.8l7.9-8C24.4,6,24.4,3.1,22.7,1.3z M13.2,14.1c-0.7,0.7-1.7,1.1-2.7,1.1H9v-1.5c0-1,0.4-2,1.1-2.7l5.2-5.3l3,3.1L13.2,14.1z M21,6.1l-1,1L17,4l1-1c0.8-0.8,2.2-0.8,3,0S21.9,5.2,21,6.1z",
  },
  heart: {
    size: 24,
    path:
      "M22,1.7c-1.2-1.2-2.8-1.8-4.4-1.6c-1.6,0.1-3.1,0.9-4.1,2.3L12,4.1l-1.5-1.9c-2.1-2.7-5.9-3-8.4-0.7C0.9,2.7,0.2,4.3,0,6.1c-0.1,1.8,0.4,3.5,1.4,4.9l9.8,12.7c0.2,0.2,0.5,0.4,0.8,0.4c0,0,0,0,0,0c0.3,0,0.6-0.1,0.8-0.4l9.9-12.7C24.7,8.2,24.4,4,22,1.7z M21.1,9.5L12,21.2l-9-11.7C2.3,8.6,1.9,7.4,2,6.3c0.1-1.2,0.6-2.2,1.4-3c0.7-0.7,1.7-1,2.6-1c1.1,0,2.2,0.5,3,1.5l2.2,2.8C11.4,6.8,11.7,7,12,7c0,0,0,0,0,0c0.3,0,0.6-0.1,0.8-0.4L15,3.7c0.7-0.9,1.7-1.4,2.8-1.5c1.1-0.1,2.1,0.3,2.9,1.1C22.3,4.9,22.5,7.7,21.1,9.5z",
  },
  help: {
    size: 24,
    path:
      "M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22C6.5,22,2,17.5,2,12S6.5,2,12,2s10,4.5,10,10S17.5,22,12,22z M11.8,16.2c-0.7,0-1.2,0.5-1.2,1.2c0,0,0,0,0,0.1c0,0.7,0.6,1.2,1.2,1.1h0c0.7,0,1.2-0.5,1.2-1.2C12.9,16.7,12.4,16.2,11.8,16.2z M12,5.5C10.6,5.4,9.2,6,8.2,7C8.1,7.1,8.1,7.3,8.1,7.5c0,0.4,0.4,0.8,0.8,0.8c0.2,0,0.4-0.1,0.6-0.2c0.6-0.6,1.5-1,2.4-1c1.3,0,2,0.7,2,1.6c0,1.8-3.3,2.1-3.3,4.5c0,0.6,0.4,1.6,1.1,1.6c0,0,0,0,0,0c0.4,0,0.7-0.3,0.7-0.7c0-0.3-0.2-0.5-0.2-0.8c0-1.8,3.5-2,3.6-4.8C15.8,6.8,14.3,5.5,12,5.5z",
  },
  list: {
    size: 24,
    path:
      "M21,0H3C1.3,0,0,1.3,0,3v18c0,1.7,1.3,3,3,3h18c1.7,0,3-1.3,3-3V3C24,1.3,22.7,0,21,0z M22,21c0,0.6-0.4,1-1,1H3c-0.6,0-1-0.4-1-1V3c0-0.6,0.5-1,1-1h18c0.6,0,1,0.5,1,1V21z M6.9,5.6C6.9,5.5,6.8,5.4,6.7,5.3c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1-0.1-0.2-0.1C6.3,5.1,6.3,5,6.2,5C6,5,5.8,5,5.6,5.1C5.5,5.1,5.4,5.2,5.3,5.3C5.2,5.4,5.1,5.5,5.1,5.6C5,5.7,5,5.9,5,6c0,0.1,0,0.3,0.1,0.4c0.1,0.1,0.1,0.2,0.2,0.3C5.5,6.9,5.7,7,6,7c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2-0.1c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1-0.1,0.2-0.1C6.9,6.5,7,6.3,7,6C7,5.9,7,5.7,6.9,5.6z M18,5h-8C9.4,5,9,5.5,9,6s0.5,1,1,1h8c0.6,0,1-0.5,1-1S18.6,5,18,5zM7,11.8c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.1-0.2-0.2-0.3-0.2c-0.2-0.1-0.5-0.1-0.8,0c-0.1,0.1-0.2,0.1-0.3,0.2c0,0.1-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.3,0.1,0.5,0.3,0.7C5.5,12.9,5.7,13,6,13s0.5-0.1,0.7-0.3C6.9,12.5,7,12.3,7,12C7,11.9,7,11.9,7,11.8z M18,11h-8c-0.6,0-1,0.5-1,1c0,0.5,0.5,1,1,1h8c0.6,0,1-0.4,1-1C19,11.5,18.6,11,18,11z M6.9,17.6c-0.1-0.1-0.1-0.2-0.2-0.3C6.4,17,6,16.9,5.6,17.1c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0.1-0.2,0.2-0.2,0.3C5,17.7,5,17.9,5,18c0,0.3,0.1,0.5,0.3,0.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3C6.9,18.5,7,18.3,7,18C7,17.9,7,17.7,6.9,17.6z M18,17h-8c-0.6,0-1,0.4-1,1s0.5,1,1,1h8c0.6,0,1-0.4,1-1S18.6,17,18,17z",
  },
  menu: {
    size: 24,
    path:
      "M20,7H4C3.4,7,3,6.6,3,6v0c0-0.6,0.4-1,1-1h16c0.6,0,1,0.4,1,1v0C21,6.6,20.6,7,20,7z M21,12L21,12c0-0.6-0.4-1-1-1H4c-0.6,0-1,0.4-1,1v0c0,0.6,0.4,1,1,1h16C20.6,13,21,12.6,21,12z M21,18L21,18c0-0.6-0.4-1-1-1H4c-0.6,0-1,0.4-1,1v0c0,0.6,0.4,1,1,1h16C20.6,19,21,18.6,21,18z",
  },
  minus: {
    size: 24,
    path:
      "M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12c6.6,0,12-5.4,12-12S18.6,0,12,0z M12,22.1C6.4,22.1,1.9,17.6,1.9,12S6.4,1.9,12,1.9S22.1,6.4,22.1,12S17.6,22.1,12,22.1z M16.6,11H7.4c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9h9.3c0.5,0,0.9-0.4,0.9-0.9C17.6,11.4,17.2,11,16.6,11z",
  },
  more: {
    size: 24,
    path:
      "M12,10.1c1,0,1.9,0.8,1.9,1.9S13,13.9,12,13.9S10.1,13,10.1,12S11,10.1,12,10.1z M17.6,10.1c1,0,1.9,0.8,1.9,1.9s-0.8,1.9-1.9,1.9S15.7,13,15.7,12S16.6,10.1,17.6,10.1z M6.4,10.1c1,0,1.9,0.8,1.9,1.9s-0.8,1.9-1.9,1.9S4.6,13,4.6,12S5.4,10.1,6.4,10.1z M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22.1C6.4,22.1,1.9,17.6,1.9,12S6.4,1.9,12,1.9S22.1,6.4,22.1,12S17.6,22.1,12,22.1z",
  },
  notification: {
    size: 24,
    path:
      "M22.8,17.5h-1.2V8.7C21.6,3.9,17.3,0,12,0S2.4,3.9,2.4,8.7v8.7H1.2c-0.7,0-1.2,0.5-1.2,1.1c0,0.6,0.5,1.1,1.2,1.1h1.2h4.8C7.2,22,9.4,24,12,24s4.8-2,4.8-4.4h4.8h1.2c0.7,0,1.2-0.5,1.2-1.1S23.5,17.5,22.8,17.5z M12,21.8c-1.3,0-2.4-1-2.4-2.2h4.8C14.4,20.8,13.3,21.8,12,21.8z M19.2,17.5h-2.4H7.2H4.8V8.7C4.8,5.1,8,2.2,12,2.2s7.2,2.9,7.2,6.5V17.5z",
  },
  rewiev: {
    size: 24,
    path:
      "M23.9,9.1c-0.1-0.4-0.4-0.7-0.8-0.7l-7.1-1.1l-3.2-6.7c-0.3-0.7-1.5-0.7-1.8,0L7.9,7.3L0.9,8.3C0.5,8.4,0.2,8.7,0,9.1c-0.1,0.4,0,0.8,0.3,1.1l5.1,5.2l-1.2,7.4c-0.1,0.4,0.1,0.8,0.4,1C4.8,23.9,5,24,5.2,24c0.2,0,0.3,0,0.5-0.1l6.3-3.5l6.3,3.5c0.3,0.2,0.8,0.2,1.1-0.1c0.3-0.2,0.5-0.6,0.4-1l-1.2-7.4l5.1-5.2C24,9.9,24.1,9.4,23.9,9.1z M16.8,14.2c-0.2,0.2-0.3,0.6-0.3,0.9l1,5.8l-5-2.7c-0.1-0.1-0.3-0.1-0.5-0.1c-0.2,0-0.3,0-0.5,0.1l-5,2.7l0.9-5.8c0.1-0.3-0.1-0.7-0.3-0.9l-4-4.1l5.6-0.9c0.3,0,0.6-0.3,0.8-0.6L12,3.4l2.5,5.3c0.1,0.3,0.4,0.5,0.8,0.6l5.6,0.9L16.8,14.2z",
  },
  settings: {
    size: 24,
    path:
      "M12,7c-2.8,0-5,2.3-5,5s2.2,5,5,5s5-2.3,5-5S14.8,7,12,7z M12,15.1c-1.7,0-3-1.4-3-3s1.3-3,3-3s3,1.4,3,3S13.7,15.1,12,15.1z M23.1,9.1l-2.8-0.5L22,6.3c0.3-0.4,0.3-1-0.1-1.3l-2.8-2.9c-0.4-0.4-0.9-0.4-1.3-0.1l-2.3,1.6L15,0.8C14.9,0.4,14.5,0,14,0h-4C9.5,0,9.1,0.4,9,0.9L8.5,3.7L6.2,2C5.8,1.7,5.3,1.8,4.9,2.1L2.1,4.9C1.7,5.3,1.7,5.9,2,6.3l1.7,2.3L0.9,9C0.4,9.1,0,9.5,0,10v4c0,0.5,0.4,0.9,0.9,1l2.8,0.5L2,17.7c-0.3,0.4-0.3,1,0.1,1.3l2.8,2.8c0.4,0.4,0.9,0.4,1.3,0.1l2.3-1.7L9,23.1C9,23.6,9.4,24,9.9,24h4c0.5,0,0.9-0.4,1-0.9l0.5-2.9l2.3,1.7c0.4,0.3,1,0.3,1.3-0.1l2.8-2.8c0.4-0.4,0.4-0.9,0.1-1.3l-1.7-2.3l2.9-0.3c0.5-0.1,0.9-0.5,0.9-1v-4C24,9.6,23.6,9.1,23.1,9.1z M22,13.2l-2,0.2c-0.7,0.1-1.4,0.6-1.6,1.2c-0.3,0.7-0.2,1.4,0.2,2l1.2,1.6l-1.6,1.6l-1.6-1.2c-0.6-0.4-1.3-0.5-1.9-0.2c-0.7,0.3-1.2,0.9-1.3,1.6L13.1,22h-2.3L10.5,20c-0.1-0.7-0.6-1.4-1.2-1.6c-0.7-0.3-1.4-0.2-2,0.2l-1.6,1.2l-1.6-1.6l1.2-1.6c0.4-0.6,0.5-1.4,0.2-1.9c-0.3-0.7-0.9-1.2-1.6-1.3L2,13.1v-2.3l1.9-0.3c0.7-0.1,1.4-0.6,1.6-1.2c0.3-0.7,0.2-1.4-0.2-2L4.1,5.8l1.6-1.6l1.6,1.2c0.6,0.4,1.3,0.5,1.9,0.2C10,5.3,10.5,4.7,10.6,4L10.9,2h2.3l0.3,1.9c0.1,0.7,0.6,1.4,1.2,1.6c0.7,0.3,1.4,0.2,2-0.2l1.6-1.2l1.6,1.7l-1.2,1.6c-0.4,0.6-0.5,1.4-0.2,1.9c0.3,0.7,0.9,1.2,1.6,1.3l1.9,0.3L22,13.2L22,13.2z",
  },
  trophy: {
    size: 24,
    path:
      "M21.8,0h-4.4h-3.3H9.8H6.5H2.2C1,0,0,0.9,0,2v3c0,3.2,2.8,5.9,6.3,6c1,1.5,2.6,2.6,4.6,2.9V18H8.7c-1.8,0-3.3,1.3-3.3,3v2c0,0.6,0.5,1,1.1,1h10.9c0.6,0,1.1-0.4,1.1-1v-2c0-1.7-1.5-3-3.3-3h-2.2v-4.1c2-0.3,3.6-1.4,4.6-2.9c3.5-0.1,6.3-2.7,6.3-6V2C24,0.9,23,0,21.8,0z M2.2,5V2h3.3v6c0,0.3,0,0.6,0.1,0.9C3.6,8.5,2.2,6.9,2.2,5z M15.3,20c0.6,0,1.1,0.4,1.1,1v1H7.6v-1c0-0.6,0.5-1,1.1-1H15.3z M16.4,8c0,2.2-2,4-4.4,4s-4.4-1.8-4.4-4V2h2.2h4.4h2.2L16.4,8L16.4,8z M21.8,5c0,1.9-1.4,3.5-3.4,3.9c0-0.3,0.1-0.6,0.1-0.9V2h3.3V5z",
  },
  upArrow: {
    size: 24,
    path:
      "M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22.1C6.4,22.1,1.9,17.6,1.9,12S6.4,1.9,12,1.9S22.1,6.4,22.1,12S17.6,22.1,12,22.1z M17.3,13.3l-4.6-4.6c-0.4-0.4-0.9-0.4-1.3,0l-4.6,4.6c-0.3,0.3-0.3,0.9,0,1.2C7,14.9,7.6,14.9,8,14.6l4-4l4,4c0.4,0.4,0.9,0.4,1.3,0C17.7,14.2,17.7,13.6,17.3,13.3z",
  },
  world: {
    size: 24,
    path:
      "M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22.1C6.4,22.1,1.9,17.6,1.9,12S6.4,1.9,12,1.9S22.1,6.4,22.1,12S17.6,22.1,12,22.1z M12,1.9V0C8.5,0,6.6,6.2,6.6,12S8.5,24,12,24v-1.9c-1.5,0-3.5-3.8-3.5-10.1S10.5,1.9,12,1.9zM0.9,11.1H23v1.9H0.9V11.1z M12,0v1.9c1.5,0,3.5,3.8,3.5,10.1s-2,10.1-3.5,10.1V24c3.5,0,5.4-6.2,5.4-12S15.5,0,12,0z",
  },
};

export default icons;
