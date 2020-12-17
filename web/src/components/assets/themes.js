import { getTimeBasedTheme } from "../../helpers";

const light = {
  background: '#e3e3e3',
  navbarBG: '#282c34',
  navbarText: '#e3e3e3',
  primary: '#282c34',
  secondary: '#65a88b',
  text: '#000',
};

const dark = {
  background: '#282c34',
  primary: '#e3e3e3',
  secondary: '#65a88b',
  navbarBG: '#282c34',
  navbarText: '#e3e3e3',
  text: '#e3e3e3',
};

const getColorsBasedOnTime = (hours) => {
  const currentTheme = getTimeBasedTheme(hours);
  if (currentTheme === 'light') {
    return ({
      colors: {
        ...light,
        modes: { dark },
      }
    })
  } else {
    return ({
      colors: {
        ...dark,
        modes: { light },
      }
    })
  }

}

const vulpisTheme = {
  ...getColorsBasedOnTime(new Date().getHours()),
  fonts: {
    body: 'Raleway, sans-serif',
    heading: 'Zilla Slab Highlight',
    monospace: 'Zilla Slab',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 300,
    bold: 500,
    heading: 500,
  },
  lineHeights: {
    body: 2,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [5, 6, 7],
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    pageLabel: {
      fontFamily: 'monospace',
      lineHeight: '.9rem',
      fontWeight: 500,
      fontSize: '.7rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05rem',
    },
    formErrorText: {
      fontFamily: 'body',
      lineHeight: '.9rem',
      fontSize: '.9rem',
      color: '#E32500',
    }
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle',
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card',
    },
    link: {
      color: 'primary',
    },
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary',
      }
    },
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
      cursor: 'pointer',
      '&:hover': {
        borderColor: 'secondary',
        boxShadow: t => `0 0 0 2px ${t.colors.secondary}`,
        outline: 'none',
      },
      '&:focus': {
        borderColor: 'secondary',
        boxShadow: t => `0 0 0 2px ${t.colors.secondary}`,
        outline: 'none',
      },
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px',
      cursor: 'pointer',
      '&:hover': {
        borderColor: 'secondary',
        boxShadow: t => `0 0 0 2px ${t.colors.secondary}`,
        outline: 'none',
      },
      '&:focus': {
        borderColor: 'secondary',
        boxShadow: t => `0 0 0 2px ${t.colors.secondary}`,
        outline: 'none',
      },
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'primary',
      cursor: 'pointer',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'background',
      '&:hover': {
        outline: 'none',
        borderColor: 'secondary',
        boxShadow: t => `0 0 0 2px ${t.colors.secondary}`,
      },
      '&:focus': {
        outline: 'none',
        borderColor: 'secondary',
        boxShadow: t => `0 0 0 2px ${t.colors.secondary}`,
      },
    },
    iconButton: {
      variant: 'buttons.primary',
      backgroundColor: 'navbarBG',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: 'navbarBG',
      outline: 'none',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        opacity: .8,
        boxShadow: '0 0 0 0',
        backgroundColor: 'secondary',
        borderColor: 'navbarBG',
      },
      '&:focus': {
        opacity: .8,
        boxShadow: '0 0 0 0',
        backgroundColor: 'secondary',
        borderColor: 'navbarBG',
      }
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      backgroundColor: 'primary',
      color: 'background',
      borderColor: 'secondary',
      fontFamily: 'body',
      '&:focus': {
        borderColor: 'secondary',
        boxShadow: t => `0 0 0 2px ${t.colors.secondary}`,
        outline: 'none',
        '&.error': {
          boxShadow: '0 0 0 2px #E32500',
          borderColor: '#E32500',
        }
      },
      '&.error': {
        borderColor: '#E32500',
      }
    },
    textarea: {
      backgroundColor: 'primary',
      color: 'background',
      fontFamily: 'body',
      borderColor: 'secondary',
      '&:focus': {
        borderColor: 'secondary',
        boxShadow: t => `0 0 0 2px ${t.colors.secondary}`,
        outline: 'none',
        '&.error': {
          boxShadow: '0 0 0 2px #E32500',
          borderColor: '#E32500',
        }
      },
      '&.error': {
        borderColor: '#E32500',
      }
    },
  },
  badges: {
    primary: {
      color: 'background',
      bg: 'primary',
    },
    secondary: {
      bg: 'secondary',
      color: '#fff',
    },
    tertiary: {
      bg: '#5FAAFA',
      color: '#fff',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
    outlineSecondary: {
      color: 'secondary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
    outlineTertiary: {
      color: '#5FAAFA',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    list: {
      fontSize: [1, 2],
    },
    a: {
      color: 'inherit',
    },
    h1: {
      color: 'primary',
      fontFamily: 'monospace',
      fontWeight: 300,
      marginBotton: '2rem',
      fontSize: 4,
    },
    h2: {
      color: 'primary',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
      marginBottom: '1.5rem',
      marginTop: '1.5rem',
    },
    h3: {
      color: 'primary',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
      marginBottom: '1rem',
      marginTop: '2rem',
    },
  },
  useLocalStorage: false,
};

export default vulpisTheme;
