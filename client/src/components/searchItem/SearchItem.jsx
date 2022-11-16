import "./searchItem.css";

const SearchItem = (item) =>
{
  
  console.log("item item item", item.item.description);
  return (
    <div className="searchItem">
      <img
        src="https://www.markoub.ma/Content/front/img/Societes/CTM/logoConfort%20Plus.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.item.description}</h1>
        <span className="siDistance">{item.item.tripDistance}</span>
        <span className="siTaxiOp">{item.item.cityDepart}</span>
        <span className="siTaxiOp">{item.item.cityArrival}</span>
        <span className="siSubtitle">
          Depart time :
          {item.item.departureTime}
        </span>
        <span className="siSubtitle">
          Arrival Time : 
          {item.item.arrivalTime}
        </span>
        
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{item.item.tripStatus}</span>
          <button>{item.item.tripCost}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{item.item.tripCost}</span>
          <span className="siTaxOp">{item.item.tripType}</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
