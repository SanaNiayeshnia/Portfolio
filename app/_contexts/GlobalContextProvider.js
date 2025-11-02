"use client";
import { createContext, useContext, useState } from "react";

const globalContext = createContext();
const initialModal = {
  open: false,
  content: null,
  title: "",
  subtitle: "",
  submit: { text: "", handler: null },
  cancel: { text: "", handler: null },
};

function GlobalContextProvider({ children }) {
  const [modal, setModal] = useState(initialModal);

  function openModal(params) {
    setModal({ open: true, ...params });
  }

  function closeModal() {
    setModal(initialModal);
  }

  const value = { modal, closeModal, openModal, setModal };
  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
}

export default GlobalContextProvider;

export function useGlobalContext() {
  const state = useContext(globalContext);
  return state;
}
