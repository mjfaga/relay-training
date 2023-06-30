/**
 * @generated SignedSource<<22c4341e42271b76919eb0b00651a0fd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type EatingFrequency = "DAILY" | "MONTHLY" | "WEEKLY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type FavoriteFoodItem_favoriteFoodItem$data = {
  readonly eatingFrequency: EatingFrequency;
  readonly foodItem: {
    readonly id: string;
    readonly name: string;
  };
  readonly id: string;
  readonly " $fragmentType": "FavoriteFoodItem_favoriteFoodItem";
};
export type FavoriteFoodItem_favoriteFoodItem$key = {
  readonly " $data"?: FavoriteFoodItem_favoriteFoodItem$data;
  readonly " $fragmentSpreads": FragmentRefs<"FavoriteFoodItem_favoriteFoodItem">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FavoriteFoodItem_favoriteFoodItem",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "FoodItem",
      "kind": "LinkedField",
      "name": "foodItem",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "eatingFrequency",
      "storageKey": null
    }
  ],
  "type": "FavoriteFoodItem",
  "abstractKey": null
};
})();

(node as any).hash = "863242a1ece1e7dfa3c4711b6cb637c4";

export default node;
