import "./layouts.css"
import { toast } from "react-toastify";
import { useWallet } from "@solana/wallet-adapter-react";

const Navbar = () => {

    const { select, wallets, publicKey, disconnect } = useWallet();

    const onWalletConnect = () => {
        if (!publicKey) {
            const installedWallets = wallets.filter(
                (wallet) => wallet.readyState === "Installed"
            );
            if (installedWallets.length <= 0) {
                toast.warning("Phantom wallet is not installed yet.");
                return;
            }
            select(wallets[0].adapter.name);
        } else {
            disconnect();
        }
    };

    return (
        <div className="mx-4 md:mx-[40px] lg:mx-[160px] h-[132px]  flex flex-row gap-2 items-center justify-between z-50">
            <div className="w-[200px] h-12 flex flex-row items-center gap-2">
                <img src="/assets/icon/eden.svg" className="w-12 h-12"/>
                <p className="text-[32px] font-extrabold leading-normal -tracking-[1.6px] font-manrope text-dark-green">Eden</p>
            </div>
            <button className="h-12 flex flex-row items-center justify-center rounded-2xl px-4 md:px-9 py-2 md:py-4 text-md md:text-[16px] bg-dark-green" onClick={onWalletConnect}>
                {!publicKey ? "Connect Wallet" : publicKey.toBase58().slice(0, 4) + " ... " + publicKey.toBase58().slice(-4)}
            </button>
        </div>
    );
}

export default Navbar;