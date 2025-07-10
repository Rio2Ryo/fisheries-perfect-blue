module.exports = async function handler(req, res) {
  try {
    res.status(200).json({ 
      message: 'API is working',
      method: req.method,
      hasResendKey: !!process.env.RESEND_API_KEY,
      nodeVersion: process.version,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ 
      error: error.message,
      stack: error.stack 
    });
  }
}