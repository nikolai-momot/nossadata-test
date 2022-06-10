const TextList = (props) => {
    const items = props.gifs.map((itemData) => {
      return <Item id={itemData.id} title={itemData.title} url={itemData?.images?.original?.url} />;
    });
    return <div className="text-container">{items}</div>;
  };
  const Item = (props) => {
    console.log(props)
    return (
      <div className="gif-item"  key={props?.id}>
        <img alt={props?.title} src={props?.url} />
      </div>
    );
  };
  export default TextList;