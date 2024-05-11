const Dive = () => {
    return (
        <div className="px-4 w-full flex flex-col mt-[160px]">
            <div className="max-w-[731px] mx-auto flex flex-col gap-4">
                <div className="mx-auto flex flex-col items-center">
                    <div className="text-[32px] md:text-[60px] leading-normal -tracking-[1.2px] title-description capitalize">
                        Unlock the Next Paradigm of Social
                    </div>
                </div>
                <p className="text-black mt-2">Soon to be integrated across all our features, $EDN empowers you to navigate our platform with the ultimate freedom</p>
            </div>
            <div className="flex flex-col md:flex-row gap-[60px] items-center justify-center mt-12">
                <div className="w-[320px] flex flex-col gap-4 items-center">
                    <div className="w-[88px] h-[88px] p-3">
                        <div className="w-full h-full flex items-center justify-center">
                            <img src="/assets/icon/ic-trending-up.svg" className="w-12 h-12"/>
                        </div>
                    </div>
                    <div className="text-[32px] text-dark-green tracking-tight">
                        Earn Rewards
                    </div>
                    <p className="text-base leading-normal font-medium text-black">by browsing the web, indexing pages, and interactions within the platform</p>
                </div>
                <div className="w-[320px] flex flex-col gap-4 items-center">
                    <div className="w-[88px] h-[88px] p-3">
                        <div className="w-full h-full flex items-center justify-center">
                            <img src="/assets/icon/ic-git-merge.svg" className="w-12 h-12" />
                        </div>
                    </div>
                    <div className="text-[32px] text-dark-green tracking-tight">
                        Share Profit
                    </div>
                    <p className="text-base leading-normal font-medium text-black tracking-tighter">by holding $EDN, participate in passive and steady profit sharing with the entire platform</p>
                </div>
                <div className="w-[320px] flex flex-col gap-4 items-center">
                    <div className="w-[88px] h-[88px] p-3">
                        <div className="w-full h-full">
                            <img src="/assets/icon/ic-users.svg" className="w-12 h-12" />
                        </div>
                    </div>
                    <div className="text-[32px] text-dark-green tracking-tight">
                        Build Together
                    </div>
                    <p className="text-[14px] leading-normal font-medium text-black">participate in key decisions, take your vote, and decide where Eden should go next</p>
                </div>
            </div>
        </div>
    )
}

export default Dive;