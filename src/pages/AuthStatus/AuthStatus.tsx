
import { useSelector, useDispatch } from 'react-redux'
import { loginStart, loginSuccess, logout } from '../../features/authSlice'

const AuthStatus = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state: any) => state.auth)

  const handleLogin = () => {
    dispatch(loginStart())
    setTimeout(() => {
      dispatch(loginSuccess({ name: 'Abdulbori', email: 'user@gmail.com' }))
    }, 1000)
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
      {auth.loading ? (
        <p>Yuklanmoqda...</p>
      ) : auth.isAuthenticated ? (
        <div>
          <h3>Xush kelibsiz, {auth.user?.name}!</h3>
          <button onClick={handleLogout}>Chiqish</button>
        </div>
      ) : (
        <div>
          <p>Iltimos, tizimga kiring</p>
          <button onClick={handleLogin}>Kirish</button>
        </div>
      )}
    </div>
  )
}

export default AuthStatus
