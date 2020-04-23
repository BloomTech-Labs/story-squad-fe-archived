import React, { useState } from 'react';
import { ReactComponent as LockedIcon } from '../img/lock-icon.svg';

interface SubDisplayProps {
    submission: string;
    username: string;
    type: 'Story' | 'Illustration';
    key: 'story1Points' | 'pic1Points' | 'story2Points' | 'pic2Points';
    points: number;
    // handleChange: (e: any) => void;
}

const VersusMatchup: React.FC<SubDisplayProps> = ({ submission, username, type, key, points }) => {
    const [isLocked, setLocked] = useState({ lock: true });
    return <LockedIcon />;
};

export default VersusMatchup;
