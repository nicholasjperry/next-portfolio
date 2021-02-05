import HeaderContext from '../contexts/HeaderContext';
import { useContext } from 'react';


function ToggleNavigationColorButton() {
    const {color, toggleColor} = useContext(HeaderContext);

    return(
        <button style={{ backgroundColor: "white", borderRadius: "5px", padding: "5px" }} onClick={() => toggleColor(!color)}>
            Toggle Navigation Color
        </button>
    )
}

export default ToggleNavigationColorButton;