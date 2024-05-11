import { Divider } from "@mui/material";

const HowTo = () => {
    return (
        <div className="px-4 w-full flex flex-col mt-[160px] font-grotesk">
            <div className="max-w-[572px] mx-auto flex flex-col">
                <div className="mx-auto flex flex-col gap-2 items-center">
                    <div className="text-[32px] md:text-[60px] leading-normal title-description capitalize -tracking-[1.2px] font-bold">
                        How To Contribute in our IDO
                    </div>
                </div>
                <p className="text-black text-xl mt-8">To buy into our Limited Time IDO, follow the following steps.</p>
            </div>
            <div className="h-[490px] flex flex-row md:gap-[20px] lg:gap-[96px] justify-center mt-12">
                <div className="hidden md:flex flex-row items-start">
                    <div className="md:w-[240px] md:h-[240px] lg:w-[345px] lg:h-[345px]">
                        <img src="/assets/icon/ic-colorbox.png" />
                    </div>
                </div>
                <div className="w-full md:min-w-[410px] md:w-[410px] flex flex-row gap-5">
                    <div className="hidden md:flex flex-row gap-2 items-start">
                        <div className="flex flex-col gap-6 items-start text-dark-green">
                            <p className="mt-1 text-[12px] leading-[20px] font-medium">01.</p>
                            <p className="mt-[85px] text-[12px] leading-[20px] font-medium">02.</p>
                            <p className="mt-[42px] text-[12px] leading-[20px] font-medium">03.</p>
                            <p className="mt-[85px] text-[12px] leading-[20px] font-medium">04.</p>
                        </div>
                        <Divider orientation="vertical" />
                    </div>
                    <div className="h-fit  flex flex-col items-start text-dark-gray">
                        <div className="flex flex-col gap-2 items-start">
                            <p className="text-2xl leading-8 font-medium text-dark-green">Create a Wallet</p>
                            <p className="text-sm leading-[21px] text-left">Download Phantom wallet from the app store or google play store. Desktop users, download phantom extension from&nbsp;
                                <a href="https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa" target="_blank">
                                    <span className="text-[#06BDC5]">phantom.app</span></a>
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 items-start mt-6">
                            <p className="text-2xl leading-8 font-medium text-dark-green">Get some SOL / USDT</p>
                            <p className="text-sm leading-[21px] text-left">Have some SOL, USDT in your wallet to exchange for $EDN</p>
                        </div>
                        <div className="flex flex-col gap-2 items-start mt-6">
                            <p className="text-2xl text-left leading-8 font-medium text-dark-green">Connect to Eden presale Website</p>
                            <p className="text-sm leading-[21px] text-left">Enter the amount of $EDN token you wish to purchase. Our platform will display the corresponding transaction details, including the current exchange.</p>
                        </div>
                        <div className="flex flex-col gap-2 items-start mt-6">
                            <p className="text-2xl leading-8 font-medium text-dark-green">Confirm the Transaction</p>
                            <p className="text-sm leading-[21px] text-left">Review the transaction details and verify that everything is accurate. Once you are satisfied, confirm the transaction through your connected wallet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowTo;