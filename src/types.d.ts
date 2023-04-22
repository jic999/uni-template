import { req } from "@/apis/request"

export {}

declare global {
  interface Uni {
    req: typeof req
  }
}