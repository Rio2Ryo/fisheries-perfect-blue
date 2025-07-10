export default async function handler(req, res) {
  try {
    console.log('API called with method:', req.method);
    console.log('Environment check:', {
      hasResendKey: !!process.env.RESEND_API_KEY,
      keyPrefix: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 8) + '...' : 'missing'
    });

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // Resendを動的インポート
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log('Attempting to send email...');

    // シンプルなテストメール
    const result = await resend.emails.send({
      from: 'noreply@sfcpc.co.jp', // 認証済みドメインを使用
      to: ['contact@sfcpc.co.jp'],
      subject: 'テストメール - API動作確認',
      html: '<h1>テストメール</h1><p>API関数が正常に動作しています。</p>',
    });

    console.log('Resend response:', result);

    return res.status(200).json({ 
      success: true, 
      messageId: result.data?.id,
      fullResponse: result
    });

  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      cause: error.cause
    });

    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message,
      errorName: error.name
    });
  }
}