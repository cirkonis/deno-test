import { Handlers } from "$fresh/server.ts"

export const handler: Handlers = {
    async GET(req, ctx) {
        const response = await ctx.render();
        response.headers.set('X-Custom-Header', 'Hello');
        return response
    }
}

export default function AboutPage() {
    return (
        <main>
            <h1 class="bg-red-500 flex flex-row justify-center">About</h1>
            <p class="text(green-500) font-bold">This is the about page</p>
        </main>
    )
}