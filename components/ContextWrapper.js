import HeaderContext from '../contexts/HeaderContext';

import { useState } from 'react';

function ContextWrapper({children, navigation}) {

    const [menuItems] = useState(navigation);
    const [color] = useState(true);

    return (
        <HeaderContext.Provider value={{menuItems, color}}>
            {children}
        </HeaderContext.Provider>
    )
}


export default ContextWrapper;