name: Bug Report
description: Report an issue or unexpected behavior in ProTask
title: "[Bug]: "
labels: ["type: bug"]
assignees: ""

body:
  - type: markdown
    attributes:
      value: |
        ## 🐞 Bug Report
        
        Describe the problem clearly and provide enough information to reproduce it.
        
  - type: input
    id: summary
    attributes:
      label: Bug Summary
      description: A brief summary of the issue
      placeholder: "E.g. Timer doesn’t stop after 25 minutes"
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Steps to Reproduce
      description: What steps did you follow to encounter the bug?
      placeholder: |
        1. Go to the timer
        2. Start a Pomodoro session
        3. Wait for 25 minutes
        4. Timer doesn’t stop
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: Expected Behavior
      description: What did you expect to happen?
      placeholder: "Timer should stop and trigger a break"
    validations:
      required: true

  - type: textarea
    id: actual
    attributes:
      label: Actual Behavior
      description: What actually happened?
      placeholder: "Timer kept running without stopping"
    validations:
      required: true

  - type: input
    id: environment
    attributes:
      label: Environment
      description: OS, browser, or device where the issue occurred
      placeholder: "E.g. Windows 11, Chrome 124"
    validations:
      required: false

  - type: textarea
    id: additional
    attributes:
      label: Additional Context
      description: Any screenshots, logs, or additional notes
      placeholder: "Attach logs, images, or related info"
    validations:
      required: false
