const Banner = require('../../models/Banner.js');

const getBanner = async (req, res) => {
  try {
    const banner = await Banner.getBanner(req.params.id);
    res.status(200).json({ msg: 'Banner returned successfully', data: banner });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

module.exports = {
  getBanner,
};
