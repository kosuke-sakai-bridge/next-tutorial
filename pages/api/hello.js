// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// APIを使う際の記述
export default function handler(req, res) {
  // status 200：正常なレスポンス
  res.status(200).json({ name: 'John Doe' })
}
