import Navbar from "@/components/HomePage/Navbar";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}
