export async function fetchData() {
    return await fetch(
        `https://jsonplaceholder.typicode.com/todos`
    ).then(res => {
    if (!res.ok) {
      throw new Error('Не пришли данные');
    }
    return res.json();
  });
}