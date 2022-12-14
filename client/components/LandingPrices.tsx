interface Props{
    price: string,
    symbol: string,
    changePercent24Hr: string
}

function LandingPrices({price, symbol, changePercent24Hr}: Props) {
    return (
        <div className={`md:min-w-[20rem] md:w-[20rem] md:h-[12rem] md:mx-5 flex flex-col justify-center items-center xs:min-w-[10rem] xs:w-[10rem] xs:h-[6rem]`}>
            <div className={`w-full h-[25%] flex justify-start items-end px-2`}>
                <h1 className={`md:text-base text-white mr-2 font-lighter xs:text-sm uppercase`}>{`${symbol}/USDT`}</h1>
                <h1 className={`text-sm text-green-500`}>{changePercent24Hr.slice(0, price.indexOf(".") + 2)}</h1>
            </div>
            <div className={`w-full h-[50%] px-2  flex justify-start items-center`}>
                <h1 className={`md:text-5xl text-white font-extrabold xs:text-2xl`}>{price.slice(0, price.indexOf(".") + 2)}</h1>
            </div>
            <div className={`w-full h-[25%] px-2 flex justify-start items-start`}>
                <h1 className={` text-white`}>{Math.round(price)}</h1>
            </div>
        </div>
    )
}
//
export default LandingPrices