import { HomeOutline, CreditCard, ReceiptRefund, CreditCardOutline } from "heroicons-react"

function Navbar() {
    return (
        <div className={`w-full h-[50px] bg-[#050607] flex fixed`}>
            <div className={`w-1/3 h-full flex justify-start items-center cursor-pointer`}>
                <img className={`w-[45px] h-[45px] rounded-full mx-3`} alt='' src='/icons/gelato.jpg' />
                <h1 className={`text-white text-4xl font-bold`}>GelatoSwap</h1>
            </div>
            <div className={`w-1/3 h-full flex justify-around items-center`}>
                <div className={`w-[30%] h-full flex flex-col items-center justify-around cursor-pointer`}>
                    <CreditCard className={`text-white`} />
                    <h1 className={`text-white text-xs`}>Exchange</h1>
                </div>
                <div className={`w-[30%] h-full border-b-2 border-white flex flex-col items-center justify-around cursor-pointer`}>
                    <HomeOutline className={`text-white`} />
                    <h1 className={`text-white text-xs`}>Home</h1>
                </div>
                <div className={`w-[30%] h-full flex flex-col items-center justify-around cursor-pointer`}>
                    <ReceiptRefund className={`text-white`} />
                    <h1 className={`text-white text-xs`}>Exchange</h1>
                </div>

            </div>
            <div className={`w-1/3 h-full flex justify-end items-center`}>
                <div className = {`w-[10rem] h-[85%] bg-[#1767cf] flex justify-around items-center mx-5 rounded-lg cursor-pointer`}>
                    <CreditCardOutline className = {`text-white h-[90%]`}/>
                    <h1 className = {`text-white text-base font-light`}> Connect Wallet</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar