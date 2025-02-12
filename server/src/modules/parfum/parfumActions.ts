import type { RequestHandler } from "express";

import parfumRepository from "./parfumRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const parfum = await parfumRepository.readAll();

    res.json(parfum);
  } catch (err) {
    next(err);
  }
};

// Action GET for get just one parfum with dynamic id
const read: RequestHandler = async (req, res, next) => {
  try {
    const parfumId = Number(req.params.id);
    const parfum = await parfumRepository.read(parfumId);

    if (parfum === null) {
      res.sendStatus(404);
    } else {
      res.send(parfum);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const addParfum = await parfumRepository.create(req.body);

    if (addParfum) {
      res
        .status(201)
        .send(`Le Parfum ${req.body.parfum.name} à été ajouter avec succés`);
    } else {
      res
        .status(404)
        .send("Une erreur à été rencontrée, votre parfum n'a pas été ajouter");
    }
  } catch (err) {
    console.error(err);
  }
};

const deleteParfum: RequestHandler = async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const deleteRecipe = await parfumRepository.destroy(id);
    if (deleteRecipe) {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, deleteParfum };
