const theme = {
  color: {
    darkblue: "#1c2a3e",
    darkgrey: "black",
  },
  border: {
    small: "1px",
  },
  borderRadius: {
    normal: "5px",
  },
  elevation: {
    shadow1: (a = 0.2) => `0 1px 3px hsla(0,0%,0%,${a})`,
    shadow2: (a = 0.2) => `0 4px 6px hsla(0,0%,0%,${a})`,
    shadow3: (a = 0.2) => `0 5px 15px hsla(0,0%,0%,${a})`,
    shadow4: (a = 0.2) => `0 10px 24px hsla(0,0%,0%,${a})`,
    shadow5: (a = 0.2) => `0 15px 35px hsla(0,0%,0%,${a})`,
  },

  fontSize: {
    small1: "12px",
    small2: "14px",
    small3: "16px",
    medium1: "18px",
    medium2: "20px",
    medium3: "24px",
    large1: "30px",
    large2: "36px",
    large3: "48px",
    huge1: "60px",
    huge2: "72px",
  },

  fontFamily: {
    heading: '"Proxima Soft", sans-serif',
    spellbook: '"Comic Sans MS", sans-serif',
    chemical: '"Proxima Soft", sans-serif',
  },

  textColor: {
    white: "white",
    disabled: "rgb(196,196,196)",
  },

  elementsColor: {
    alkali: {
      default: "rgb(82,32,186)",
      hover: "rgb(116,39,255)",
      disabled: "rgb(51,20,113)",
    },
    alkalineEarth: {
      default: "rgb(29,127,238)",
      hover: "rgb(62,150,255)",
      disabled: "rgb(18,92,175)",
    },
    transition: {
      default: "rgb(1,183,158)",
      hover: "rgb(14,205,184)",
      disabled: "rgb(11,130,113)",
    },
    otherNonMetals: {
      default: "rgb(252,132,9)",
      hover: "rgb(255,147,36)",
      disabled: "rgb(172,96,15)",
    },
    otherMetals: {
      default: "rgb(4,173,201)",
      hover: "rgb(11,198,226)",
      disabled: "rgb(13,136,154)",
    },
    halogens: {
      default: "rgb(250,61,26)",
      hover: "rgb(255,79,48)",
      disabled: "rgb(182,44,19)",
    },
    inert: {
      default: "rgb(253,179,12)",
      hover: "rgb(255,187,37)",
      disabled: "rgb(187,134,14)",
    },
    lanthanoid: {
      default: "rgb(121,184,58)",
      hover: "rgb(132,198,67)",
      disabled: "rgb(93,139,43)",
    },
    actinoid: {
      default: "rgb(63,162,62)",
      hover: "rgb(74,186,73)",
      disabled: "rgb(46,118,46)",
    },
  },

  topLabelColor: {
    number: "transparent",
    group: "transparent",
  },

  sideLabelColor: "transparent",

  mediaQueryBreakpoints: {
    desktop: "(min-width: 1200px)",
    laptop: "(min-width: 992px) and (max-width: 1199px)",
    tablet: "(min-width: 768px) and (max-width: 991px)",
    mobile: "(min-width: 480px) and (max-width: 767px)",
  },
};

export default theme;
