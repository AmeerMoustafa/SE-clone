// Global functions for keeping track of word and array indices.
let blinking_cursor = document.getElementById("cursor");
let current_text_index = 0;
let word_index = 0;

// Handling background and text change
const handleStyleChanges = (typewriter_text) => {
  const hero_description =
    document.getElementsByClassName("hero-description")[0];
  const hero_background = document.getElementsByClassName(
    "hero-container-left"
  )[0];

  if (current_text_index === 0) {
    blinking_cursor.style.setProperty("color", "var(--black-2)");
    hero_background.style.setProperty(
      "background-image",
      "linear-gradient(rgba(40, 238, 167, 0.93), rgba(40, 238, 167, 0.93)), url('../Assets/hero/hero-left.png')"
    );

    hero_description.style.setProperty("color", "var(--black-2");

    typewriter_text.style.setProperty("color", "var(--black-2)");
  } else if (current_text_index === 1) {
    blinking_cursor.style.setProperty("color", "var(--white)");
    hero_background.style.setProperty(
      "background-image",
      "linear-gradient(rgba(152, 100, 218, 0.93), rgba(152, 100, 218, 0.93)), url('../Assets/hero/hero-left.png')"
    );

    hero_description.style.setProperty("color", "var(--white");
    typewriter_text.style.setProperty("color", "var(--white)");
  } else if (current_text_index === 2) {
    blinking_cursor.style.setProperty("color", "var(--white)");
    hero_background.style.setProperty(
      "background-image",
      "linear-gradient(rgba(251, 80, 142, 0.93), rgba(251, 80, 142, 0.93)), url('../Assets/hero/hero-left.png')"
    );
    hero_description.style.setProperty("color", "var(--white");
    typewriter_text.style.setProperty("color", "var(--white)");
  }
};

const typewriter = () => {
  let typewriter_text = document.getElementById("typewriter-text");
  let text_array = ["SOFTWARE ENGINEER?", "DATA ENGINEER?", "UI/UX DESIGNER?"];
  let current_message = text_array[current_text_index];
  blinking_cursor.classList.add("blink");

  // Add a letter to the text until we reach the length of the string in our text array
  if (word_index < current_message.length) {
    typewriter_text.textContent += current_message.charAt(word_index);
    word_index++;
    handleStyleChanges(typewriter_text);
    setTimeout(typewriter, 100);
    // When we reach the end of our string length start letters from the end.
  } else {
    blinking_cursor.classList.remove("blink");
    if (typewriter_text.textContent.length > 0) {
      typewriter_text.textContent = typewriter_text.textContent.slice(0, -1);

      setTimeout(typewriter, 100);
    } else {
      current_text_index++;
      if (current_text_index === 3) {
        current_text_index = 0;
      }

      current_message = text_array[current_text_index];
      word_index = 0;

      setTimeout(typewriter, 500);
    }
  }
};

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

// functions for handling testimonial switching

const removeActive = (testimonial_target) => {
  testimonial_target.forEach((testimonial) => {
    testimonial.classList.remove("active-testimonial-button");
  });
};

const changeTestimonial = () => {
  const testimonial_tabs = document.querySelectorAll("[data-testimonial-tab]");
  const testimonial_target = document.querySelectorAll(
    "[data-testimonial-target]"
  );

  testimonial_target.forEach((testimonial) => {
    testimonial.addEventListener("click", () => {
      removeActive(testimonial_target);

      testimonial.classList.add("active-testimonial-button");

      testimonial_tabs.forEach((tab) => {
        tab.classList.remove("active-testimonial");
      });

      const target = document.querySelector(
        testimonial.dataset.testimonialTarget
      );

      target.classList.add("active-testimonial");
    });
  });
};

window.addEventListener("load", () => {
  typewriter();
  handleProgramTabs();
  changeTestimonial();
});
