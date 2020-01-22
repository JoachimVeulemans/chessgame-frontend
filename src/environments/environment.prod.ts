/** Variable which contains settings for a non-production environment */
export const environment = {
    /** Setting whether production is active in this environment */
    production: true,
    /** Defines the URL for where API calls to the backend should point */
    backend_url: 'https://chessgame.joachimveulemans.be:5000/api',
    /** Defines the URL for where API calls to the ai should point */
    ai_url: 'https://chessgame.joachimveulemans.be:5001/api'
};
