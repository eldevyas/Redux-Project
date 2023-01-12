export const AddCity = (CountryID, City) => {
    return {
        type: 'ADD_CITY',
        Payload: {
            CountryID: CountryID, 
            City: City
        }
    }
}

export const ModifyPopulation = (CountryID, Population) => {
    return {
        type: 'MODIFY_POPULATION',
        Payload: {
            CountryID: CountryID,
            Population: Population
        }
    }
}