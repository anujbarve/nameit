import './NameCard.css'

const nameCheapURL = 'https://www.namecheap.com/domains/registration/results/?domain='

const NameCard = ({suggestedName}) => {
    return ( 
        <a target="_blank" rel="noreferrer" href={nameCheapURL + suggestedName}>
        <div className="result-name-card">
            <p className="result-name">{suggestedName}</p>
        </div>
        </a>
     );
}
 
export default NameCard;