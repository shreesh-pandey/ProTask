name: Feature Request
description: Suggest a new feature or enhancement for ProTask
title: "[Feature]: "
labels: ["type: feature"]
assignees: ""

body:
  - type: markdown
    attributes:
      value: |
        ## 🚀 Feature Request
        
        Please describe the feature you'd like to see added to ProTask.
        
  - type: input
    id: summary
    attributes:
      label: Feature Summary
      description: A concise summary of the proposed feature.
      placeholder: "E.g. Add Pomodoro session sound alerts"
    validations:
      required: true

  - type: textarea
    id: description
    attributes:
      label: Detailed Description
      description: Provide a detailed explanation of the feature, including benefits and use cases.
      placeholder: "Describe what the feature does and why it’s useful"
    validations:
      required: true

  - type: dropdown
    id: priority
    attributes:
      label: Priority
      description: How important is this feature?
      options:
        - Low
        - Medium
        - High
    validations:
      required: true

  - type: textarea
    id: additional
    attributes:
      label: Additional Context
      description: Add any other context or screenshots about the feature request.
      placeholder: "Related links, mockups, dependencies, etc."
    validations:
      required: false
