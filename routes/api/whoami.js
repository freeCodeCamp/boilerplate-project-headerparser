const router = require('express').Router();
/**
 * Routes
 */
// GET /api/timestamp
router.get('/', (req, res) => {
  res.json({
    "ipaddress": req.ip,
    "language": req.headers['accept-language'],
    "software": req.headers['user-agent']
  });
});

module.exports = router;