import { useParams } from "react-router-dom";
import Header from "../component/Header";
import AccountInfo from "../component/AccountInfo";

export default function AccountDetail() {
    const { address } = useParams()

    
    return(
        <div className="text-white">
            <Header/>

            <div>
                <h1 className="text-center text-2xl font-bold my-8">Address: <span className="px-4 py-1 bg-blue-900 rounded-full">{address}</span></h1>
            </div>
            
            <AccountInfo address={address}/>
        </div>
    )
}