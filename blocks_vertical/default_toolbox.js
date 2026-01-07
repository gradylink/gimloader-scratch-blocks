/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.defaultToolbox');

goog.require('Blockly.Blocks');

/**
 * @fileoverview Provide a default toolbox XML.
 */

/**
 * NOTE: This is only used in the scratch-blocks development playground!
 * The XML here is overridden by scratch-gui.
 */

Blockly.Blocks.defaultToolbox = '<xml id="toolbox-categories" style="display: none">' +
  '<category name="Essentials" id="essentials" colour="#5B67A5" secondaryColour="#495284">' +
    '<block type="message_broadcaster" id="message_broadcaster">' +
      '<value name="broadcast_message_on_channel">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="set_property" id="set_property">' +
      '<value name="set_property">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="value">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="get_property" id="get_property">' +
      '<value name="get_property">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="current_character_name" id="current_character_name">' +
    '</block>' +
    '<block type="current_character_id" id="current_character_id">' +
    '</block>' +
    '<block type="add_activity_feed_item_for_everyone" id="add_activity_feed_item_for_everyone">' +
      '<value name="add_activity_feed_item_for_everyone">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="add_activity_feed_item_for_triggering_player" id="add_activity_feed_item_for_triggering_player">' +
      '<value name="add_activity_feed_item_for_triggering_player">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="add_activity_feed_item_for_game_host" id="add_activity_feed_item_for_game_host">' +
      '<value name="add_activity_feed_item_for_game_host">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="current_character_team_number" id="current_character_team_number">' +
    '</block>' +
    '<block type="triggering_player_score" id="triggering_player_score">' +
    '</block>' +
    '<block type="get_team_score" id="get_team_score">' +
      '<value name="get_score_of_team">' +
        '<shadow type="math_integer">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="is_a_live_game" id="is_a_live_game">' +
    '</block>' +
    '<block type="is_an_assignment" id="is_an_assignment">' +
    '</block>' +
    '<block type="seconds_into_game" id="seconds_into_game">' +
    '</block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_VARIABLES}" id="data" colour="#A55B80" secondaryColour="#844966" custom="VARIABLE">' +
  '</category>' +
  '</xml>';
