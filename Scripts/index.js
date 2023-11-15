// functions for handling program tabs

// remove classes from all tabs
const removeClasses = (tabs) => {
  tabs.forEach((tab) => {
    tab.classList.remove(
      "active-tab",
      "fsw-tab",
      "fcs-tab",
      "fsd-tab",
      "uix-tab"
    );
  });
};

// Set background on tab switch

const setBackground = (background, new_color) => {
  background.style.setProperty("background-color", `var(--${new_color})`);
};

//main function for handling tabs
const handleProgramTabs = () => {
  const program_background = document.getElementsByClassName(
    "programs-container-parent"
  )[0];

  const program_tabs = document.querySelectorAll("[data-tab-target]");
  const tabContents = document.querySelectorAll("[data-tab-content");

  program_tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      removeClasses(program_tabs);

      if (tab.id === "fsw-tab") {
        tab.classList.add("active-tab", "fsw-tab");
        setBackground(program_background, "sef_primary");
      } else if (tab.id === "fcs-tab") {
        tab.classList.add("active-tab", "fcs-tab");
        setBackground(program_background, "ylw_primary");
      } else if (tab.id === "fsd-tab") {
        tab.classList.add("active-tab", "fsd-tab");
        setBackground(program_background, "ppl_primary");
      } else if (tab.id === "uix-tab") {
        tab.classList.add("active-tab", "uix-tab");
        setBackground(program_background, "pink_primary");
      }

      const target = document.querySelector(tab.dataset.tabTarget);

      tabContents.forEach((tabContents) => {
        tabContents.classList.remove("selected-tab");
      });
      target.classList.add("selected-tab");
    });
  });
};

handleProgramTabs();
