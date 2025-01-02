import React from 'react';
import {
    addToTrace,
    createKey,
    createRange,
    lastSorted,
    newTrace,
    swap
} from './helpers';

const StoogeSort = (nums) => {
  const trace = newTrace(nums);

  const stoogeSort = (array, l, h) => {
    if (array[l] > array[h]) {
      // Visualize: Compare and swap
      addToTrace(trace, array, lastSorted(trace), [l, h]);
      swap(array, l, h);
      addToTrace(trace, array, lastSorted(trace), [], [l, h]);
    }
    if (h - l + 1 > 2) {
      const t = Math.floor((h - l + 1) / 3);
      stoogeSort(array, l, h - t);
      stoogeSort(array, l + t, h);
      stoogeSort(array, l, h - t);
    }
  };

  // Execute Stooge Sort
  stoogeSort(nums, 0, nums.length - 1);
  
  // Mark all elements as sorted
  addToTrace(trace, nums, createRange(0, nums.length));
  
  return trace;
};

export const StoogeSortKey = createKey(
  'Comparing',
  'Swapping',
  null,
  null
);

export const StoogeSortDesc = {
  title: 'Stooge Sort',
  description: (
    <div>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Stooge_sort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stooge Sort
        </a>{' '}
        is a recursive sorting algorithm. It is defined as follows: 
        If the value at the start is greater than the value at the end, 
        swap them. Then, recursively sort the initial two-thirds of 
        the list, the final two-thirds of the list, and the initial 
        two-thirds again. Although this algorithm is not very efficient 
        for large datasets, it is an interesting example of a sorting 
        algorithm with an unusual structure.
      </p>
      <ol>
        <li>If the first element is greater than the last element, swap them.</li>
        <li>Recursively sort the initial two-thirds of the array.</li>
        <li>Recursively sort the final two-thirds of the array.</li>
        <li>Recursively sort the initial two-thirds of the array again.</li>
      </ol>
    </div>
  ),
  worstCase: (
    <span>
      O(<em>n</em>
      <sup>2.7095...</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em>
      <sup>2.7095...</sup>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em>
      <sup>2.7095...</sup>)
    </span>
  ),
  space: (
    <span>
      O(<em>n</em>)
    </span>
  )
};

export default StoogeSort;
