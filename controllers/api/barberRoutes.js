const router = require('express').Router();
const { Barber } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBarber = await Barber.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBarber);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const barberData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!barberData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(barberData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;