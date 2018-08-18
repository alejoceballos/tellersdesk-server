const express = require('express');
const router = express.Router();

/* GET characters listing. */
router.get('/', function (req, res /*, next*/) {
    res.send([
        {
            name: 'Dominic Doonshield',
            attributes: {
                physical: {
                    strength: 3,
                    dexterity: 3,
                    stamina: 4
                }
            }
        },
        {
            name: 'Lys Ming Nielle',
            attributes: {
                physical: {
                    strength: 2,
                    dexterity: 5,
                    stamina: 3
                }
            }
        },
    ]);
});

module.exports = router;
