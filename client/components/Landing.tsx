import LandingPrices from "./LandingPrices"
import styles from '../styles/landing.module.css'

interface Props {
    // map(arg0: ({ symbol, price }: Props) => JSX.Element): import("react").ReactNode
    price: string,
    symbol: string
}

function Landing({props, response }: any) {
    return (
        <div className={`w-full h-full pt-[50px] flex flex-col justify-center items-center relative z-[2]`}>
            <img className={`md:visible xs:hidden ${styles.gelato1}`} src='/icons/gelato.jpg' />
            <div className={`w-full h-[60%] flex flex-col justify-center items-start px-5`}>
                <h1 className={`text-white md:text-5xl font-bold my-2 xs:text-4xl`}>Trade, Swap And Hold Crypto In Seconds!</h1>
                <h1 className={`text-[#949494] text-base my-4`}>Join CodeByDolapo's Crypto Exchange.</h1>
                <button className={`w-[15rem] h-[2.5rem] bg-[#1767cf] text-white text-base rounded-[5px]`}>Buy Now!</button>
            </div>
            <div className={`w-full h-[40%] flex items-center overflow-x-scroll ${styles.landingPrices}`}>
                {response.map(({ id, symbol, priceUsd, changePercent24Hr }: {id: string, symbol: string, priceUsd: string, changePercent24Hr:string}) => {
                    return <LandingPrices
                        symbol={symbol}
                        price={priceUsd}
                        changePercent24Hr = {changePercent24Hr}
                        key={id}
                    />
                })}
            </div>
        </div>
    )
}

export default Landing