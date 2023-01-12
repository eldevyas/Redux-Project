// dispatch
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const P1 = () => {
    return (
        <div className="P1">
            <h1>Page 1</h1>
        </div>
    )
}

const P2 = () => {
    return (
        <div className="P2">
            <h1>Page 2</h1>
        </div>
    )
}

const P3 = () => {
    // get Year from params
    const { Year } = useParams();

    const Countries = useSelector(
        state => (
            Year ? state.Countries.filter(Country => Country.IndependenceYear === Year) : state.Countries
        )
    );

    const Dispatch = useDispatch();

    return (
        <div className="P3">
            <h1>Countries List</h1>
            <div className="CountriesCards">
                {Countries.map(Country => (
                    <div className="CountryCard" key={Country.Name}>
                        <div className="Image">
                            <img src={Country.Image} alt={Country.Name} />
                        </div>
                        <div className="Name">
                            {Country.Name}
                        </div>
                        <div className="Info">
                            <div className="IndependenceYear">
                                {Country.IndependenceYear}
                            </div>
                            <div className="Population">
                                {/* format number */}
                                {Country.Population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const P4 = () => {
    // page to display list of years of independence of each countries



    return (
        <div className="P4">
            <h1>Page 4</h1>
        </div>
    )
}

export {
    P1,
    P2,
    P3,
    P4
}