import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import '../../../styles/CreateProjectHeader.css';

const CreateProjectHeader = ({ onPostProject }) => (
  <div className="createprojectheader-row">
    <div className="createprojectheader-searchbar">
      <FaSearch className="createprojectheader-searchicon" />
      <input
        className="createprojectheader-searchinput"
        type="text"
        placeholder="Search for Projects"
      />
    </div>
    <button className="createprojectheader-postbtn" onClick={onPostProject}>
      <FaPlus style={{marginRight:8,marginBottom:-2}} /> Post Project
    </button>
  </div>
);

export default CreateProjectHeader; 