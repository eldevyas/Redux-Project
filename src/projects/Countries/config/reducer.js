import * as Ressources from "../data/ressources";
const Countries = Ressources.Countries;
const CountryPerIndependenceYear = Ressources.CountryPerIndependenceYear;
const ContinentsList = Ressources.ContinentsList;

// Initial State
export const InitialState = {
    Countries: Countries,
    CountryPerIndependenceYear: CountryPerIndependenceYear,
    ContinentsList: ContinentsList
}

export const Reducer = (state = InitialState, action) => {
    // Add City, or Modify Population of a country
    switch (action.type) {
        case 'ADD_CITY':
            // log to console
            console.log("Adding city...");
            
            // Getting Country with Country ID
            const CountryID1 = state.Countries.find(Country => Country.ID === action.Payload.CountryID);

            // Adding City to Country
            Country.Cities.push(action.Payload.City);

            // Returning new state
            return {
                ...state,
                Countries: state.Countries
            }
        case 'UPDATE_POPULATION':
            // log to console
            console.log("Updating population...");

            // Getting Country with Country ID
            const CountryID2 = state.Countries.find(Country => Country.ID === action.Payload.CountryID);

            // country index
            const CountryIndex = state.Countries.indexOf(CountryID2);

            // Updating population
            state.Countries[CountryIndex].Population = action.Payload.Population;

            // Returning new state
            return {
                ...state,
                Countries: state.Countries
            }
        default:
            return state;
    }
}