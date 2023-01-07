import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from "react-toastify";
import {AppProvider} from "../context/appContext";
import "react-markdown-editor-lite/lib/index.css";
import 'highlight.js/styles/atom-one-light.css'


export default function App({Component, pageProps}) {
    return (
        <AppProvider>
            <Component {...pageProps} />
            <ToastContainer position='top-center'/>
        </AppProvider>
    )
}
