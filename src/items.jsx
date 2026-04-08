function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 24 },
    { id: 2, name: "orange", calories: 30 },
    { id: 3, name: "banana", calories: 45 },
  ];
  fruits.sort((a, b) => a.name.localeCompare(b.name));

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: <b>{fruit.calories}</b>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
export default List;
