import { Router } from 'express';


const router = Router();

/* GET home page. */
router.route('/').get(  function(req, res, next) {
  res.status(200).send('Healthy!!!');
});

export default router;
