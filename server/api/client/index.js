import {Router} from 'express';//requerimos el router
import controller from './client.controller' //el controlador

var router = new Router();

router.post('/', controller.createClient);
router.get('/', controller.getClients);
router.get('/:id', controller.getClient);
router.put('/:id', controller.updateClient);
router.delete('/:id', controller.destroyClient);

module.exports = router;
