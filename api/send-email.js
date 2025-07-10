module.exports = async function handler(req, res) {
  try {
    // 基本的なチェック
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // API キーの確認
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ error: 'RESEND_API_KEY が設定されていません' });
    }

    // Resendの動的インポート
    let Resend;
    try {
      const resendModule = require('resend');
      Resend = resendModule.Resend;
    } catch (importError) {
      return res.status(500).json({ 
        error: 'Resendモジュールのインポートに失敗',
        details: importError.message 
      });
    }

    const { name, email, phone, subject, message } = req.body;

    // バリデーション
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: '必須項目が入力されていません' });
    }

    // Resendインスタンスの作成
    let resend;
    try {
      resend = new Resend(process.env.RESEND_API_KEY);
    } catch (resendError) {
      return res.status(500).json({ 
        error: 'Resendインスタンスの作成に失敗',
        details: resendError.message 
      });
    }

    // メール送信（テスト用に最小限の設定）
    try {
      const data = await resend.emails.send({
        from: 'onboarding@resend.dev', // テスト用にデフォルトのメールアドレスを使用
        to: ['contact@sfcpc.co.jp'],
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
    } catch (emailError) {
      return res.status(500).json({ 
        error: 'メール送信に失敗',
        details: emailError.message,
        resendError: emailError.name 
      });
    }
  } catch (error) {
    console.error('メール送信エラー:', error);
    res.status(500).json({ 
      error: 'メール送信に失敗しました',
      details: error.message,
      apiKey: process.env.RESEND_API_KEY ? 'set' : 'not set'
    });
  }
}