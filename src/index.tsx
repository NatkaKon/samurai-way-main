import React from 'react';
import './index.css';
import {rerenderEntireTree} from './render';
import {store} from './Redax/State';

store.subscribe(rerenderEntireTree)
rerenderEntireTree()
