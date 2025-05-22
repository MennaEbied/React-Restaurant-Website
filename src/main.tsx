import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Toaster } from "sonner";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <Toaster />
        <App />
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
);
