import { useEffect } from "react";
export default function useBootstrap() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);
    
    return null;
}
