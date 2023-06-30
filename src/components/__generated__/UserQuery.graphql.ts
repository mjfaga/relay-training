/**
 * @generated SignedSource<<43a25b5b899c1f8d8a784e0d9abc4196>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type EatingFrequency = "DAILY" | "MONTHLY" | "WEEKLY" | "%future added value";
export type UserQuery$variables = {
  id: string;
};
export type UserQuery$data = {
  readonly user: {
    readonly favoriteFoods: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly eatingFrequency: EatingFrequency;
          readonly foodItem: {
            readonly id: string;
            readonly name: string;
          };
          readonly id: string;
        } | null;
      } | null> | null;
    } | null;
    readonly id: string;
    readonly name: string;
  } | null;
};
export type UserQuery = {
  response: UserQuery$data;
  variables: UserQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "FavoriteFoodItemEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "FavoriteFoodItem",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "FoodItem",
            "kind": "LinkedField",
            "name": "foodItem",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "eatingFrequency",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cursor",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "endCursor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasNextPage",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": "favoriteFoods",
            "args": null,
            "concreteType": "FavoriteFoodItemConnection",
            "kind": "LinkedField",
            "name": "__User_favoriteFoods_connection",
            "plural": false,
            "selections": (v4/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": (v5/*: any*/),
            "concreteType": "FavoriteFoodItemConnection",
            "kind": "LinkedField",
            "name": "favoriteFoods",
            "plural": false,
            "selections": (v4/*: any*/),
            "storageKey": "favoriteFoods(first:10)"
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "User_favoriteFoods",
            "kind": "LinkedHandle",
            "name": "favoriteFoods"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b78b696069626e8c1d42ea36b54d2c93",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "user",
            "favoriteFoods"
          ]
        }
      ]
    },
    "name": "UserQuery",
    "operationKind": "query",
    "text": "query UserQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    id\n    name\n    favoriteFoods(first: 10) {\n      edges {\n        node {\n          id\n          foodItem {\n            id\n            name\n          }\n          eatingFrequency\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5b0c56cec6ff282268995d99aa16326b";

export default node;
