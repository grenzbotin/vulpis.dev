import { Theme } from 'theme-ui';

const light = {
  background: 'rgb(227,227,227)',
  navbarBG: 'rgb(40,44,52)',
  navbarText: 'rgb(227,227,227)',
  primary: 'rgb(40,44,52)',
  secondary: 'rgb(101,168,139)',
  text: 'rgb(0,0,0)',
  articleBoxBackground: 'rgba(0,0,0,0.05)',
  projectCardBGHover: 'rgb(101,168,139,0.7)',
  projectCardSkillBackground: 'rgba(0,0,0,0.04)',
  projectCardBackground: 'rgba(0,0,0,0.04)',
  projectCardsColor: 'rgb(227,227,227)'
};

const dark = {
  background: 'rgb(40,44,52)',
  primary: 'rgb(227,227,227)',
  secondary: 'rgb(101,168,139)',
  navbarBG: 'rgb(40,44,52)',
  navbarText: 'rgb(227,227,227)',
  text: 'rgb(227,227,227)',
  projectCardBackground: 'rgba(0,0,0,0.2)',
  projectCardSkillBackground: 'rgba(227,227,227,0.1)',
  projectCardBGHover: 'rgb(101, 168, 139,0.7)',
  projectCardsColor: 'rgb(227,227,227)',
  articleBoxBackground: 'rgba(227,227,227)'
};

const vulpisTheme: Theme = {
  colors: {
    ...light,
    modes: {
      dark
    }
  },
  fonts: {
    body: 'Raleway, sans-serif',
    heading: 'Zilla Slab Highlight',
    monospace: 'Zilla Slab'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 300,
    bold: 500,
    heading: 500
  },
  lineHeights: {
    body: 2,
    heading: 1.25
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48
  },
  radii: {
    default: 4,
    circle: 99999
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)'
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [5, 6, 7]
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    },
    pageLabel: {
      fontFamily: 'monospace',
      lineHeight: '.9rem',
      fontWeight: 500,
      fontSize: '.7rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05rem'
    },
    formErrorText: {
      fontFamily: 'body',
      lineHeight: '.9rem',
      fontSize: '.9rem',
      color: 'rgb(227,37,0)'
    }
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
      cursor: 'pointer',
      fontFamily: 'body',
      '&:hover': {
        borderColor: 'secondary',
        boxShadow: '0 0 0 2px secondary',
        outline: 'none'
      },
      '&:focus': {
        borderColor: 'secondary',
        boxShadow: '0 0 0 2px secondary',
        outline: 'none'
      }
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px',
      cursor: 'pointer',
      fontFamily: 'body',
      '&:hover': {
        borderColor: 'secondary',
        boxShadow: '0 0 0 2px secondary',
        outline: 'none'
      },
      '&:focus': {
        borderColor: 'secondary',
        boxShadow: '0 0 0 2px secondary',
        outline: 'none'
      }
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'primary',
      cursor: 'pointer',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'background',
      fontFamily: 'body',
      '&:hover': {
        outline: 'none',
        borderColor: 'secondary',
        boxShadow: '0 0 0 2px secondary'
      },
      '&:focus': {
        outline: 'none',
        borderColor: 'secondary',
        boxShadow: '0 0 0 2px secondary'
      }
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
      color: '#e3e3e3',
      '&:hover': {
        opacity: 0.8,
        boxShadow: '0 0 0 0',
        backgroundColor: 'secondary',
        borderColor: 'navbarBG'
      },
      '&:focus': {
        opacity: 0.8,
        boxShadow: '0 0 0 0',
        backgroundColor: 'secondary',
        borderColor: 'navbarBG'
      }
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold'
    },
    input: {
      backgroundColor: 'primary',
      color: 'background',
      borderColor: 'secondary',
      fontFamily: 'body',
      '&:focus': {
        borderColor: 'secondary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.secondary}`,
        outline: 'none',
        '&.error': {
          boxShadow: '0 0 0 2px rgb(227,37,0)',
          borderColor: 'rgb(227,37,0)'
        }
      },
      '&:-webkit-autofill': {
        transitionDelay: '9999s',
        transitionProperty: 'background-color, color'
      },
      '&.error': {
        borderColor: 'rgb(227,37,0)'
      }
    },
    textarea: {
      backgroundColor: 'primary',
      color: 'background',
      fontFamily: 'body',
      borderColor: 'secondary',
      '&:focus': {
        borderColor: 'secondary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.secondary}`,
        outline: 'none',
        '&.error': {
          boxShadow: '0 0 0 2px rgb(227,37,0)',
          borderColor: 'rgb(227,37,0)'
        }
      },
      '&.error': {
        borderColor: 'rgb(227,37,0)'
      }
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: 'primary'
    },
    secondary: {
      bg: 'secondary',
      color: '#fff'
    },
    tertiary: {
      bg: 'rgb(95,170,250)',
      color: '#fff'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    },
    outlineSecondary: {
      color: 'secondary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    },
    outlineTertiary: {
      color: 'rgb(95,170,250)',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    list: {
      fontSize: [1, 2]
    },
    a: {
      color: 'inherit'
    },
    h1: {
      color: 'primary',
      fontFamily: 'monospace',
      fontWeight: 300,
      marginBotton: '2rem',
      fontSize: 4
    },
    h2: {
      color: 'primary',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
      marginBottom: '1.5rem',
      marginTop: '1.5rem'
    },
    h3: {
      color: 'primary',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
      marginBottom: '1rem',
      marginTop: '2rem'
    },
    h4: {
      fontFamily: 'monospace',
      lineHeight: 'monospace',
      fontWeight: 300,
      fontSize: 3,
      marginBottom: '1rem',
      marginTop: '2rem'
    },
    hr: {
      color: 'secondary'
    }
  },
  useLocalStorage: false
};

export default vulpisTheme;
