

function Landing({ props }: any) {
    return (
        <div className={`w-full h-full pt-[50px] flex flex-col justify-center items-center relative z-[2]`}>

            <div className={`w-1/3 h-[10rem] flex justify-center items-center `}>
                <img className={`md:w-[45px] md:h-[45px] rounded-full md:mx-3 xs:w-[30px] xs:h-[30px] xs:mx-1`} alt='' src='/icons/gelato.jpg' />
                <h1 className={`text-white md:text-4xl font-bold xs:text-xl border-b-2`}>Swap Your Tokens</h1>
            </div>

            <div className={`md:w-[85%] h-full flex md:flex-row xs:flex-col justify-center items-center xs:w-[100vw]`}>

                <div className={`w-[50%] h-full flex items-center justify-center`}>
                    <div className={`w-[30rem] pr-5`}>

                        <div className={`w-full h-[3rem] flex items-center justify-between`}>
                            <h3 className={`mx-2 text-white text-sm rounded-lg`}>Available bal: 20,000 GET</h3>
                            <h3 className={`mx-3 px-5 py-[2px] text-white text-sm bg-[#02c202] rounded-[5px]`}>Buy</h3>
                        </div>

                        <div className={`w-full h-[5rem] flex items-center justify-center my-2`}>
                            <div className={`w-[80%] h-[3.5rem]`}>
                                <input className={`w-full h-full bg-inherit outline-0 border-[1px] border-grey text-white pl-2`} placeholder='Enter GET amount' />
                            </div>
                            <div className={`w-[20%] h-[3.5rem] flex items-center justify-around`}>
                                <img className={`w-[40px] h-[40px] rounded-full`} alt='' src='/icons/gelato.jpg' />
                                {/* <h3 className={`text-white text-xs`}>GET</h3> */}
                            </div>
                        </div>

                        <div className={`w-full h-[5rem] flex items-center justify-center my-2`}>
                            <div className={`w-[80%] h-[3.5rem]`}>
                                <input className={`w-full h-full bg-inherit outline-0 border-[1px] border-grey text-white pl-2`} placeholder='Enter ETH amount' />
                            </div>
                            <div className={`w-[20%] h-[3.5rem] flex items-center justify-around`}>
                                <img className={`w-[40px] h-[40px] rounded-full`} alt='' src='/icons/gelato.jpg' />
                                {/* <h3 className={`text-white text-xs`}>GET</h3> */}
                            </div>
                        </div>

                        <div className={`w-full h-[2.5rem] border-2 border-white my-2 flex items-center justify-between px-2 rounded-lg`}>
                            <h3 className={`text-white text-sm`}>Exchange Rate</h3>
                            <h3 className={`text-white text-sm`}>1ETH = 1000GET</h3>
                        </div>

                        <div className={`w-full h-[5rem] flex items-center justify-center my-2`}>
                            <button className={`w-[15rem] h-[2.5rem] bg-[#08f508] rounded-sm text-white`}>BUY</button>
                        </div>
                    </div>
                </div>

                <div className={`w-[50%] h-full flex items-center justify-center `}>
                    <div className={`w-[30rem] pl-5`}>

                        <div className={`w-full h-[3rem] flex items-center justify-between`}>
                            <h3 className={`mx-2 text-white text-sm rounded-lg`}>Available bal: 0 ETH</h3>
                            <h3 className={`mx-3 px-5 py-[2px] text-white text-sm bg-[#f13f13] rounded-[5px]`}>Sell</h3>
                        </div>

                        <div className={`w-full h-[5rem] flex items-center justify-center my-2`}>
                            <div className={`w-[80%] h-[3.5rem]`}>
                                <input className={`w-full h-full bg-inherit outline-0 border-[1px] border-grey text-white pl-2`} placeholder='Enter GET amount' />
                            </div>
                            <div className={`w-[20%] h-[3.5rem] flex items-center justify-around`}>
                                <img className={`w-[40px] h-[40px] rounded-full`} alt='' src='/icons/gelato.jpg' />
                                {/* <h3 className={`text-white text-xs`}>GET</h3> */}
                            </div>
                        </div>

                        <div className={`w-full h-[5rem] flex items-center justify-center my-2`}>
                            <div className={`w-[80%] h-[3.5rem]`}>
                                <input className={`w-full h-full bg-inherit outline-0 border-[1px] border-grey text-white pl-2`} placeholder='Enter ETH amount' />
                            </div>
                            <div className={`w-[20%] h-[3.5rem] flex items-center justify-around`}>
                                <img className={`w-[40px] h-[40px] rounded-full`} alt='' src='/icons/gelato.jpg' />
                                {/* <h3 className={`text-white text-xs`}>GET</h3> */}
                            </div>
                        </div>

                        <div className={`w-full h-[2.5rem] border-2 border-white my-2 flex items-center justify-between px-2 rounded-lg`}>
                            <h3 className={`text-white text-sm`}>Exchange Rate</h3>
                            <h3 className={`text-white text-sm`}>1ETH = 1000GET</h3>
                        </div>

                        <div className={`w-full h-[5rem] flex items-center justify-center my-2`}>
                            <button className={`w-[15rem] h-[2.5rem] bg-[#f13f13] rounded-sm text-white`}>BUY</button>
                        </div>
                    </div>
                </div>
                {/* <div className={`w-[50%] h-full border-2 border-white`}></div> */}
            </div>
        </div>
    )
}

export default Landing

//<div className = {`border-2 border-white`}></div>