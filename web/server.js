import axios from "axios"

export const server = axios.create({
  baseURL: "https://localhost:3333"
})