/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

it.concurrent('one', () => Promise.resolve());
it.concurrent.skip('two', () => Promise.resolve());
it.concurrent('three', () => Promise.resolve());
it.concurrent('concurrent test fails', () => Promise.reject());
it.concurrent.each(
  [
    [1, 2],
    [2, 3],
  ],
  'adds one to number',
  Promise.resolve()
);
it.concurrent.skip.each(
  [
    [1, 2],
    [2, 3],
  ],
  'should skip this test',
  Promise.resolve()
);
