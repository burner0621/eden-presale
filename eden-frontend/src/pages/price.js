const Price = () => {
    return (
        <div className='bg-white-gray px-[20px] lg:px-[180px] py-[64px] flex flex-col md:flex-row justify-between'>
            <div className="flex flex-col">
                <div className="text-xl text-dark-gray">Total Supply</div>
                <div className="text-[40px] leading-[52.8px] text-dark-green mt-2">500,000,000</div>
            </div>
            <div className="flex flex-col mt-5 md:mt-0 mr-0 md:mr-5">
                <div className="text-xl text-dark-gray">Pre-Sale Price</div>
                <div className="text-[40px] leading-[52.8px] text-dark-green mt-2">1 SOL = 7350 EDN</div>
            </div>
            <div className="flex flex-col mt-5 md:mt-0 mr-0 md:mr-5">
                <div className="text-xl text-dark-gray">Pre-Sale Supply</div>
                <div className="text-[40px] leading-[52.8px] text-dark-green mt-2">50,000,000</div>
            </div>
        </div>
    )
}

export default Price;