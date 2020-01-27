import Swal from 'sweetalert2'

export default {
  successfullLogin () {
    Swal.fire({
      title: 'Welcome!',
      text: 'Lets do this',
      icon: 'success',
      type: 'success',
      position: 'center',
      timer: 1000,
      showConfirmButton: false
    })
  },
  failureLogin () {
    Swal.fire({
      title: 'Get out of here!',
      icon: 'error',
      text: '... or maybe try again',
      type: 'error',
      position: 'center',
      timer: 2000,
      showConfirmButton: false
    })
  }
}
