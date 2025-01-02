import React, { Component } from 'react';
import './sorting.css';

import { ReactComponent as CircleIcon } from './circle.svg'; 

import AppControls from '../components/molecules/AppControls';
import Footer from '../components/molecules/Footer';
import AppDrawer from '../components/organisms/AppDrawer';
import SortVisualizer from '../components/organisms/SortVisualizer';
import TopBar from '../components/organisms/TopBar';


import StoogeSort, {
  StoogeSortDesc,
  StoogeSortKey
} from '../algorithms/StoogeSort';

import BogoSort, {
  BogoSortDesc,
  BogoSortKey
} from '../algorithms/BogoSort';
import BubbleSort, {
  BubbleSortDesc,
  BubbleSortKey
} from '../algorithms/BubbleSort.js';
import HeapSort, {
  HeapSortDesc,
  HeapSortKey
} from '../algorithms/HeapSort';
import InsertionSort, {
  InsertionSortDesc,
  InsertionSortKey
} from '../algorithms/InsertionSort';
import MergeSort, {
  MergeSortDesc,
  MergeSortKey
} from '../algorithms/MergeSort';
import QuickSort, {
  QuickSortDesc,
  QuickSortKey
} from '../algorithms/QuickSort';
import QuickSort3, {
  QuickSort3Desc,
  QuickSort3Key
} from '../algorithms/QuickSort3';
import SelectionSort, {
  SelectionSortDesc,
  SelectionSortKey
} from '../algorithms/SelectionSort';
import ShellSort, {
  ShellSortDesc,
  ShellSortKey
} from '../algorithms/ShellSort';


class Sorting extends Component {
  state = {
    darkMode: false,
    array: [],
    arraySize: 10,
    trace: [],
    algorithm: null,
    appDrawerOpen: false
  };

  ALGORITHM = {
    'Bubble Sort': BubbleSort,
    'Selection Sort': SelectionSort,
    'Insertion Sort': InsertionSort,
    'Merge Sort': MergeSort,
    'Quick Sort': QuickSort,
    'Quick Sort 3': QuickSort3,
    'Heap Sort': HeapSort,
    'Shell Sort': ShellSort,
    'Bogo Sort':BogoSort,
    'Stooge Sort':StoogeSort
  };

  ALGORITHM_KEY = {
    'Bubble Sort': BubbleSortKey,
    'Selection Sort': SelectionSortKey,
    'Insertion Sort': InsertionSortKey,
    'Merge Sort': MergeSortKey,
    'Quick Sort': QuickSortKey,
    'Quick Sort 3': QuickSort3Key,
    'Heap Sort': HeapSortKey,
    'Shell Sort': ShellSortKey,
    'Bogo Sort':BogoSortKey,
    'Stooge Sort':StoogeSortKey
  };

  ALGORITHM_DESC = {
    'Bubble Sort': BubbleSortDesc,
    'Selection Sort': SelectionSortDesc,
    'Insertion Sort': InsertionSortDesc,
    'Merge Sort': MergeSortDesc,
    'Quick Sort': QuickSortDesc,
    'Quick Sort 3': QuickSort3Desc,
    'Heap Sort': HeapSortDesc,
    'Shell Sort': ShellSortDesc,
    'Bogo Sort':BogoSortDesc,
    'StoogeSort':StoogeSortDesc
  };

  componentDidMount() {
    this.generateRandomArray();
  }

  generateRandomArray = () => {
    // Generate pseudo-random number between 1 and max
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    // Generate an array of length max
    const array = Array(this.state.arraySize)
      .fill(0)
      .map(() => getRandomInt(this.state.arraySize * 5));

    this.setState(
      {
        array,
        trace: []
      },
      this.createTrace
    );
  };

  handleAlgorithmChange = (algorithm) => {
    this.setState({ algorithm }, this.generateRandomArray);
  };

  handleArraySizeChange = (size) => {
    size = Number(size);
    size = size > 100 ? 100 : size;
    size = size < 0 ? 0 : size;
    this.setState({ arraySize: size }, this.generateRandomArray);
  };

  createTrace = () => {
    const numbers = [...this.state.array];
    const sort = this.ALGORITHM[this.state.algorithm];
    if (sort) {
      const trace = sort(numbers);
      this.setState({ trace });
    }
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  toggleAppDrawer = () => {
    this.setState((prevState) => ({
      appDrawerOpen: !prevState.appDrawerOpen
    }));
  };

  render() {
    let theme = `App`;
    if (this.state.darkMode) theme += ` App_dark`;
    if (this.state.appDrawerOpen) theme += ` App_modal_open`;

    const colorKey = this.ALGORITHM_KEY[this.state.algorithm];
    const desc = this.ALGORITHM_DESC[this.state.algorithm];

    const controls = (
      <AppControls
        onGenerateRandomArray={this.generateRandomArray}
        algorithm={this.state.algorithm}
        onAlgorithmChange={this.handleAlgorithmChange}
        arraySize={this.state.arraySize}
        onArraySizeChange={this.handleArraySizeChange}
        onToggleDarkMode={this.toggleDarkMode}
        darkMode={this.state.darkMode}
      />
    );

    return (
      <div className={theme}>
        
      {/* <button className="circle-button" onClick={() => window.open('https://buymeacoffee.com/learnwhilelearning/e/272150', '_blank')}>
        <CircleIcon/>
      </button> */}
        <TopBar
          drawerOpen={this.state.appDrawerOpen}
          toggleDrawer={this.toggleAppDrawer}
        >
          {controls}
        </TopBar>

        <AppDrawer
          open={this.state.appDrawerOpen}
          closeDrawer={this.toggleAppDrawer}
        >
          {controls}
        </AppDrawer>

        <main className="App__Body">
          <SortVisualizer
            array={this.state.array}
            trace={this.state.trace}
            colorKey={colorKey}
            desc={desc}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Sorting
