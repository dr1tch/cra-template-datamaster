import { useEffect } from "react";

const usePageName = (route) => {
  useEffect(() => {
    document.title = route?.name;
  }, [route]);
};

export default usePageName;
