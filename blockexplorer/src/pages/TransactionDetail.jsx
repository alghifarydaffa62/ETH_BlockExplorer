import { useParams } from "react-router-dom"
import BackButton from "../component/BackButton"
import ShortHash from "../lib/shortenHash"
import Header from "../component/Header"
import TransactionBoxDetail from "../component/TransactionBoxDetail"

export default function TransactionDetail() {
    const { hash } = useParams()

    return(
        <div>
            <Header/>

            <div className="mt-5">
                <h1 className="text-center text-2xl text-white font-semibold">
                    Transaction 
                    <span className="text-blue-300"> {ShortHash(hash)}</span>
                </h1>
            </div>
            
            <TransactionBoxDetail hash={hash}/>
        </div>
    )
}