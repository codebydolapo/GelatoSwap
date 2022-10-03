import { HomeOutline, CreditCard, ReceiptRefund, CreditCardOutline } from "heroicons-react"

function Navbar() {
    return (
        <div className={`w-full h-[50px] bg-[#050607] flex justify-between fixed z-[5]`}>
            <div className={`md:w-1/3 h-full flex justify-start items-center cursor-pointer xs:1/2`}>
                <img className={`md:w-[45px] md:h-[45px] rounded-full md:mx-3 xs:w-[30px] xs:h-[30px] xs:mx-1`} alt='' src='/icons/gelato.jpg' />
                <h1 className={`text-white md:text-4xl font-bold xs:text-xl`}>GelatoSwap</h1>
            </div>
            <div className={`md:w-1/3 h-full flex justify-around items-center xs:w-[0]`}>
                <div className={`w-[30%] h-full border-b-2 border-white flex flex-col items-center justify-around cursor-pointer`}>
                    <HomeOutline className={`text-white md:w-auto xs:w-[0]`} />
                    <h1 className={`text-white md:text-xs xs:text-[0]`}>Home</h1>
                </div>
                <div className={`w-[30%] h-full flex flex-col items-center justify-around cursor-pointer`}>
                    <ReceiptRefund className={`text-white md:w-auto xs:w-[0]`} />
                    <h1 className={`text-white md:text-xs xs:text-[0]`}>Exchange</h1>
                </div>
                <div className={`w-[30%] h-full flex flex-col items-center justify-around cursor-pointer`}>
                    <CreditCard className={`text-white md:w-auto xs:w-[0]`} />
                    <h1 className={`text-white md:text-xs xs:text-[0]`}>Wallet</h1>
                </div>



            </div>
            <div className={`md:w-1/3 h-full flex justify-end items-center xs:w-1/2`}>
                <div className={`md:w-[10rem] md:h-[80%] bg-[#1767cf] flex justify-around items-center md:mx-5 rounded-[5px] cursor-pointer xs:w-[8rem] xs:mx-2 xs:h-[65%]`}>
                    <CreditCardOutline className={`text-white h-[90%]`} />
                    <h1 className={`text-white md:text-base xs:text-xs`}> Connect Wallet</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar