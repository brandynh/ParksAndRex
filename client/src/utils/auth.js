import decode from 'jwt-decode';

class AuthService {
  getProfile() {
   //   Grab json token from web storage and reverse the encoded hash
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    // If there is a token and it's not expired, return `true`
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    // Decode the token to get its expiration time, set by server-side auth
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`, removing the expired hash from local storage
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }
   // Terminate session by eliminating the saved token  ... FATALITY
  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();
