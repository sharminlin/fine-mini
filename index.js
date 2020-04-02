import CreatePage from './lib/page'
import EventBus, { BUS_EVENT_NAME } from './lib/eventBus'
import path from './lib/path'

module.exports = {
  CreatePage,
  EventBus,
  ...path
}
