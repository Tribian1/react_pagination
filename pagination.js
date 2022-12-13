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
Data is your array. I created state with number of items, default 10. When you press the button, you increase this state at 10
