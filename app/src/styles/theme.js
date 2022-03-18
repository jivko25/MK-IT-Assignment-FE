const { createTheme } = require("@mui/material");

export const theme = createTheme({
    spacing: 12,
    palette: {
        type: "dark",
        primary: {
          main: "#66FCF1",
        },
        secondary: {
          main: "#45A29E",
        },
        warning: {
          main: "#FFC120",
        },
        info: {
          main: "#c5c6c7",
        },
        success: {
          main: "#1bde51",
        },
        error: {
          main: "#ff4b2f",
        },
        background: {
          default: "#0B0C10",
          paper: "#1F2833",
        },
        divider: "#222237",
        text: {
          primary: "#FFFFFF",
          secondary: "#E1E1FC",
          disabled: "#8d8da8",
          hint: "#E1E1FC",
        },
      }
})