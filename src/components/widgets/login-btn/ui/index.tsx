'use client'

import { LoginModal } from '@/components/features/login-modal'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

export function LoginBtn() {
  const [modalActive, setModalActive] = useState(false)

  function onOpenChange() {
    setModalActive(false)
  }

  return (
    <>
      <Button
        className="btn btn-primary"
        size="sm"
        onClick={() => setModalActive(true)}
      >Login</Button>
      <LoginModal open={modalActive} onOpenChange={onOpenChange} />
    </>
  )
}
