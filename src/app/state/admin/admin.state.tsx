/*
import React from 'react';

const AdminContext = React.createContext<boolean | undefined>(undefined); // change ANY later

const AdminProvider: React.FC = ({ children }) => {
    const [flagged, setFlagged] = React.useState<boolean>();
    const [status, setStatus] = React.useState<boolean>();

    function handleFlagged(change: boolean) {
      setFlagged(change)
    }

    function handleStatus(change: boolean) {
      setStatus(change)
    }

    return <AdminContext.Provider value={[handleFlagged, handleStatus]}>{children}</AdminContext.Provider>;
};

export { AdminContext, AdminProvider };
*/