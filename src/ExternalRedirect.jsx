import { useEffect } from "react";

export default function ExternalRedirect() {
  useEffect(() => {
    window.location.href =
      "https://app.ravgrowth.com/?_gl=1*1n3h7g6*_ga*MTIwMDQ1MzcxNi4xNzU2MDUxODQw*_ga_PLBP6P27Z5*czE3NTcwMjk3MDMkbzckZzAkdDE3NTcwMjk3MDMkajYwJGwwJGgxNTAxOTQwNjU2";
  }, []);

  return <p>Redirecting to RavBot signup…</p>;
}
