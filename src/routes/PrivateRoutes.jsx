import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    
    if(loader){
        return 
    }

    if(user) {
        return children;
    }
};

export default PrivateRoutes;