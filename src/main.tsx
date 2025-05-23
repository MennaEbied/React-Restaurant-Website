import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { Toaster } from "sonner";
import { AuthProvider } from "./contexts/AuthContext";
import { store, persistor } from "./store"; 

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <Toaster />
          <App />
        </AuthProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);