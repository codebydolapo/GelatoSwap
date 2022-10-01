import LandingPrices from "./LandingPrices"
import styles from '../styles/landing.module.css'

function Landing() {
    return (
        <div className={`w-full h-full pt-[50px] flex flex-col justify-center items-center relative z-[2]`}>
            <img className = {`${styles.gelato1}`} src= '/icons/gelato.jpg'/>
            <div className={`w-full h-[60%] flex flex-col justify-center items-start px-5`}>
                <h1 className={`text-white text-5xl font-bold my-2`}>Trade, Swap And Hold Crypto In Seconds!</h1>
                <h1 className={`text-[#949494] text-base my-4`}>Join CodeByDolapo's Crypto Exchange.</h1>
                <button className={`w-[15rem] h-[2.5rem] bg-[#1767cf] text-white text-base rounded-[5px]`}>Buy Now!</button>
            </div>
            <div className={`w-full h-[40%] flex items-center overflow-x-scroll ${styles.landingPrices}`}>
                <LandingPrices/>
                <LandingPrices/>
                <LandingPrices/>
                <LandingPrices/>
                <LandingPrices/>
            </div>
        </div>
    )
}

export default Landing