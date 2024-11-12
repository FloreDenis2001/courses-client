export const determinePath = (path:string) => {
    if (typeof window !== "undefined" && window.location.host === "localhost:8081") {
      return path ? `/ui/${path}/` : `/ui/`;
    }
    return path ? `/${path}/` : "/";
  };