/**
 * Express router paths go here.
 */


export default {
  Base: '/api',
  User: {
    Base: '/user',
    GetAll: '/all',
    Get: '',
    Register: '/register',
    Update: '/update',
    Delete: '/delete/:id',
    Spotify: '/spotify',
    SpotifyCallback: '/spotify/callback',
    History: '/history',
    ArtistStats: '/stats/artist',
    SongStats: '/stats/song'
  },
  Link: {
    Base: '/link',
    Spotify: '/spotify',
    SpotifyCallback: 'spotify/callback'
  },
  Auth: {
    Base: '/auth',
    Login: '/login',
    RefreshToken: '/refresh-token',
    RevokeToken: '/revoke-token',
    Google: '/login/google'
  }
} as const;
