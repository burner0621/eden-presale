import { CircularProgress } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Tokenomics = () => {
    return (
        <div className="px-4 w-full flex flex-col gap-12 font-grotesk">
            <div className="max-w-full md:max-w-[572px] mx-auto flex flex-col gap-8">
                <div className="mx-auto flex flex-col gap-2 items-center">
                    <div className="text-[32px] md:text-[60px] leading-normal title-description font-bold -tracking-[1.2px]">
                        Key Tokenomics
                    </div>
                </div>
                <p className="text-black text-xl">Deep dive into the key aspects of our supply, geared to enable growth, longevity and community.</p>
            </div>
            <div className="flex-wrap md:flex-nowrap flex flex-row gap-8 justify-center">
                <div className="w-[130px] flex flex-col gap-[18.9px] items-center">
                    <CircleProgressBar percent={30}/>
                    <div className="flex flex-col gap-1 text-dark-gray">
                        <div>Treasury/Reserve</div>
                        <p className="text-[14px] leading-[21px]">(Vested)</p>
                    </div>
                </div>
                <div className="w-[130px] flex flex-col gap-[18.9px] items-center">
                    <CircleProgressBar percent={15}/>
                    <div className="flex flex-col gap-1 text-dark-gray">
                        <div>Staking Rewards</div>
                        <p className="text-[14px] leading-[21px]">(Vested)</p>
                    </div>
                </div>
                <div className="w-[130px] flex flex-col gap-[18.9px] items-center">
                    <CircleProgressBar percent={12}/>
                    <div className="flex flex-col gap-1 text-dark-gray">
                        <div>Public Sale</div>
                    </div>
                </div>
                <div className="w-[130px] flex flex-col gap-[18.9px] items-center">
                    <CircleProgressBar percent={6}/>
                    <div className="flex flex-col gap-1 text-dark-gray">
                        <div>Advisor</div>
                    </div>
                </div>
                <div className="w-[130px] flex flex-col gap-[18.9px] items-center">
                    <CircleProgressBar percent={15}/>
                    <div className="flex flex-col gap-1 text-dark-gray">
                        <div>Platform (Vested)</div>
                    </div>
                </div>
                <div className="w-[130px] flex flex-col gap-[18.9px] items-center">
                    <CircleProgressBar percent={8}/>
                    <div className="flex flex-col gap-1 text-dark-gray">
                        <div>Private Sale</div>
                    </div>
                </div>
                <div className="w-[130px] flex flex-col gap-[18.9px] items-center">
                    <CircleProgressBar percent={14}/>
                    <div className="flex flex-col gap-1 text-dark-gray">
                        <div>Team (Vested)</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const CircleProgressBar = ({percent}) => {
    return (
        <div className={`progress`}>
            <span className="title timer" data-from="0" data-to={percent} data-speed="1800">{percent}</span>
            <div className="overlay"></div>
            <div className={`left animate${percent}`}></div>
            <div className="right"></div>
        </div>
    )
}
export default Tokenomics;