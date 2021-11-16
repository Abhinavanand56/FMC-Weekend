import React, { useState, useEffect } from "react";

/*
 * We will include our MenuItem Component
 */
import MenuItem from "./MenuItem";

/*
 * The list of our Menu Titles (Sections) as keys, with their
 * Y-pixel position on the page as the values
 * 'Top' generically references the top of the page
 */
const menuItems = {
  sponsors: 0,
  sponsor_1: null,
  sponsor_2: null,
  sponsor_3: null,
};

const menuItemNames = {
  sponsors: "Sponsors",
  sponsor_1: "Sponsor 1",
  sponsor_2: "Sponsor 2",
  sponsor_3: "Sponsor 3",  
}

/*
 * Our menu component
 */
const Menu = () => {
  /*
   * Store the active menuItem in state to force update
   * when changed
   */
  const [activeItem, setActiveItem] = useState("Top");

  /*
   * The MutationObserver allows us to watch for a few different
   * events, including page resizing when new elements might be
   * added to the page (potentially changing the location of our
   * anchor points)
   * We also listen to the scroll event in order to update based
   * on our user's scroll depth
   */
  useEffect(() => {
    const observer = new MutationObserver(getAnchorPoints);
    observer.observe(document.getElementById("root"), {
      childList: true,
      subtree: true,
    });
    window.addEventListener("scroll", handleScroll);
  }, []);

  /*
   * Programmatically determine where to set AnchorPoints for our Menu
   */
  const getAnchorPoints = () => {
    const curScroll = window.scrollY - 100;
    const viewPortHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    for (const key in menuItems) {
      menuItems[key] =
        document.getElementById(key).getBoundingClientRect().top + curScroll;
    }
    console.log(menuItems);
    const bottom = document.body.offsetHeight;
    handleScroll();
  };

  /*
   * Determine which section the user is viewing, based on their scroll-depth
   * Locating the active section allows us to update our MenuItems to show which
   * item is currently active
   */
  const handleScroll = () => {
    const curPos = window.scrollY;    
    let curSection = null;
    // for (let i = 0; i < sections.length; i++) {
    //     if (curPos > sections[i][1] && curPos < sections[i+1][1]){
    //         curSection = sections[i][0];
    //         break;
    //     }        
    // }
    // console.log(curSection);

    /*
     * Iterate through our sections object to find which section matches with
     * the current scrollDepth of the user.
     * NOTE: This code assumes that the sections object is built with an 'ordered'
     * list of sections, with the lowest depth (top) section first and greatest
     * depth (bottom) section last
     * If your items are out-of-order, this code will not function correctly
     */
    for (const section in menuItems) {
      curSection = menuItems[section] >= curPos ? curSection : section;
      if (curSection !== section) {
          console.log(menuItems[section]);
          console.log(curPos);
        console.log(curSection);
        break
      }
    }
    if (curSection !== activeItem) {
      setActiveItem(curSection)
      console.log(activeItem);
    }
  };

  /*
   * Create the list of MenuItems based on the sections object we have defined above
   */
  const menuList = Object.keys(menuItems).map((e, i) => (
    <MenuItem
      itemName={menuItemNames[e]}
      anchorId = {e}
      key={`menuitem_${i}`}
      active={e === activeItem ? true : false}
    />
  ));

  /*
   * Return the JSX Menu, complete with nested MenuItems
   */
  return (
    <section>
      <ul>{menuList}</ul>
    </section>
  );
};

export default Menu;