// BogoSort.js
import React from 'react';
import {
  addToTrace,
  createKey,
  isSorted,
  newTrace,
  shuffle
} from './helpers';

const BogoSort = (nums) => {
  // Initial State
  const trace = newTrace(nums);

  // Core Algorithm
  while (!isSorted(nums)) {
    // Visualize: Current array before shuffling
    addToTrace(trace, nums, [], [], [], []);
    shuffle(nums);
    // Visualize: Current array after shuffling
    addToTrace(trace, nums);
  }

  // Visualize: Mark all elements as sorted
  addToTrace(trace, nums, [...Array(nums.length).keys()]);
  return trace;
};

export const BogoSortKey = createKey(
  'Checking if sorted',
  'Shuffling'
);

export const BogoSortDesc = {
  title: 'Bogo Sort',
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Bogosort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bogo Sort
      </a>, also known as permutation sort, stupid sort, slow sort, or shotgun sort, is a highly inefficient sorting algorithm based on the generate and test paradigm. The algorithm successively generates permutations of its input until it finds one that is sorted.
    </p>
  ),
  worstCase: (
    <span>
      O((n+1)!)
    </span>
  ),
  avgCase: (
    <span>
      O((n+1)!)
    </span>
  ),
  bestCase: (
    <span>
      O(n)
    </span>
  ),
  space: <span>O(1)</span>
};

export default BogoSort;
