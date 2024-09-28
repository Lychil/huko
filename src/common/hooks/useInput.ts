import { useState } from "react"

export const useInput = (initialState: string) => {
    const [value, setValue] = useState<string>(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return {
        value, handleChange
    }
}