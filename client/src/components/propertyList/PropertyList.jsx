import "./propertyList.css";

const PropertyList = (item) => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src={item.item.busimage}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>{item.item.title}</h1>
          <h2>{item.item.description}</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
