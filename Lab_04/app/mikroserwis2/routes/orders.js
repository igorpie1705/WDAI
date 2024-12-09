const express = require("express");
const orderService = require("../services/orderService");

const router = express.Router();

// Pobranie zamówienia po userID
router.get("/api/orders/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const orders = await orderService.getOrderByUserID(userId);
    if (orders.length === 0) {
      return res
        .status(404)
        .send("Nie znaleziono zamówień dla tego użytkownika.");
    }
    res.json(orders);
  } catch (error) {
    res.status(500).send("Błąd podczas pobierania zamówień.");
  }
});

// Dodanie nowego zamówienia
router.post("/api/orders", async (req, res) => {
  const { userId, bookId, quantity } = req.body;

  if (!userId || !bookId || !quantity) {
    return res.status(400).send("Brak wymaganych danych wejściowych.");
  }
  try {
    const newOrder = await orderService.addOrder({ userId, bookId, quantity });
    res.status(201).json({ id: newOrder.id });
  } catch (error) {
    res.status(500).send("Błąd podczas dodawania zamówienia.");
  }
});

// Usuwanie zamówienia
router.delete("/api/orders/:orderId", async (req, res) => {
  const orderId = req.params.orderId;
  const updateData = req.body;

  try {
    const updatedOrder = await orderService.deleteOrder(orderId, updateData);
    res.status(200).send("Pomyślnie usunięto zamówienie.");
  } catch (error) {
    res.status(500).send("Błąd podczas usuwania zamówienia.");
  }
});

// Aktualizacja zamówienia
router.patch("/api/orders/:orderId", async (req, res) => {
  const orderId = req.params.orderId;
  const updateData = req.body;

  try {
    const updatedOrder = await orderService.updateOrder(orderId, updateData);
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).send("Błąd podczas aktualizacji zamówienia.");
  }
});

module.exports = router;
