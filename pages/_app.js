import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import 'react-markdown-editor-lite/lib/index.css';
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from "react-toastify";
import {AppProvider} from "../context/appContext";


export default function App({Component, pageProps}) {
    return (
        <AppProvider>
            <Component {...pageProps} />
            <ToastContainer position='top-center'/>
        </AppProvider>
    )
}
