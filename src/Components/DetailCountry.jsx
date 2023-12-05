import { useParams } from "react-router-dom";

export default function DetailCountry(props) {
    let {countriesList} = props
    let {country} = useParams()
    console.log(country)
    console.log(countriesList)
    
// Save data to local storage


    const countryDetail = countriesList.find(countryDetail => countryDetail.cca3 === country);
    const { name, capital, region, population, flags, languages, tld, currencies, subregion } = countryDetail;
    return(
        <div>
            <h2>{name.common}</h2>
            {population}
            {region}
            {capital}
            {subregion}
            {tld}
            {tld}
        </div>
   )
};
