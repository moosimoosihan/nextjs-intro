import NavBar from "smootihe/components/NavBar";

export default function App({Component, pageProps}){
    return <>
        <NavBar />
        <Component {...pageProps} />
    </>;
}