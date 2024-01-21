import { FaSpinner } from "react-icons/fa6";
import estilo from "./Spinner.module.css"
export function Spinner(){
    return (
        <div className={estilo.spinner}>
        <FaSpinner size={70} />
        </div>
    )
}