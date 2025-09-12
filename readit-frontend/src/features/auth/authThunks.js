import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../services/apiClient";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData) => {
    const res = await apiClient.post("/auth/register", userData);
    return res.data.data; // {user, token}
  }
);

export const loginUser = createAsyncThunk("auth/login", async (userData) => {
  const res = await apiClient.post("/auth/login", userData);
  return res.data.data;
});
