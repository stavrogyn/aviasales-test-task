const searchHost = process.env.REACT_APP_HOST ?? "https://front-test.beta.aviasales.ru";
const initialUrl = `${searchHost}/search`
const resultsUrl = `${searchHost}/tickets`

export const fetchSearchId: () => Promise<Record<string, string>> = () => {
   return fetch(initialUrl)
    .then(response => response.json())
    .catch(() => fetchSearchId())
}

export const fetchTickets: (searchId: string) => Promise<Record<string, string>> = (searchId: string) => {
  const params = new URLSearchParams({ searchId });
  return fetch(`${resultsUrl}?${params}`)
    .then(response => response.json())
    .catch(() => fetchTickets(searchId))
}
