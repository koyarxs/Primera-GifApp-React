import React, { useRef } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const input = useRef();

  const onSubmit = e => {
    e.preventDefault();
    setCategories([input.current.value]);
  }

  return (
    <form onSubmit={onSubmit}>
      <input ref={input} type="text" />
    </form>
  )
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};

export default AddCategory;