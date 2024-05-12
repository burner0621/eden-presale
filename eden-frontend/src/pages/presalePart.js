import DescriptionPart from "../components/descriptionPart";
import PresaleCard from "../components/presaleCard";
import {
    useWallet,
} from "@solana/wallet-adapter-react";
import {
    PRESALE_AUTHORITY,
    TOKEN_PUBKEY,
    USDT_TOKEN_PUBKEY,
    TOKEN_PRESALE_HARDCAP,
    SOL_PRICEFEED_ID
} from "../constants"

import usePresale from "../hooks/usePresale";

import "./pages.css"


const PresalePart = () => {

    const { publicKey } = useWallet();
    const {
        createPresale,
        depositToken,
        updatePresale,
        claimToken,
        withdrawSol,
        withdrawToken,
        buyToken,
        updateAuth
    } = usePresale();

    const onCreatePresale = async () => {
        await createPresale();
    };

    const onDepositToken = async (depositingToken, pythAccount, amount) => {
        await depositToken(depositingToken, pythAccount, amount);
    };

    const onBuyToken = async () => {
        await buyToken(0.1);
    };

    const onWithdrawToken = async (withdrawingToken) => {
        await withdrawToken(withdrawingToken);
    };

    const onUpdateAuth = async () => {
        await updateAuth();
    };
  
    const onUpdatePresale = async () => {
        await updatePresale();
    };

    const onClaimClub = async () => {
        await claimToken();
    };

    const onWithdrawSol = async () => {
        await withdrawSol();
    };

    return (
        <div className="w-full display-flex justify-content-center align-items-center">
            
            <div className="px-4 flex flex-col lg:flex-row items-center justify-center">
                <DescriptionPart />
                <PresaleCard />
            </div>
        </div >
    );
}

export default PresalePart;
