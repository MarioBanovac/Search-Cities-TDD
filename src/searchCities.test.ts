import { searchCities } from "./searchCities"

describe('searchCities', () => {
  test('shouldReturnEmptyString_whenSearchTermHasLessThanTwoCharacters', () => {
    expect(searchCities('a')).toBe('')
  })
  
  test('shouldReturnCitiesThatStartWithSearchTerm_whenSearchTermHasTwoOrMoreCharacters', () => {
    expect(searchCities('Va')).toContain('Valencia')
    expect(searchCities('Va')).toContain('Vancouver')
    expect(searchCities('Ro')).toContain('Rome')
  })
  
  test('shouldBeCaseInsensitive_whenSearchTermsDifferentCase', () => {
    expect(searchCities('va')).toContain('Valencia')
    expect(searchCities('VA')).toContain('Valencia')
    expect(searchCities('rO')).toContain('Rotterdam')
  })
  
  test('shouldReturnCity_whenSearchTermPresentInCityName', () => {
    expect(searchCities('ape')).toContain('Budapest')
    expect(searchCities('opj')).toContain('Skopje')
  })
  
  test('shouldReturnAllCities_whenSearchTermIsAnAsterisk', () => {
    expect(searchCities('*').length).toBe(16)
  })
  
})
