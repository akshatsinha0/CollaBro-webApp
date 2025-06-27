import React from 'react'
import PropTypes from 'prop-types'
import CreateProjectForm from './CreateProjectForm'

const CreateProjectPopup = ({ show, onClose, onSubmit }) => {
  if (!show) return null
  return (
    <div className="create-project-popup">
      <div className="create-project-popup-content">
        <CreateProjectForm onClose={onClose} onSubmit={onSubmit} />
      </div>
    </div>
  )
}

CreateProjectPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default CreateProjectPopup 