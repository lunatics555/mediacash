module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    layers: ["utilities"],
    content: [
      "./src/**/*.vue",
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.css",
      "./src/**/*.txt",
    ],
    safelist: [
      'text-w-green-300',
      'bg-w-green-300'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
    lg: {
      max: "1024px",
      },
     sm: {
        max: "639px",
      },
    },
    extend: {
      colors: {
        "m-orange": {
          200: "#ffc800",
          300: "#ff931e",
          400: "#F18F18",
          500: "#af670f" 
        },
        "m-black": {
          200: "#4D4D4D",
          300: "#2E2E2E",
          400: "#0B1131"
        },
        "m-blue": {
          10: "#F4F8FF",
          50: "#EFF0F7",
          100: "#F5F7FB",
          200: "#2ea1f4",
          300: "#A0A3BD",
          400: "#6E7191",
          500: "#0D3749"
        },

        "m-gray": {
          100: "#E5E5E5",
          200: "#C7C7C7",
          300: "#8D9297",
          400: "#606060",
          500: "#848484",

        }
      },
      fontFamily: {
        poppins: "Poppins",
        epilogue: "Epilogue"
      },
      spacing: {
        "6.5": "26px"
      },
      width: {
        fit: "fit-content",
      },
      height: {
        fit: 'fit-content'
      },
      maxWidth: {
        "ws": "940px", // wide screen
      },
      borderWidth: {
        DEFAULT: "1px",
        "0": "0",
        "2": "2px",
        "3": "3px",
        "4": "4px",
        "6": "6px",
        "7": "7px",
        "8": "8px",
      },
      borderRadius: {
        none: "0px",
        medium: "10px",
        'lg': '14.504px',
        'full': '9999px'
      },
      boxShadow: {
        "m-lg": "0px 36.2601px 72.5201px rgba(0, 0, 0, 0.1)",
        "m-sm": "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;"
      },
      fontSize: {
        'm-lg': "38px"
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
};