import SearchBlock from "./searchBlock"
import ethereum from "../assets/coins.png"
import { Link } from "react-router-dom"

export default function Header() {
    return(
        <div className="flex justify-around items-center text-white mt-5">
            <div className="flex items-center justify-center gap-3">
                <img src={ethereum} alt="Ethereum Logo" className="w-10 h-10 object-contain" />
                <div>
                    <Link to={'/'} className="text-4xl font-bold text-white">Ethereum Block Explorer</Link>
                    <h1 className="mt-2 font-bold">Project by <a className="text-blue-300" href="https://github.com/alghifarydaffa62" target="_blank">alghifarydaffa62</a></h1>
                </div>
                
            </div>
            <SearchBlock/>
        </div>
    )
}