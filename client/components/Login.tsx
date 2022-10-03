function Login() {
    return (
        <div className={`w-full md:h-full pt-[50px] flex justify-center xs:h-full`}>
            <div className={`md:w-[70%] h-full flex md:flex-row xs:flex-col justify-center items-center xs:w-[100vw]`}>
                <div className={`md:w-[60%] h-full flex items-center justify-center md:px-0 xs:w-[95%] xs:px-2`}>
                    <div className={`w-full h-[30rem] flex flex-col items-center justify-center`}>
                        <div className={`w-full h-[3.5rem] flex flex-row justify-center items-center my-[2rem]`}>
                            <img className={`w-[45px] h-[45px] rounded-full mx-3`} alt='' src='/icons/gelato.jpg' />
                            <h1 className={`text-white text-4xl font-bold`}>GelatoSwap</h1>
                        </div>
                        <div className={`w-full h-[3.5rem] flex justify-center items-center my-2`}>
                            <input type='text' placeholder='Input email address or mobile number' className={`w-[30rem] h-full border-b-[1px] border-grey bg-inherit text-white outline-0`} />
                        </div>
                        <div className={`w-full h-[3.5rem] flex justify-center items-center`}>
                            <button className={`w-[10rem] h-[2.2rem] bg-[#1767cf] text-white text-lg rounded-base`}>Next</button>
                        </div>
                        <div className={`w-full h-[3.5rem] mt-4 flex justify-center`}>
                            <div className={`w-[15rem] h-[2.5rem] border-2 border-white flex items-center justify-center mx-2 bg-white`}>
                                <img src='icons/google.png' className={`w-[25px] h-[25px] rounded-full mx-2`} alt='' />
                                <h1 className={``}>Google</h1>
                            </div>
                            <div className={`w-[15rem] h-[2.5rem] border-2 border-white flex items-center justify-center mx-2 bg-white`}>
                                <img src='icons/apple.webp' className={`w-[30px] h-[30px] rounded-full mx-2`} alt='' />
                                <h1 className={``}>Apple</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`md:w-[40%] h-full flex justify-center items-center md:my-0 xs:w-[95%] xs:my-3 `}>
                    <img src='/images/barcode.png' className={`w-[85%] h-auto `} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Login

//<div className = {``}></div>
