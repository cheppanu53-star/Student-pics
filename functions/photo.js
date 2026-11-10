export async function onRequest(context) {
  return new Response(JSON.stringify({ success: true, message: "Photo endpoint" }), {
    headers: { "Content-Type": "application/json" }
  });
}
