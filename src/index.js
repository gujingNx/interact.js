/* browser entry point */

const scope = require('./scope');

require('./interactions').init(scope);

scope.Interactable = require('./Interactable');
scope.InteractEvent = require('./InteractEvent');
require('./interactablePreventDefault.js');

const interact = require('./interact');

// modifiers
interact.use(require('./modifiers/base'));
interact.use(require('./modifiers/snap'));
interact.use(require('./modifiers/restrict'));

interact.snappers = require('./utils/snappers');
interact.createSnapGrid = interact.snappers.grid;

// inertia
interact.use(require('./simulations/base'));
interact.use(require('./simulations/inertia'));

// pointerEvents
interact.use(require('./pointerEvents/base'));
interact.use(require('./pointerEvents/holdRepeat'));
interact.use(require('./pointerEvents/interactableTargets'));

// autoStart hold
interact.use(require('./autoStart/base'));
interact.use(require('./autoStart/hold'));
interact.use(require('./autoStart/dragAxis'));

// actions
interact.use(require('./actions/gesture'));
interact.use(require('./actions/resize'));
interact.use(require('./actions/drag'));
interact.use(require('./actions/drop'));

// load these modifiers after resize is loaded
interact.use(require('./modifiers/snapSize'));
interact.use(require('./modifiers/restrictEdges'));
interact.use(require('./modifiers/restrictSize'));

// autoScroll
interact.use(require('./autoScroll'));

// export interact
module.exports = interact;
