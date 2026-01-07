"use strict";

goog.provide("Blockly.Blocks.essentials");

goog.require("Blockly.Blocks");
goog.require("Blockly.Colours");
goog.require("Blockly.constants");
goog.require("Blockly.ScratchBlocks.VerticalExtensions");

Blockly.Blocks["message_broadcaster"] = {
  init: function () {
    this.jsonInit({
      "message0": "Broadcast Message On Channel %1",
      "args0": [
        {
          "type": "input_value",
          "name": "broadcast_message_on_channel",
        },
      ],
      "category": Blockly.Categories.essentials,
      "extensions": ["colours_essentials", "shape_statement"],
    });
  },
};

Blockly.Blocks["set_property"] = {
  init: function () {
    this.jsonInit({
      "message0": "Set Property %1 Value %2",
      "args0": [
        {
          "type": "input_value",
          "name": "set_property",
        },
        {
          "type": "input_value",
          "name": "value",
        },
      ],
      "category": Blockly.Categories.essentials,
      "extensions": ["colours_essentials", "shape_statement"],
    });
  },
};
