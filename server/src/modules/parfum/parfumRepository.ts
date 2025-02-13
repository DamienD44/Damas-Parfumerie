import type { Card } from "../../../../client/src/types/ParfumCard";
import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class ParfumRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM parfums");

    return rows;
  }
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT parfums.id, parfums.name, parfums.marque, parfums.description, parfums.image 
       FROM parfums
       WHERE parfums.id = ?`,
      [id],
    );
    return rows[0];
  }

  async create(parfums: Card) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO parfums (name, marque, description, image, user_id) VALUES (?,?,?,?,?)",
      [
        parfums.name,
        parfums.marque,
        parfums.description,
        parfums.image,
        parfums.user_id,
      ],
    );

    return result.insertId;
  }
  async destroy(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "DELETE FROM parfums WHERE id = ?",
      [id],
    );
    return rows;
  }

  async update(parfums: Card) {
    const [row] = await databaseClient.query<Result>(
      "UPDATE parfums SET name = ?, marque = ?, description = ?, image = ?, user_id = ? WHERE id = ?",
      [
        parfums.name,
        parfums.marque,
        parfums.description,
        parfums.image,
        parfums.user_id,
        parfums.id,
      ],
    );

    return row.affectedRows;
  }
}

export default new ParfumRepository();
