
import "./components.scss"

import CoinImg from "../assets/img/pre-coin.png"

const DescriptionPart = () => {
    return (
        <div className="w-full lg:w-[500px] min-h-[404px] flex flex-col font-grotesk">
            <div className="flex flex-col">
                <div className="text-[42px] md:text-[60px] leading-normal -tracking-[1.2px] text-left font-bold title-description">
                    Eden Unveils $EDN
                </div>
                <div className="text-dark-gray mt-8 font-medium text-left text-[20px]">Unlock unparalleled opportunities with $EDN, the native token powering the Eden platform.</div>
                <div className="flex flex-col mt-10 text-black-gray text-[20px]">
                    <div className="flex flex-row items-center">
                        <img src="/assets/img/check.svg" className="pr-2"/>
                        <div className="text-black-gray text-left">
                            If you choose to contribute in USDT, the price per token will be calculated based on SOL price at the time of purchase.
                        </div>
                    </div>
                    <div className="flex flex-row items-center mt-5">
                        <img src="/assets/img/check.svg" className="pr-2"/>
                        <div className="text-black-gray text-left">
                            IDO Softcap: 1000 SOL <br/>IDO Hardcap: 6800 SOL
                        </div>
                    </div>
                    <div className="flex flex-row items-center mt-5">
                        <img src="/assets/img/check.svg" className="pr-2"/>
                        <div className="text-black-gray text-left">
                            Min Contribution: 0.5 SOL <br/>Max Contribution: 10 SOL
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DescriptionPart;