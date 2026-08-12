import React from 'react';

const menuItems = [
  { id: 1, name: 'Greek Salad', price: '$12.99', description: 'Fresh vegetables, feta cheese, and olives.' },
  { id: 2, name: 'Bruschetta', price: '$5.99', description: 'Grilled bread topped with tomatoes and basil.' },
  { id: 3, name: 'Grilled Fish', price: '$18.99', description: 'Fresh catch of the day with herbs.' },
  { id: 4, name: 'Lemon Dessert', price: '$5.00', description: 'Our famous homemade lemon cake.' },
];

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Menu;