import { useState, useCallback } from 'react';

function useDisclosure(initialOpen = false) {
    const [open, setOpen] = useState(initialOpen);

    const openHandler = useCallback(() => setOpen(true), []);
    const closeHandler = useCallback(() => setOpen(false), []);
    const toggleHandler = useCallback(() => setOpen(prev => !prev), []);

    return {
        open,
        setOpen,
        openHandler,
        closeHandler,
        toggleHandler,
    };
}

export default useDisclosure;