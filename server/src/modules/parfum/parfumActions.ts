import type { RequestHandler } from "express";

import parfumRepository from "./parfumRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const parfums = await parfumRepository.readAll();

    res.json(parfums);
  } catch (err) {
    next(err);
  }
};

// Action GET for get just one parfum with dynamic id
const read: RequestHandler = async (req, res, next) => {
  try {
    const parfumsId = Number(req.params.id);
    const parfums = await parfumRepository.read(parfumsId);

    if (parfums === null) {
      res.sendStatus(404);
    } else {
      res.send(parfums);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const addParfums = await parfumRepository.create(req.body);

    if (addParfums) {
      res
        .status(201)
        .send(`Le Parfum ${req.body.name} à été ajouter avec succés`);
    } else {
      res
        .status(404)
        .send("Une erreur à été rencontrée, votre parfum n'a pas été ajouter");
    }
  } catch (err) {
    next(err);
  }
};

const deleteParfums: RequestHandler = async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const deleteResult = await parfumRepository.destroy(id);
    if (deleteResult) {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, deleteParfums };
