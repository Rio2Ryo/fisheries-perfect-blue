export default async function handler(req, res) {
  // CORSヘッダーを追加
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // 環境変数チェック
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ error: 'RESEND_API_KEY not configured' })
    }

    // リクエストボディのチェック
    const { name, email, subject, message } = req.body
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Resendを動的インポート
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    console.log('Sending email with data:', { name, email, subject });

    // メール送信（認証済みドメインを使用）
    const result = await resend.emails.send({
      from: 'noreply@sfcpc.co.jp', // 認証済みドメインを使用
      to: ['contact@sfcpc.co.jp'],
      subject: `【お問い合わせ】${subject}`,
      html: `
        <h2>お問い合わせを受信しました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>件名:</strong> ${subject}</p>
        <p><strong>お問い合わせ内容:</strong></p>
        <p>${message}</p>
      `
    });

    console.log('Resend API response:', JSON.stringify(result, null, 2));

    // Resendのエラーチェックを詳細に
    if (result.error) {
      console.error('Resend API Error:', result.error);
      return res.status(500).json({ 
        success: false, 
        error: result.error,
        message: 'Failed to send email via Resend'
      });
    }

    return res.status(200).json({ 
      success: true, 
      id: result.data?.id,
      status: 'sent',
      fullResult: result
    })

  } catch (error) {
    console.error('API Error:', error)
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message,
      stack: error.stack
    })
  }
}