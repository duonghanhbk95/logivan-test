import {
  ADD_DRIVER,
  REMOVE_DRIVER,
  UPDATE_DRIVER_INFO
} from '../actions'
const defaultState = {
  drivers: [
    {
      driverId: 1,
      name: "Nguyen Van Thanh",
      address: "200 Nguyen Co Thach"
    },
    {
      driverId: 2,
      name: "Nguyen Thanh Nam",
      address: "215 Hoa Binh"
    },
    {
      driverId: 3,
      name: "Tran Khanh Nhan",
      address: "502 Pham The Hien"
    }
  ]
}

const rdDriver = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DRIVER: 
      return { ...state, drivers: [...state.drivers, action.driver]}
    case REMOVE_DRIVER: 
      let drivers = state.drivers.filter(item => item.driverId !== action.driverId)
      return { ...state, drivers}
    default:
      return state
  }
}

export default rdDriver