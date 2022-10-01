function LandingPrices() {
    return (
        <div className={`min-w-[20rem] w-[20rem] h-[12rem] mx-5 flex flex-col justify-center items-center`}>
            <div className={`w-full h-[25%] flex justify-start items-end px-2`}>
                <h1 className={`text-base text-white mr-2 font-lighter`}>BTC/BUSD</h1>
                <h1 className={`text-sm text-green-500`}>20%</h1>
            </div>
            <div className={`w-full h-[50%] px-2  flex justify-start items-center`}>
                <h1 className={`text-5xl text-white font-extrabold`}>28,264.23</h1>
            </div>
            <div className={`w-full h-[25%] px-2 flex justify-start items-start`}>
                <h1 className={` text-white`}>$8264.23</h1>
            </div>
        </div>
    )
}

export default LandingPrices