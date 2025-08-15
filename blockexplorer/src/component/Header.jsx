import SearchBlock from "./searchBlock"
import ethereum from "../assets/coins.png"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-around items-center text-white mt-5 gap-4 px-4">
            {/* Logo & Title */}
            <div className="flex items-center gap-3 text-center sm:text-left">
                <img
                    src={ethereum}
                    alt="Ethereum Logo"
                    className="w-10 h-10 object-contain mx-auto sm:mx-0"
                />
                <div>
                    <Link
                        to={"/"}
                        className="text-2xl sm:text-4xl font-bold text-white"
                    >
                        Ethereum Block Explorer
                    </Link>
                    <h1 className="mt-1 font-bold text-sm sm:text-base">
                        Project by{" "}
                        <a
                            className="text-blue-300"
                            href="https://github.com/alghifarydaffa62"
                            target="_blank"
                            rel="noreferrer"
                        >
                            alghifarydaffa62
                        </a>
                    </h1>
                </div>
            </div>

            {/* Search */}
            <div className="w-full sm:w-auto">
                <SearchBlock />
            </div>
        </div>
    );
}