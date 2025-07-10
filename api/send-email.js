const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, subject, message } = req.body;

    // バリデーション
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: '必須項目が入力されていません' });
    }

    // メール送信
    const data = await resend.emails.send({
      from: 'お問い合わせフォーム <noreply@sfcpc.co.jp>',
      to: ['contact@sfcpc.co.jp'], // 実際の受信メールアドレスに変更してください
      subject: `【お問い合わせ】${subject}`,
      html: `
        <h2>お問い合わせを受信しました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        ${phone ? `<p><strong>電話番号:</strong> ${phone}</p>` : ''}
        <p><strong>件名:</strong> ${subject}</p>
        <p><strong>お問い合わせ内容:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('メール送信エラー:', error);
    res.status(500).json({ 
      error: 'メール送信に失敗しました',
      details: error.message,
      apiKey: process.env.RESEND_API_KEY ? 'set' : 'not set'
    });
  }
}