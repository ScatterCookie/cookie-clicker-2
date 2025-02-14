export default function BuyButton({itemIncrease, cps, setCps, setCookies, cookies, cost}) {

    return (
        <>
            <button onClick={() => {
                {cookies < cost ? alert('You dont have enough cookies') : 
                setCps(cps + itemIncrease)
                setCookies(currentCookies => (currentCookies -= cost) + cps)
                }
                }}>Buy!
            </button>
        </>
    )
}