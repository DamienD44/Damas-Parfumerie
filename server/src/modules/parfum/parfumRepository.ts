import databaseClient from "../../../database/client";
import type { Rows, Result } from "../../../database/client";
import type { Parfum } from "./Parfum";

class ParfumRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM parfum");

    return rows;
  }
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT parfum.id, parfum.name, parfum.marque, parfum.description, parfum.image 
       FROM parfum 
       WHERE parfum.id = ?`,
      [id],
    );
    return rows[0];
  }

  async create(parfum: Parfum) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO parfum (name, marque, description, image, user_id) VALUES (?,?,?,?,?)",
      [
        parfum.name,
        parfum.marque,
        parfum.description,
        parfum.image,
        parfum.user_id,
      ],
    );

    return result.insertId;
  }
  async destroy(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "DELETE FROM recipe WHERE id = ?",
      [id],
    );
    return rows;
  }

  async update(parfum: Parfum) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE parfum SET name = ?, marque = ?, description = ?, image = ? user_id = ? WHERE id = ?",
      [
        parfum.id,
        parfum.name,
        parfum.marque,
        parfum.description,
        parfum.image,
        parfum.user_id,
      ],
    );

    return result.affectedRows;
  }
}

export default new ParfumRepository();
