export default function handler(req, res) {
  const { id } = req.query;
  if (!id) {
    res.status(400).send('id 파라미터가 없습니다.');
    return;
  }
  const target = `https://script.google.com/macros/s/AKfycbx7rBAFNG5zsDkVbSc4cnSBRXNEl0cH5g_W6GHvssCHZ9h0RMCasE54tVvqn7n5r0xF/exec?id=${id}`;
  res.redirect(302, target);
}
