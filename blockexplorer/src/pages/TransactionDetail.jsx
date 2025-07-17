import { useParams } from "react-router-dom"
import BackButton from "../component/BackButton"
import Header from "../component/Header"

export default function TransactionDetail() {
    const { hash } = useParams()

    return(
        <div>
            <Header/>
            <h1 className="text-center text-2xl text-white font-semibold">
                Transaction 
                <span className="text-blue-300">{hash}</span>
            </h1>

            <BackButton/>
        </div>
    )
}