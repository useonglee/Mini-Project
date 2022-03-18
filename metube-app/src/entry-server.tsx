import ReactDOMServer from "react-dom/server";
import { Location } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export function render(url: Location) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
