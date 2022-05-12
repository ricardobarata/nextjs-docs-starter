import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <Button variant="contained" onClick={handleClick}>
            Clicked {count} times!
        </Button>
    );
}
