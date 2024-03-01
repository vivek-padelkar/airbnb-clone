import React, { useState } from 'react'
import PasswordChecklist from 'react-password-checklist'

const PasswordCheckList = ({ password, confirmPassWord, setPwdChk }) => {
  return (
    <>
      <h2>Password checklist:</h2>
      <PasswordChecklist
        rules={['minLength', 'specialChar', 'number', 'capital', 'match']}
        minLength={8}
        value={password}
        valueAgain={confirmPassWord}
        onChange={(isValid) => {
          setPwdChk(isValid)
        }}
      />
    </>
  )
}

export default PasswordCheckList
