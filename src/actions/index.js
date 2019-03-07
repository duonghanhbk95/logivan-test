// action 
export const ADD_DRIVER = 'ADD_DRIVER'

export const REMOVE_DRIVER = 'REMOVE_DRIVER'

export const UPDATE_DRIVER_INFO = 'UPDATE_DRIVER_INFO'

// action creator

export const acAddDriver = (driver) => {
  return {
    type: ADD_DRIVER,
    driver
  }
}

export const acRemoveDriver = (driverId) => {
  return {
    type: REMOVE_DRIVER,
    driverId
  }
}

export const acUpdateDriverInfo = (driver) => {
  return {
    type: UPDATE_DRIVER_INFO,
    driver
  }
}