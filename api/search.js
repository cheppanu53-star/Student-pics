export default function handler(req, res) {
  const { q } = req.query;
  res.status(200).json({ success: true, query: q || "", results: [] });
}