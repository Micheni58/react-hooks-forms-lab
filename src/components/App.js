import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import { v4 as uuid } from "uuid";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange(text) {
    setSearchText(text);
  }

  function handleAddItem(newItem) {
    setItems([...items, { ...newItem, id: uuid() }]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList
        items={items}
        search={searchText} // Changed from `searchText` to `search`
        onSearchChange={handleSearchChange}
        onItemFormSubmit={handleAddItem}
      />
    </div>
  );
}

export default App;