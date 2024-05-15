import "./layouts.css"
import {
    WalletMultiButton as MaterialUIWalletMultiButton,
} from '@solana/wallet-adapter-material-ui';

const Navbar = () => {

    return (
        <div className="mx-4 md:mx-[40px] lg:mx-[160px] h-[132px]  flex flex-row gap-2 items-center justify-between z-50">
            <div className="w-[200px] h-12 flex flex-row items-center gap-2">
                <img src="/assets/icon/eden.svg" className="w-12 h-12"/>
                <p className="text-[32px] font-extrabold leading-normal -tracking-[1.6px] font-manrope text-dark-green">Eden</p>
            </div>
            <MaterialUIWalletMultiButton 
                variant="text" 
                walletIcon={null}
                style={{
                    display: "flex",
                    padding: "10px 11px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    background: "#134D2E",
                    color: 'white',
                    fontSize: 16,
                    borderRadius: 16
                }} 
            />
        </div>
    );
}

export default Navbar;