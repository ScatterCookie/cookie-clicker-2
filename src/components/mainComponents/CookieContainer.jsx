import { useEffect } from "react"

export default function CookieContainer({cookies, setCookies, cps}) {
    
    useEffect(() => {
        const cookieCounter = setInterval(() => {
            setCookies(currentCookies => currentCookies + cps)
        }, 1000)

        localStorage.setItem('cps', JSON.stringify(cps))

        return () => {
            clearInterval(cookieCounter)
        }
    }, [cps])

    useEffect(() => {
        localStorage.setItem('cookies', JSON.stringify(cookies))
    }, [cookies])

  
    return (
        <section className="cookieContainer">
            <div>
                <p>Cookies: {cookies + cps}</p>
                <p>Cookies Per Second {cps}</p>
            </div>
            <img  className="rotate" onClick={() => setCookies(cookies + 1)}  src="./src/assets/cookieclicker.png" alt="" />
        </section>
    )
}