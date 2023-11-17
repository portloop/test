const express = require('express');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const axios = require('axios');
const partnerApplicationFormRouter = require('./forms/partnership-form.js'); 
const mainPageSimpleFormRouter = require('./forms/mainPage-simple.js'); 
const mainPageFormRouter = require('./forms/mainPage-form.js'); 
const compareForm = require('./forms/compare-form.js'); 
const solution1Submit = require('./forms/optimize-customer-acquisition.js'); 
const solution2Submit = require('./forms/automatic-reporting.js'); 
const solution3Submit = require('./forms/ltv-and-customer-retention.js'); 
const solution4Submit = require('./forms/merchandising-optimization.js'); 
const features1Submit = require('./forms/analytics-dashboard.js'); 
const features2Submit = require('./forms/custom-reports.js'); 
const features3Submit = require('./forms/track-your-goals.js'); 
const features4Submit = require('./forms/smart-alerts-and-insights.js'); 


const app = express();
const port = 3000;

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

router.get('/integration', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'integration.html'));
});

router.get('/partnership', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'partnership.html'));
});

router.get('/partner-application-form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'partner-application-form.html'));
});
router.get('/databox-compare', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'databox-compare.html'));
});

router.get('/data-studio-compare', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'data-studio-compare.html'));
});

router.get('/tw-compare', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tw-compare.html'));
});
router.get('/glew-compare', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'glew-compare.html'));
});

router.get('/polar-analytics-compare', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'polar-analytics-compare.html'));
});
router.get('/optimize-customer-acquisition', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'optimize-customer-acquisition.html'));
});

router.get('/automatic-reporting', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'automatic-reporting.html'));
});

router.get('/ltv-and-customer-retention', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ltv-and-customer-retention.html'));
});

router.get('/merchandising-optimization', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'merchandising-optimization.html'));
});

router.get('/analytics-dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'analytics-dashboard.html'));
});

router.get('/custom-reports', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'custom-reports.html'));
});

router.get('/track-your-goals', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'track-your-goals.html'));
});

router.get('/smart-alerts-and-insights', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'smart-alerts-and-insights.html'));
});

router.get('/terms', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'terms.html'));
});

router.get('/tech-partners', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tech-partners.html'));
});

router.get('/support', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'support.html'));
});

router.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'privacy.html'));
});

router.get('/pricing', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pricing.html'));
});


router.get('/earlybird', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'earlybird.html'));
});

router.get('/cookies', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cookies.html'));
});

router.get('/coming', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'coming.html'));
});

router.get('/boost-your-brand', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'boost-your-brand.html'));
});

router.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

router.get('/affiliate-partners', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'affiliate-partners.html'));
});


router.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});


router.get('/access-blended-roas', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'access-blended-roas.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

router.get('/3PL-partners', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '3PL-partners.html'));
});





router.use('/submit-partner-form', partnerApplicationFormRouter);
router.use('/submit-mainPageSimple-form', mainPageSimpleFormRouter);
router.use('/submit-mainPage-form', mainPageFormRouter);
router.use('/compare-form', compareForm);
router.use('/optimize-customer-acquisition', solution1Submit);
router.use('/automatic-reporting', solution2Submit);
router.use('/ltv-and-customer-retention', solution3Submit);
router.use('/merchandising-optimization', solution4Submit);
router.use('/analytics-dashboard', features1Submit);
router.use('/custom-reports', features2Submit);
router.use('/track-your-goals', features3Submit);
router.use('/smart-alerts-and-insights', features4Submit);

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
