import { Handlers } from '$fresh/server.ts'

// Randpm uuid generation handler example

export const handler: Handlers = {
  GET(req) {
    const uuid = crypto.randomUUID();
    return new Response(JSON.stringify(uuid), {headers: {"Content-Type": "application/json"}})
  }
}
