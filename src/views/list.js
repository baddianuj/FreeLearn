import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import { ReactComponent as CircleIcon } from './circle.svg'; 
import Announcement from '../components/announcement'
import Footer1 from '../components/footer1'
import Navbar from '../components/navbar'
import './list.css'

const List = (props) => {
    const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    
    const [nestedItems, setNestedItems] = useState(Array(6).fill([...initialItems]));
    const [newItem, setNewItem] = useState('');
    const [searchItem, setSearchItem] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [insertIndex, setInsertIndex] = useState('');
    const [insertItem, setInsertItem] = useState('');
    const [insertItem1, setInsertItem1] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const addItem = () => {
      if (newItem.trim()) {
          const updatedNestedItems = [...nestedItems];
          updatedNestedItems[0] = [...updatedNestedItems[0], newItem];
          setNestedItems(updatedNestedItems);
          setNewItem('');
      }
  };
  
  const deleteLastItemOrRefresh = () => {
      const updatedNestedItems = [...nestedItems];
      if (updatedNestedItems[1].length === 0) {
          updatedNestedItems[1] = [...initialItems];
      } else {
          updatedNestedItems[1] = updatedNestedItems[1].slice(0, -1);
      }
      setNestedItems(updatedNestedItems);
  };

  const searchItemIndex = () => {
      const index = nestedItems[2].indexOf(searchItem);
      setSearchResult(index !== -1 
          ? `Index of "${searchItem}": ${index}` 
          : `"${searchItem}" is not in the array.`);
  };

  const reverseItems = () => {
      const updatedNestedItems = [...nestedItems];
      updatedNestedItems[3] = [...updatedNestedItems[3]].reverse();
      setNestedItems(updatedNestedItems);
  };

  const insertItemAt = () => {
      const index = parseInt(insertIndex);
      if (!isNaN(index) && index >= 0 && index <= nestedItems[4].length) {
          const updatedNestedItems = [...nestedItems];
          updatedNestedItems[4].splice(index, 0, insertItem);
          setNestedItems(updatedNestedItems);
          setInsertIndex('');
          setInsertItem('');
      } else {
          alert('Please enter a valid index.');
      }
  };

  const insertItemToLeft = () => {
      if (insertItem1.trim()) {
          const updatedNestedItems = [...nestedItems];
          updatedNestedItems[5] = [insertItem1, ...updatedNestedItems[5]];
          setNestedItems(updatedNestedItems);
          setInsertItem1('');
      }
  };

  const renderArray = (items, index) => (
      <div className="array-container">
          <span className="bracket">[</span>
          <ul className={`array-list ${items[index].length > 5 ? 'small-font' : ''}`}>
              {items[index].map((item, idx) => (
                  <li key={idx} className="array-item">{item}</li>
              ))}
          </ul>
          <span className="bracket">]</span>
      </div>
  );

  return (
    <div className="list-container">
        
      {/* <button className="circle-button" onClick={() => window.open('https://buymeacoffee.com/learnwhilelearning/e/272150', '_blank')}>
        <CircleIcon/>
      </button> */}
      <Helmet>
        <title>List Methods | LearnWhileLearning</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="List Methods | LearnWhileLearning" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="list-hero">
        <header className="list-heading">
          {/* <div id="notifcation" className="list-notification">
            <Announcement
              rootClassName="announcement-root-class-name2"
              className="list-component"
            ></Announcement>
          </div> */}
          <Navbar></Navbar>
        </header>
      </div>
      
      
      <div className="list-video">
      <h1 className="list-h1"><b>List Methods</b></h1>
            
            <div className="method-container">
                <h1>Append</h1>
                {renderArray(nestedItems, 0)}
                <div className="input-container">
                    <input
                        type="text"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        placeholder="A value you want to append"
                        className='hey'
                    />
                    <button onClick={addItem} className='hello'>Append()</button>
                </div>
            </div>

            <div className="method-container">
                <h1>Pop</h1>
                {renderArray(nestedItems, 1)}
                <button onClick={deleteLastItemOrRefresh} className='hello'>
                    {nestedItems[1].length === 0 ? 'Refill' : 'Pop()'}
                </button>
            </div>

            <div className="method-container">
                <h1>Index</h1>
                {renderArray(nestedItems, 2)}
                <div className="input-container">
                    <input
                        type="text"
                        value={searchItem}
                        onChange={(e) => setSearchItem(e.target.value)}
                        placeholder="Index of item"
                        className='hey'
                    />
                    <button onClick={searchItemIndex} className='hello'>Index()</button>
                </div>
                {searchResult && <p>{searchResult}</p>}
            </div>

            <div className="method-container">
                <h1>Reverse</h1>
                {renderArray(nestedItems, 3)}
                <button onClick={reverseItems} className='hello'>Reverse()</button>
            </div>

            <div className="method-container">
                <h1>Insert</h1>
                {renderArray(nestedItems, 4)}
                <div className="input-container">
                    <input
                        type="text"
                        value={insertIndex}
                        onChange={(e) => setInsertIndex(e.target.value)}
                        placeholder="Index"
                        className="hey"
                    />
                    <input
                        type="text"
                        value={insertItem}
                        onChange={(e) => setInsertItem(e.target.value)}
                        placeholder="Item to insert"
                        className="hey"
                    />
                    <button onClick={insertItemAt} className='hello'>Insert(index,value)</button>
                </div>
            </div>

            <div className="method-container">
                <h1>Append Left</h1>
                {renderArray(nestedItems, 5)}
                <div className="input-container">
                    <input
                        type="text"
                        value={insertItem1}
                        onChange={(e) => setInsertItem1(e.target.value)}
                        placeholder="Item to insert on left"
                        className="hey"
                    />
                    <button onClick={insertItemToLeft} className='hello'>appendLeft()</button>
                </div>
            </div>
      </div>
      <div className="list-banner-container"></div>
      <Footer1></Footer1>
    </div>
  )
}

export default List;
