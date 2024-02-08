import Link from "next/link";
import { useEffect } from "react";

const Back = () => {
    useEffect(() => {
        window.addEventListener("scroll", backToTop);
        return () => {
            window.removeEventListener("scroll", backToTop);
        }
    }, [])

    const backToTop = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY - 500;
            windowHeight > document.querySelector("h1")?.getBoundingClientRect().top
                ? (document.getElementById('btn').style.opacity = 1,
                    document.getElementById('whatsapp').style.translate = "-80px")//setPos("opacity-100 right-4")
                : (document.getElementById('btn').style.opacity = 0, document.getElementById('whatsapp').style.translate = "0px")//setPos("opacity-0 -right-20");
        }
    }

    return (
        <>
            <Link href={"https://wa.me/+917492929268"} id="whatsapp" style={{ position: "fixed", zIndex: 20, bottom: 50, fontSize: 20, transition: "all 1000ms ease-in", right: 50, backgroundColor: "#06d889", padding: 10, borderRadius: 999 }}><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg></Link>
            <button onClick={() => {
                document.querySelector('h1').scrollIntoView({ behavior: 'smooth' })
            }} id="btn" style={{ position: "fixed", zIndex: 10, bottom: 50, fontSize: 20, transition: "all 500ms ease-in", right: 50, backgroundColor: "#06d889", padding: 10, borderRadius: 999, opacity: 0 }}><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-circle"><circle cx="12" cy="12" r="10" /><path d="m8 14 4-4 4 4" /></svg></button>
        </>
    );
}

export default Back;