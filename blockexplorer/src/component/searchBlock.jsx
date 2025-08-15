import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchBlock() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && input.trim() !== "") {
            navigate(`/block/${input.trim()}`);
        }
    };

    return (
        <input
            type="text"
            placeholder="Search by Block Number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full sm:w-96 h-10 px-4 bg-[#17293e] border border-gray-600 text-white placeholder-gray-400 rounded-md focus:outline-none"
        />
    );
}
