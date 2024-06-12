import citiesJSON from './cities.json'

export function searchCities(searchTerm: string) {
  if(searchTerm === '*') {
    return citiesJSON
  }
  
  if(searchTerm.length >= 2) {
    const cities = citiesJSON.reduce((result:string[], city) => {
      const cityNameLowerCased = city.name.toLowerCase()
      const searchTermLowerCased = searchTerm.toLowerCase()
      if(cityNameLowerCased.startsWith(searchTermLowerCased) || cityNameLowerCased.includes(searchTerm)) {
       result.push(city.name)
      }
      return result
    }, [])
    return cities
  }
  
  return ''
}
