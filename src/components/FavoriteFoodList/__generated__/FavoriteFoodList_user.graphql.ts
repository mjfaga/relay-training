/**
 * @generated SignedSource<<3238ae4e01abac16fe9c14c4e72278b6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FavoriteFoodList_user$data = {
  readonly favoriteFoods: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"FavoriteFoodItem_favoriteFoodItem">;
      } | null;
    } | null> | null;
  } | null;
  readonly " $fragmentType": "FavoriteFoodList_user";
};
export type FavoriteFoodList_user$key = {
  readonly " $data"?: FavoriteFoodList_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"FavoriteFoodList_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "favoriteFoods"
        ]
      }
    ]
  },
  "name": "FavoriteFoodList_user",
  "selections": [
    {
      "alias": "favoriteFoods",
      "args": null,
      "concreteType": "FavoriteFoodItemConnection",
      "kind": "LinkedField",
      "name": "__User_favoriteFoods_connection",
      "plural": false,
      "selections": [
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
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "FavoriteFoodItem_favoriteFoodItem"
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
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "008fe715fb8190f1958309a06f9cd625";

export default node;
