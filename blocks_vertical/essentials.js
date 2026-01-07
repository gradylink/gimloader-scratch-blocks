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

Blockly.Blocks["get_property"] = {
  init: function () {
    this.jsonInit({
      "message0": "Get Property %1",
      "args0": [
        {
          "type": "input_value",
          "name": "get_property",
        },
      ],
      "category": Blockly.Categories.essentials,
      "extensions": ["colours_essentials", "output_string"],
    });
  },
};

Blockly.Blocks["current_character_name"] = {
  init: function () {
    this.jsonInit({
      "message0": "Triggering Player's Name",
      "category": Blockly.Categories.essentials,
      "extensions": ["colours_essentials", "output_string"],
    });
  },
};

Blockly.Blocks["current_character_id"] = {
  init: function () {
    this.jsonInit({
      "message0": "Triggering Player's ID",
      "category": Blockly.Categories.essentials,
      "extensions": ["colours_essentials", "output_string"],
    });
  },
};

Blockly.Blocks["add_activity_feed_item_for_everyone"] = {
  init: function () {
    this.jsonInit({
      "message0": "Add Activity Feed Item For Everyone %1",
      "args0": [
        {
          "type": "input_value",
          "name": "add_activity_feed_item_for_everyone",
        },
      ],
      "category": Blockly.Categories.essentials,
      "extensions": ["colours_essentials", "shape_statement"],
    });
  },
};

Blockly.Blocks["add_activity_feed_item_for_triggering_player"] = {
  init: function () {
    this.jsonInit({
      "message0": "Add Activity Feed Item For Triggering Player %1",
      "args0": [
        {
          "type": "input_value",
          "name": "add_activity_feed_item_for_triggering_player",
        },
      ],
      "category": Blockly.Categories.essentials,
      "extensions": ["colours_essentials", "shape_statement"],
    });
  },
};

Blockly.Blocks["add_activity_feed_item_for_game_host"] = {
  init: function () {
    this.jsonInit({
      "message0": "Add Activity Feed Item For Game Host %1",
      "args0": [
        {
          "type": "input_value",
          "name": "add_activity_feed_item_for_game_host",
        },
      ],
      "category": Blockly.Categories.essentials,
      "extensions": ["colours_essentials", "shape_statement"],
    });
  },
};

Blockly.Blocks["current_character_team_number"] = {
  init: function () {
    this.jsonInit({
      "message0": "Triggering Player's Team Number",
      "category": Blockly.Categories.essentials,
      "extensions": ["colours_essentials", "output_string"],
    });
  },
};

Blockly.Blocks["triggering_player_score"] = {
  init: function () {
    this.jsonInit({
      "message0": "Triggering Player's Score",
      "category": Blockly.Categories.essentials,
      "extensions": ["colours_essentials", "output_string"],
    });
  },
};

Blockly.Blocks["get_team_score"] = {
  init: function () {
    this.jsonInit({
      "message0": "Get Score Of Team %1",
      "args0": [
        {
          "type": "input_value",
          "name": "get_score_of_team",
        },
      ],
      "category": Blockly.Categories.essentials,
      "extensions": ["colours_essentials", "output_string"],
    });
  },
};

Blockly.Blocks["is_a_live_game"] = {
  init: function () {
    this.jsonInit({
      "message0": "Is A Live Game",
      "category": Blockly.Categories.essentials,
      "extensions": ["colours_essentials", "output_boolean"],
    });
  },
};

Blockly.Blocks["is_an_assignment"] = {
  init: function () {
    this.jsonInit({
      "message0": "Is An Assignment",
      "category": Blockly.Categories.essentials,
      "extensions": ["colours_essentials", "output_boolean"],
    });
  },
};

Blockly.Blocks["seconds_into_game"] = {
  init: function () {
    this.jsonInit({
      "message0": "Seconds Into Game",
      "category": Blockly.Categories.essentials,
      "extensions": ["colours_essentials", "output_string"],
    });
  },
};
