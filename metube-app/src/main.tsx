import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import theme from "./style/theme";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
