/**
 * @generated SignedSource<<2fa24da9eb44bc1a0b93e88d364d446f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserListItem_user$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "UserListItem_user";
};
export type UserListItem_user$key = {
  readonly " $data"?: UserListItem_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserListItem_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserListItem_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "25c3a82586cade0977b06cb0f0e3ae01";

export default node;
