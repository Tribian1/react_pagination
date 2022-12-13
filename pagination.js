const List = () => {
  const [listItems, setListItems] = useState(10);

  return (
    <div>
      {data.slice(0, listItems).map(rec => {
        return <div>{rec.id}</div>
      })}
      <button onClick={() => setListItems(listItems + 10)} >Show more...</button>
    </div>
  );
}
