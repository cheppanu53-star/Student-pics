export async function onRequestGet(context) {
  return new Response(JSON.stringify({ success: true, data: [] }), {
    headers: { "Content-Type": "application/json" }
  });
}
