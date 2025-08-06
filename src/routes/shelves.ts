import { Router } from "express";
import { db } from "../db/client";
import { shelves } from "../db/schema";

export const shelvesRouter = Router();

// Tüm rafları getir
shelvesRouter.get("/", async (req, res) => {
  const result = await db.select().from(shelves);
  res.json(result);
});

// Yeni raf ekle
shelvesRouter.post("/", async (req, res) => {
  const data = req.body;
  try {
    const inserted = await db.insert(shelves).values(data).returning();
    res.status(201).json(inserted);
  } catch (err) {
    res.status(500).json({ error: "Raf eklenemedi." });
  }
});
