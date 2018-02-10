/* eslint no-console:0 */

// NOTE: https://github.com/stimulusjs/stimulus/blob/master/handbook/06_installing_stimulus.md#installing-stimulus-in-your-application
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("../controllers", true, /\.js$/)
application.load(definitionsFromContext(context))
