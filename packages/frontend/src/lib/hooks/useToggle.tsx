import { useCallback, useState } from "react";

export default function useToggle(defaultValue: boolean) : [boolean, typeof onToggle] {
    const [value, setValue] = useState(defaultValue);
    const onToggle = useCallback(() => {
      setValue(!value);
    }, [value]);
    return [value, onToggle];
}