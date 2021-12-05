const icons = {
  add: {
    size: 24,
    path:
      "M16.6,11h-3.7V7.3c0-0.5-0.4-0.9-0.9-0.9s-0.9,0.4-0.9,0.9V11H7.4c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9h3.7v3.7c0,0.5,0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9v-3.7h3.7c0.5,0,0.9-0.4,0.9-0.9C17.6,11.4,17.2,11,16.6,11z M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22.1C6.4,22.1,1.9,17.6,1.9,12S6.4,1.9,12,1.9S22.1,6.4,22.1,12S17.6,22.1,12,22.1z",
  },
  approved: {
    size: 24,
    path:
      "M23.6,0.3c-0.4-0.4-1.1-0.4-1.4,0.2L8.9,20.9l-7.2-9.1c-0.4-0.5-1-0.5-1.4,0c-0.4,0.5-0.4,1.3,0,1.8l8,10.1C8.5,23.9,8.7,24,9,24c0,0,0,0,0,0c0.3,0,0.5-0.2,0.7-0.5l14-21.5C24.1,1.5,24.1,0.7,23.6,0.3z",
  },
  approved_16: {
    size: 16,
    path:
      "M15.8,0.2c-0.3-0.3-0.7-0.2-0.9,0.1L6,13.9L1.1,7.8c-0.3-0.3-0.7-0.3-0.9,0s-0.3,0.9,0,1.2l5.3,6.7C5.7,15.9,5.8,16,6,16c0,0,0,0,0,0c0.2,0,0.4-0.1,0.5-0.3l9.3-14.3C16.1,1,16,0.5,15.8,0.2z",
  },
  cancel: {
    size: 24,
    path:
      "M16,14.6l-2.6-2.6L16,9.3c0.4-0.4,0.4-1,0-1.3c-0.4-0.4-1-0.4-1.3,0l-2.6,2.6L9.4,8c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,1,0,1.3l2.6,2.6l-2.6,2.6c-0.4,0.4-0.4,1,0,1.3c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2.6-2.6l2.6,2.6c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3C16.4,15.5,16.4,14.9,16,14.6z M20.5,3.5c-4.7-4.7-12.3-4.7-17,0C1.2,5.8,0,8.8,0,12s1.2,6.2,3.5,8.5C5.9,22.8,8.9,24,12,24s6.1-1.2,8.5-3.5C25.2,15.8,25.2,8.2,20.5,3.5z M19.2,19.2c-4,4-10.4,4-14.3,0c-1.9-1.9-3-4.5-3-7.2s1.1-5.3,3-7.2c4-4,10.4-4,14.3,0C23.1,8.8,23.1,15.2,19.2,19.2z",
  },
  cancel_16: {
    size: 16,
    path:
      "M8.9,8l6.9-6.9c0.3-0.3,0.3-0.7,0-0.9c-0.3-0.3-0.7-0.3-0.9,0L8,7.1L1.1,0.2c-0.3-0.3-0.7-0.3-0.9,0s-0.3,0.7,0,0.9L7.1,8l-6.9,6.9c-0.3,0.3-0.3,0.7,0,0.9C0.3,15.9,0.5,16,0.7,16s0.3-0.1,0.5-0.2L8,8.9l6.9,6.9c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.5-0.2c0.3-0.3,0.3-0.7,0-0.9L8.9,8z",
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
  trash16: {
    size: 16,
    path:
      "M14.5,2h-3.4V1.5c0-0.8-0.8-1.5-1.8-1.5H6.8c-1,0-1.8,0.7-1.8,1.5V2H1.5C0.7,2,0,2.6,0,3.3V5c0,0.3,0.3,0.5,0.6,0.5H1l0.5,9.1c0,0.8,0.9,1.4,1.8,1.4h9.3c1,0,1.8-0.6,1.8-1.4L15,5.5h0.3C15.7,5.5,16,5.3,16,5V3.3C16,2.6,15.3,2,14.5,2L14.5,2zM6.2,1.5C6.2,1.2,6.4,1,6.8,1h2.5c0.3,0,0.6,0.2,0.6,0.5V2H6.2V1.5z M1.2,3.3C1.2,3.1,1.4,3,1.5,3h12.9c0.2,0,0.3,0.1,0.3,0.3v1.3c-0.2,0-12.8,0-13.5,0V3.3z M13.3,14.5c0,0.3-0.3,0.5-0.6,0.5H3.3c-0.3,0-0.6-0.2-0.6-0.5l-0.5-9h11.6L13.3,14.5z M8,14c0.3,0,0.6-0.2,0.6-0.5V7c0-0.3-0.3-0.5-0.6-0.5C7.7,6.5,7.4,6.7,7.4,7v6.5C7.4,13.8,7.7,14,8,14z M11.1,14c0.3,0,0.6-0.2,0.6-0.5V7c0-0.3-0.3-0.5-0.6-0.5c-0.3,0-0.6,0.2-0.6,0.5v6.5C10.5,13.8,10.7,14,11.1,14z M4.9,14c0.3,0,0.6-0.2,0.6-0.5V7c0-0.3-0.3-0.5-0.6-0.5S4.3,6.7,4.3,7v6.5C4.3,13.8,4.6,14,4.9,14z",
  },
};

export default icons;
