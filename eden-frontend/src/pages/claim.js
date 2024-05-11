import { useState, useCallback, useEffect } from 'react'
import "./pages.css"
import {
    useConnection,
    useWallet
} from "@solana/wallet-adapter-react";
import * as splToken from "@solana/spl-token";
import {
    TOKEN_DECIMAL,
    TOKEN_PUBKEY,
} from "../constants"
import usePresale from "../hooks/usePresale.js"
import { Icon, IconType } from "../components/icons";
import { Divider } from "@mui/material"
import {numberWithCommas} from "../utils"

const Claim = () => {

    const { claimToken, transactionPending, buyAmount, claimedAmount } = usePresale();

    return (
        <div className="w-full flex flex-col items-center mt-[160px] text-black">
            <div className="w-full flex flex-col">
                <div className="text-[32px] md:text-[52px] tracking-tight title-description capitalize font-bold">
                    Claim your $EDN
                </div>
                <div className="text-xl tracking-tight mt-8">$EDN tokens will be available to Claim at the exact time of launch.</div>
            </div>
            <div className="w-full md:w-[400px] bg-white-green p-9 rounded-3xl flex flex-col mt-[60px]">
                <div className="flex flex-col text-base">
                    <p>Your claimable amount</p>
                    <div className="h-[34px] flex flex-row items-center justify-center mt-9">
                        <img src="/assets/icon/eden-white.svg" className='w-9 h-9 p-1 rounded-full bg-dark-green' />
                        <div className="text-[40px] ml-2">{numberWithCommas(Number((buyAmount - claimedAmount)/(10 ** TOKEN_DECIMAL)).toFixed(2))}</div>
                    </div>
                </div>
                {transactionPending ? 
                    <div className="flex flex-row items-center justify-center mt-12">
                        <Icon type={IconType.LOADING} className="w-14 h-14" />
                    </div> : 
                    <button className="h-12 px-5 py-3 rounded-xl bg-dark-green font-medium mt-12 text-white" onClick={claimToken}>Claim now</button>
                }
            </div>
        </div>
    );
}

export default Claim;