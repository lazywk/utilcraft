import { useState } from "react";

export const useTemplateHook = () => {
  const [value, setValue] = useState(0);
  return { value, setValue };
};
