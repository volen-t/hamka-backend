import { Router } from "express";
import { db } from "../db/client";
import { yarns } from "../db/schema";

export const yarnsRouter = Router();

// Tüm iplikleri getir
yarnsRouter.get("/", async (req, res) => {
  try {
    const result = await db.select().from(yarns);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "İplikler alınamadı." });
  }
});

// Yeni iplik ekle
yarnsRouter.post("/", async (req, res) => {
  const { brand, code, thickness, quantity, shelfId } = req.body;

  try {
    const inserted = await db.insert(yarns).values({
      brand,
      code,
      thickness,
      quantity,
      shelfId,
    }).returning();

    res.status(201).json(inserted);
  } catch (err) {
    res.status(500).json({ error: "Veri eklenemedi." });
  }
});
