import { useEffect, useState } from "react"
import BuyButton from "./BuyButton"

export default function ShopContainer({cookies, setCookies, cps, setCps}) {

    const [shopItem, setShopItem] = useState([])

    useEffect(() => {
        async function fetchShopData() {
            const response = await fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`)
            const data = await response.json()
            setShopItem(data)
        }

        fetchShopData()
    }, [])

    return (
        <section className="shopContainer">
            <h2>Shop</h2>
            {shopItem.map(item => (
            <div key={item.id} className="shopItem">
                <BuyButton itemIncrease={item.increase} cookies={cookies} setCookies={setCookies} cps={cps} setCps={setCps} cost={item.cost}/>
                <p>{item.name}</p>
                <p>{item.cost}</p>
                <p className="hidden">{item.increase}</p>
            </div>
      ))}
        </section>
    )
}