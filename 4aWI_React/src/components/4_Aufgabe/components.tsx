import React from 'react'


// BUTTON

type ButtonProps = {
    text: string;
}

export function Button({text}: ButtonProps) {
  return (
     <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded">
      {text}
    </button>
  );
}


// CARD

type CardProps = {
  title: string;
  description: string;
  image?: string;
};

export function Card({ title, description, image }: CardProps) {
  return (
    <div className="w-80 bg-white shadow-md rounded overflow-hidden">
      <img
        src={
          image ??
          "https://via.placeholder.com/400x300?text=Profile+Image"
        }
        alt={title}
        className="w-full"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}


// LIST ITEM

type ListItemProps = {
  label: string;
};

export function ListItem({ label }: ListItemProps) {
  return (
    <div className="bg-teal-700 text-white p-4 hover:bg-teal-800 cursor-pointer">
      {label}
    </div>
  );
}


// LIST

type ListProps = {
  items: string[];
};

export function List({ items }: ListProps) {
  return (
    <div className="w-60">
      {items.map((item) => (
        <ListItem key={item} label={item} />
      ))}
    </div>
  );
}