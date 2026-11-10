export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const query = url.searchParams.get("q") || "";

  return new Response(JSON.stringify({ success: true, query, results: [] }), {
    headers: { "Content-Type": "application/json" }
  });
}
