import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { useStateContext} from '../context/StateContext';


const Navbar = () => {
    const {} = useStateContext
    const router = useRouter()
    return(
        <>
        </>
    )
}

export default Navbar