import { useParams } from "react-router-dom";
import Header from "../component/Header";
import AccountInfo from "../component/AccountInfo";
import AccountTxInfo from "../component/AccountTxInfo";

export default function AccountDetail() {
    const { address } = useParams()

    return (
        <div className="text-white">
            <Header />

            <div className="flex flex-col md:flex-row items-center justify-center gap-3 my-8 px-4 text-center">
                <span className="font-bold text-xl md:text-2xl">Address:</span>
                <span className="px-3 py-1 md:px-4 md:py-1 bg-blue-900 rounded-full break-all text-sm md:text-xl">
                    {address}
                </span>
            </div>

            <AccountInfo address={address} />
            <AccountTxInfo address={address} />
        </div>
    )
}