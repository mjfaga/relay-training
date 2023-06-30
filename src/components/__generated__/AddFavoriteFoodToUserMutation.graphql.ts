/**
 * @generated SignedSource<<70ac0bc5616c49bc30dcd513ef3dc9c9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type EatingFrequency = "DAILY" | "MONTHLY" | "WEEKLY" | "%future added value";
export type AddFavoriteFoodToUserMutation$variables = {
  eatingFrequency: EatingFrequency;
  name: string;
  userId: string;
};
export type AddFavoriteFoodToUserMutation$data = {
  readonly addFavoriteFood: {
    readonly favoriteFoodEdge: {
      readonly node: {
        readonly eatingFrequency: EatingFrequency;
        readonly foodItem: {
          readonly id: string;
          readonly name: string;
        };
        readonly id: string;
      } | null;
    } | null;
  } | null;
};
export type AddFavoriteFoodToUserMutation = {
  response: AddFavoriteFoodToUserMutation$data;
  variables: AddFavoriteFoodToUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "eatingFrequency"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "eatingFrequency",
        "variableName": "eatingFrequency"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "FavoriteFoodItemResponse",
    "kind": "LinkedField",
    "name": "addFavoriteFood",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "FavoriteFoodItemEdge",
        "kind": "LinkedField",
        "name": "favoriteFoodEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "FavoriteFoodItem",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "FoodItem",
                "kind": "LinkedField",
                "name": "foodItem",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddFavoriteFoodToUserMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddFavoriteFoodToUserMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "a4e6ca4d002acbdc89f6aeeeb02a6777",
    "id": null,
    "metadata": {},
    "name": "AddFavoriteFoodToUserMutation",
    "operationKind": "mutation",
    "text": "mutation AddFavoriteFoodToUserMutation(\n  $userId: ID!\n  $name: String!\n  $eatingFrequency: EatingFrequency!\n) {\n  addFavoriteFood(userId: $userId, name: $name, eatingFrequency: $eatingFrequency) {\n    favoriteFoodEdge {\n      node {\n        id\n        foodItem {\n          id\n          name\n        }\n        eatingFrequency\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ce85cd9502fd71580c248d8c98aec0f3";

export default node;
