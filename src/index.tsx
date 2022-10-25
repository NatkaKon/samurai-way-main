import React from 'react';
import './index.css';
import {rerenderEntireTree} from './render';
import {state} from './Redax/State';


rerenderEntireTree(state);