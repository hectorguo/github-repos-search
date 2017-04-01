export function fetchGet(url) {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  });
}