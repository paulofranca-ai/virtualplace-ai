import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // API Route - Health Check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // API Route - Stripe Checkout Session creation with lazy initialization
  app.post("/api/create-checkout-session", async (req, res) => {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const referer = req.headers.referer || "http://localhost:3000";

    // Fallback: If Stripe Secret Key is missing, we simulate the payment redirect
    if (!secretKey) {
      console.warn("STRIPE_SECRET_KEY is not defined. Initiating simulated checkout flow.");
      
      // Simulate Stripe checkout redirection after brief latency
      return res.json({
        url: `${new URL(referer).origin}/checkout-simulado?price=997`
      });
    }

    try {
      // Lazy load Stripe client
      const StripeClass = (await import("stripe")).default;
      const stripe = new StripeClass(secretKey, {
        apiVersion: "2023-10-16" as any,
      });

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "brl",
              product_data: {
                name: "O Time de Agentes de IA - Virtual Place",
                description: "Implementação completa de agentes autônomos inteligentes para impulsionar seus negócios.",
              },
              unit_amount: 99700, // R$ 997,00
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${new URL(referer).origin}/?checkout_status=success`,
        cancel_url: `${new URL(referer).origin}/?checkout_status=cancel`,
      });

      return res.json({ url: session.url });
    } catch (error: any) {
      console.error("Error creating Stripe session:", error);
      return res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware or static serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT} with Node ${process.version}`);
  });
}

startServer();
