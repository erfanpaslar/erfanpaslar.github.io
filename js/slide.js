"use strict";

const { useState, useRef, useEffect } = React;

const useTilt = (active) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };
    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }

      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }

      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;
      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);
  return ref;
};

const Slide = ({
  image,
  title,
  subtitle,
  description,
  offset,
  isPageBackground,
}) => {
  const active = offset === 0 ? true : null,
    ref = useTilt(active);
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      ref: ref,
      className: "slide",
      "data-active": active,
      style: {
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      },
    },
    isPageBackground &&
      /*#__PURE__*/ React.createElement("div", {
        className: "slideBackground",
        style: {
          // backgroundImage: `url('${image}')`,
        },
      }),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "slideContent",
        style: {
          backgroundImage: `url('${image}')`,
        },
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "slideContentInner",
        },
        title &&
          /*#__PURE__*/ React.createElement(
            "h2",
            {
              className: "slideTitle",
              dir: "auto",
            },
            title
          ),
        subtitle &&
          /*#__PURE__*/ React.createElement(
            "h3",
            {
              className: "slideSubtitle",
              dir: "auto",
            },
            subtitle
          ),
        description &&
          /*#__PURE__*/ React.createElement(
            "p",
            {
              className: "slideDescription",
              dir: "auto",
            },
            description
          )
      )
    )
  );
};

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  offset: PropTypes.number.isRequired,
  isPageBackground: PropTypes.bool,
};

const Carousel = ({ slides, isPageBackground }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  return /*#__PURE__*/ React.createElement(
    "section",
    {
      className: "slidesWrapper",
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "slides",
      },
      /*#__PURE__*/ React.createElement(
        "button",
        {
          className: "prevSlideBtn",
          onClick: handlePrevSlide,
        },
        /*#__PURE__*/ React.createElement("img", {
          className: "angle-left",
          src: "images/angle-left.svg",
        })
      ),
      [...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (slideIndex - i);

        if (typeof slide === "string") {
          return /*#__PURE__*/ React.createElement(Slide, {
            image: slide,
            offset: offset,
            isPageBackground: isPageBackground,
            key: i,
          });
        } else {
          return /*#__PURE__*/ React.createElement(Slide, {
            image: slide.image,
            title: slide.title,
            subtitle: slide.subtitle,
            description: slide.description,
            offset: offset,
            isPageBackground: isPageBackground,
            key: i,
          });
        }
      }),
      /*#__PURE__*/ React.createElement(
        "button",
        {
          className: "nextSlideBtn",
          onClick: handleNextSlide,
        },
        /*#__PURE__*/ React.createElement("img", {
          className: "angle-right",
          src: "images/angle-right.svg",
        })
      )
    )
  );
};

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
  isPageBackground: PropTypes.bool,
};
const slides = [
  {
    id: 0,
    title: "Crack it",
    subtitle: "guess the code",
    description: "in Python & Js",
    image:
      "https://res.cloudinary.com/erfanpaslar-ir/image/upload/v1616845036/personal_website/crackIt_dbk1tv.png",
  },
  {
    id: 1,
    title: "Sudoku Solver",
    subtitle: "GUI",
    description: "in python & Js",
    image:
      "https://res.cloudinary.com/erfanpaslar-ir/image/upload/v1616845038/personal_website/sudokuSolver_kdfjsp.png",
  },
  {
    id: 2,
    title: "11th HOC",
    subtitle: "Hour Of Code Shiraz University",
    description: "in html css js",
    image:
      "https://res.cloudinary.com/erfanpaslar-ir/image/upload/v1632580824/personal_website/HOC-Front-end_mainPage.png_at_master_erfanpaslar_HOC-Front-end_jvfy4x.png",
  },
  {
    id: 3,
    title: "The Adventure",
    subtitle: "A 1979 Atari game",
    description: "in python",
    image:
      "https://res.cloudinary.com/erfanpaslar-ir/image/upload/v1616845662/personal_website/advCover_jkddxp.png",
  },
  {
    id: 4,
    title: "Magic Ball",
    subtitle: "predict future",
    description: "web",
    image:
      "https://res.cloudinary.com/erfanpaslar-ir/image/upload/v1616845038/personal_website/magicBall_jmfwub.png",
  },
  {
    id: 5,
    title: "Blackjack",
    subtitle: "Play online.",
    description: "in Javascript",
    image:
      "https://res.cloudinary.com/erfanpaslar-ir/image/upload/v1616845035/personal_website/blackjack_vdmysc.png",
  },
  {
    id: 6,
    title: "Let's Code",
    subtitle: "CMS for everyone",
    description: "in php",
    image:
      "https://res.cloudinary.com/erfanpaslar-ir/image/upload/v1616845038/personal_website/letsCode_hzxmxx.png",
  },
  {
    id: 7,
    title: "Minesweeper",
    subtitle: "GUI",
    description: "in python & Js",
    image:
      "https://res.cloudinary.com/erfanpaslar-ir/image/upload/v1616845036/personal_website/minesweeper_qsmfg2.png",
  },
  {
    id: 8,
    title: "Editor Preview generator",
    subtitle: "",
    description: "in Javascript",
    image:
      "https://res.cloudinary.com/erfanpaslar-ir/image/upload/v1616845035/personal_website/editor_ihs8of.png",
  },
  {
    id: 9,
    title: "How's the weather",
    subtitle: "",
    description: "in Javascript",
    image:
      "https://res.cloudinary.com/erfanpaslar-ir/image/upload/v1616845037/personal_website/weather_nybhtf.png",
  },
  {
    id: 10,
    title: "Simon says game",
    subtitle: "",
    description: "in Javascript",
    image:
      "https://res.cloudinary.com/erfanpaslar-ir/image/upload/v1616845037/personal_website/simon_txyw6d.png",
  },
  {
    id: 11,
    title: "Incognito suggestions on ShirazU",
    subtitle: "",
    description: "in php",
    image:
      "https://res.cloudinary.com/erfanpaslar-ir/image/upload/v1632582075/personal_website/preview2_q2n6ja.jpg",
  },
  {
    id: 12,
    title: "Realtime complex calculator",
    subtitle: "",
    description: "in Javascript",
    image:
      "https://res.cloudinary.com/erfanpaslar-ir/image/upload/v1632582916/personal_website/calculator_preview_agmtvm.jpg",
  },
  {
    id: 13,
    title: "Drag and drop to do list",
    subtitle: "",
    description: "in Javascript",
    image:
      "https://res.cloudinary.com/erfanpaslar-ir/image/upload/v1632584034/personal_website/To_Do_mjcke6.jpg",
  },
  
];
const app = /*#__PURE__*/ React.createElement(Carousel, {
  slides: slides,
  isPageBackground: true,
});
ReactDOM.render(app, document.querySelector("#app"));
