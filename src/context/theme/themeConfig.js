export const colorTokens = {
  drops: {
    0: "#ffffff",
    50: "#f2f2f2",
    100: "#e5e4e2",
    200: "#c9c8c6",
    300: "#aeadab",
    400: "#939290",
    500: "#797877",
    600: "#61605e",
    700: "#494846",
    800: "#323230",
    900: "#1d1d1b",
    1000: "#03040a",
  },
};

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            background: {
              high: colorTokens.drops[1000],
              midhigh: colorTokens.drops[800],
              mid: colorTokens.drops[500],
              midlow: colorTokens.drops[200],
              low: colorTokens.drops[0],
            },
            text: {
              high: colorTokens.drops[0],
              midhigh: colorTokens.drops[800],
              mid: colorTokens.drops[500],
              midlow: colorTokens.drops[200],
              low: colorTokens.drops[1000],
            },
          }
        : {
            // palette values for light mode
            background: {
              high: colorTokens.drops[0],
              mid: colorTokens.drops[500],
              low: colorTokens.drops[1000],
            },
            text: {
              high: colorTokens.drops[1000],
              mid: colorTokens.drops[500],
              low: colorTokens.drops[0],
            },
          }),
    },
  };
};
