const handleScroll = () => {
  const curPos = window.scrollY;
  let curSection = null;
  /*
   * Iterate through our sections object to find which section matches with
   * the current scrollDepth of the user.
   * NOTE: This code assumes that the sections object is built with an 'ordered'
   * list of sections, with the lowest depth (top) section first and greatest
   * depth (bottom) section last
   * If your items are out-of-order, this code will not function correctly
   */
  for (const section in menuItems) {
    curSection = menuItems[section] >= curPos ? section : curSection;
    if (curSection !== section) {
      break;
    }
  }
  if (curSection !== activeItem) {
    setActiveItem(curSection);
  }
};


export default handleScroll;