const express = require('express');
const router = express.Router();
const controller = require('./controller'); 

// router.post('/auth/signIn', controller.api.authSignIn);

// router.post('/post/create', controller.api.postCreate);
// router.post('/post/get_page', controller.api.postGet);
// router.get('/post/get_cnt', controller.api.postGetCnt);
// router.get('/post/get_category', controller.api.postGetCategory);
// router.post('/post/get_by_id', controller.api.postGetById);

router.post('/rate/create', controller.rate.create);
router.get("/rate/get/:movie", controller.rate.findAll);

// router.post('/category/get', controller.api.categoryGet);

router.get("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(`Response Complate`);
});

module.exports = router;
