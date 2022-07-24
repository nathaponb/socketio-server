import { createGlobalStyle } from "styled-components";
import SFPro from "./assets/fonts/SF-Pro-Display-Regular.otf";
import SFProBold from "./assets/fonts/SF-Pro-Display-Bold.otf";
import SFProBlack from "./assets/fonts/SF-Pro-Display-Black.otf";
import MarkOT from "./assets/fonts/Mark-OT.woff2.ttf";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* @font-face {
	font-family: "Mark OT";
	src: url(${MarkOT}) format('truetype');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: "SF-Pro";
	src: url(${SFProBlack}) format('opentype');
	font-weight: black;
	font-style: normal;
}

@font-face {
	font-family: "SF-Pro";
	src: url(${SFPro}) format('opentype');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: "SF-Pro";
	src: url(${SFProBold}) format('opentype');
	font-weight: bold;
	font-style: normal;
} */


html, body {
	height: 100%;
	/* font-family: "Mark OT", sans-serif; */
	font-family: Arial, Helvetica, sans-serif;
}

`;

export default GlobalStyle;
