"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateProfile } from "../../actions/users"

const EditProfileForm = ({ currentUser, setSwitch }) => {
  const [name, setName] = useState(currentUser?.result?.name)
  const [about, setAbout] = useState(currentUser?.result?.about)
  const [tags, setTags] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (tags[0] === "" || tags.length === 0) {
      alert("Update tags field")
      setIsLoading(false)
    } else {
      dispatch(updateProfile(currentUser?.result?._id, { name, about, tags }))
      setTimeout(() => {
        setIsLoading(false)
        setSwitch(false)
      }, 1500)
    }
  }

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-header">
        <h1 className="edit-profile-title">Edit Your Profile</h1>
        <p className="edit-profile-subtitle">Update your public information and preferences</p>
      </div>

      <div className="edit-profile-card">
        <h2 className="section-title">Public Information</h2>

        <form className="edit-profile-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              <div className="label-header">
                <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <h3>Display Name</h3>
              </div>
              <p className="label-description">This is how your name will appear to other users</p>
            </label>
            <div className="input-container">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                placeholder="Enter your display name"
              />
              <div className="input-border"></div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="about" className="form-label">
              <div className="label-header">
                <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <h3>About Me</h3>
              </div>
              <p className="label-description">Tell others about yourself and your expertise</p>
            </label>
            <div className="textarea-container">
              <textarea
                id="about"
                rows="6"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="form-textarea"
                placeholder="Write something about yourself..."
              ></textarea>
              <div className="textarea-border"></div>
              <div className="char-count">{about?.length || 0} characters</div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tags" className="form-label">
              <div className="label-header">
                <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
                <h3>Watched Tags</h3>
              </div>
              <p className="label-description">Add tags separated by spaces to customize your feed</p>
            </label>
            <div className="input-container">
              <input
                type="text"
                id="tags"
                onChange={(e) => setTags(e.target.value.split(" "))}
                className="form-input"
                placeholder="e.g. javascript react python"
              />
              <div className="input-border"></div>
            </div>
            <div className="tags-preview">
              {tags &&
                tags
                  .filter((tag) => tag.trim() !== "")
                  .map((tag, index) => (
                    <span key={index} className="tag-preview">
                      {tag.trim()}
                    </span>
                  ))}
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="save-btn" disabled={isLoading}>
              {isLoading ? (
                <div className="loading-content">
                  <div className="loading-spinner"></div>
                  <span>Saving...</span>
                </div>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                    <polyline points="17,21 17,13 7,13 7,21"></polyline>
                    <polyline points="7,3 7,8 15,8"></polyline>
                  </svg>
                  Save Profile
                </>
              )}
            </button>
            <button type="button" className="cancel-btn" onClick={() => setSwitch(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfileForm
