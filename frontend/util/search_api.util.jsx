export const findSpots = (site) => {
  return $.ajax({
    method: 'GET',
    url: `api/search`,
    data: {site}
  })
}