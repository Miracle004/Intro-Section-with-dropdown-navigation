import React, { useState, useEffect } from "react";

export default function InteractiveDropdown() {

    const [listHeaderA, setListHeaderA] = useState(false);
    const [listHeaderB, setListHeaderB] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const sponsors = {
        databiz: "src/assets/Images/client-databiz.svg",
        audioPhile: "src/assets/Images/client-audiophile.svg",
        meet: "src/assets/Images/client-meet.svg",
        maker: "src/assets/Images/client-maker.svg"
     }
     const icons = {
        arrowUp : "src/assets/Images/icon-arrow-up.svg",
        arrowDown: "src/assets/Images/icon-arrow-down.svg",
        calender: "src/assets/Images/icon-calendar.svg",
        closeMenu: "src/assets/Images/icon-close-menu.svg",
        menu: "src/assets/Images/icon-menu.svg",
        planning: "src/assets/Images/icon-planning.svg",
        reminders: "src/assets/Images/icon-reminders.svg",
        todo: "src/assets/Images/icon-todo.svg",
     }

     const heroImages = {
        logo: "src/assets/Images/logo.svg",
        desktop: "src/assets/Images/image-hero-desktop.png",
        mobile: "src/assets/Images/image-hero-mobile.png"
     }

    const handleDrpdwnClickA = () => {
      isMobile && setListHeaderA((prev) => !prev);
    }

    const handleDrpdwnClickB = () => {
      isMobile && setListHeaderB((prev) => !prev);
    }

    useEffect(()=>{
      setWidth(window.innerWidth);
      window.addEventListener("resize", responsiveContent);

      function responsiveContent(){
        setWidth(window.innerWidth);
      }

      if(width > 375){
        console.log("desktop screen")
        setIsMobile(false);
      }else{ 
        console.log("mobile screen")
        setIsMobile(true);
      }

      return () => {
        window.removeEventListener("resize", responsiveContent);
      }
    
    }, [width])


    useEffect(()=>{
      let nav = document.querySelector("nav");
      let navMenu = document.querySelector("#menu");
      function navbar(){
        if(isMenuOpen){
          setIsMenuOpen(prev => !prev);
        }
        else{
          setIsMenuOpen(prev => !prev);
        }
      }
      
      navMenu.addEventListener("click", navbar);
      return ()=>{
        navMenu.removeEventListener("click", navbar);
      }
    }, [isMenuOpen]);

  return (
    <>
      <header>
        <img src={heroImages.logo} alt="" />
        <img src={isMenuOpen ? icons.closeMenu : icons.menu} style={isMobile ? {display: "block"} : {display: "none"}} id="menu" alt="" />
        <nav style={isMobile ? (isMenuOpen ? {display: "flex"} : {display: "none"}) : {display: "grid"}}>
            <div className="details">
                <div className="features dropdown">
                    <p className="drpdwnA drpdwn" 
                          onClick={handleDrpdwnClickA}
                          onMouseEnter={() => !isMobile && setListHeaderA(true)}
                          onMouseLeave={() => !isMobile && setListHeaderA(false)}
                    >Features 
                      <img src={listHeaderA ? icons.arrowUp : icons.arrowDown} alt="" />
                    </p>
                    <ul style={listHeaderA ? {display: "grid"} : {display: "none"}}>
                        <li><img src={icons.todo} alt="" />Todo List</li>
                        <li><img src={icons.calender} alt="" />Calenders</li>
                        <li><img src={icons.reminders} alt="" />Reminders</li>
                        <li><img src={icons.planning} alt="" />Planning</li>
                    </ul>
                </div>
                <div className="company dropdown">
                    <p className="drpdwnB drpdwn"
                          onClick={handleDrpdwnClickB}
                          onMouseEnter={() => !isMobile && setListHeaderB(true)}
                          onMouseLeave={() => !isMobile && setListHeaderB(false)}>
                      Company 
                      <img src={listHeaderB ? icons.arrowUp : icons.arrowDown} alt="" />
                    </p>
                    <ul  style={listHeaderB ? {display: "grid"} : {display: "none"}}>
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <p className="deet">Careers</p>
                <p className="deet">About</p>
            </div>
            <div className="onboarding">
                <a href="#">Login</a>
                <a href="#">Register</a>
            </div>
        </nav>
      </header>
      <main>
        <aside>
          <div className="content">
            <h1>Make {isMobile? "" : <br />}remote work</h1>
            <p>
              Get your team in sync, no matter your location. {isMobile ? " " : <br />} Streamline
              processes, create {isMobile ? <br /> : ""} team rituals, and {isMobile ? "" : <br />} watch productivity soar.
            </p>
            <button>Learn more</button>
          </div>
          <div className="sponsors">
            <img src={sponsors.databiz} alt="databiz" />
            <img src={sponsors.audioPhile} alt="audioPhile" />
            <img src={sponsors.meet} alt="meet" />
            <img src={sponsors.maker} alt="maker" />
          </div>
        </aside>
        <img src={isMobile ? heroImages.mobile : heroImages.desktop} alt="" />
      </main>
    </>
  );
}
