import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-style: normal;
  }

  .BtmSlider {
    .slick-list {
.slick-track {
      display: flex;
      align-items: flex-start;
    }
    }
  }
  
  .slick-list {
    overflow: visible;
    .slick-track {
      display: flex;
      align-items: flex-end;
    }
  }
`;

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<RecoilRoot>
				<GlobalStyle />
				<App />
			</RecoilRoot>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
