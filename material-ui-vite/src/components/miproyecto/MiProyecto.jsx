import React from "react";
import PropXD from "./PropXD";
import { Divider } from "@mui/material";

export default function MiProyecto() {
  const data = {
    store: {
      book: [
        {
          category: "reference",
          author: "Nigel Rees",
          title: "Sayings of the Century",
          price: 8.95,
          instock: true,
          sold: false,
        },
        {
          category: "fiction",
          author: "Evelyn Waugh",
          title: "Sword of Honour",
          price: 12.99,
          instock: false,
          sold: true,
        },
        {
          category: "fiction",
          author: "Herman Melville",
          title: "Moby Dick",
          isbn: "0-553-21311-3",
          price: 8.99,
          instock: true,
          sold: false,
        },
        {
          category: "fiction",
          author: "J. R. R. Tolkien",
          title: "The Lord of the Rings",
          isbn: "0-395-19395-8",
          price: 22.99,
          instock: false,
          sold: false,
        },
      ],
      bicycle: {
        color: "red",
        price: 19.95,
        instock: true,
        sold: false,
      },
    },
  };

  return (
    <div>
        {/*USO DE PROPS */}
      <PropXD books={data.store.book} bicycle={data.store.bicycle} />

      <Divider color="Secondary"/>
      <h2>Lista de libros usando .map</h2>
      <ul>
        {data.store.book.map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong> - {book.author} - ${book.price}{" "}
            {book.instock ? "(Disponible)" : "(Agotado)"}
          </li>
        ))}


      </ul>
    </div>
  );
}
