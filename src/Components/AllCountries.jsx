import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";



export default function AllCountries(props) {
    let {countriesList} = props
    const [filter, setFilter] = useState('')
    
    console.log(filter)
    const countries = countriesList.filter((country) => {
        return country.name.common.toLowerCase().startsWith(filter)
    })




    const formatPopulation = (population) => {
        return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    
    const navigate = useNavigate()
    const handleClick = (country) =>{
        navigate(`/detail/${country.cca3}`)
    }

    const handlechange =(e) => {
        setFilter(e.target.value)
    }


    return(
        <div >
            <input type="text"
             onChange={handlechange}
            //  onKeyDown={handleKeydown} 
             value={filter} />
            {
                countries.map((country) => 
                    <div className="card"
                     onClick={() => handleClick(country)}
                    >
                        <img className="card-img-top" src={country.flags.png} alt={country.name.common} />
                        <h3>{country.name.common}</h3>
                        <p>{formatPopulation(country.population)}</p>
                        <p>{country.region}</p>
                        <p>{country.capital}</p>
                    </div>
                )
            }
        </div>
    )
};
