// utils/api.js
export async function fetchWithToken(url, options = {}) {
    let accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!accessToken) {
        throw new Error('No access token available');
    }

    options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
    };

    let response = await fetch(url, options);

    if (response.status === 401) { // Unauthorized
        const refreshResponse = await fetch('/api/refresh-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refreshToken }),
        });

        if (refreshResponse.ok) {
            const refreshData = await refreshResponse.json();
            accessToken = refreshData.accessToken;
            localStorage.setItem('accessToken', accessToken);

            options.headers.Authorization = `Bearer ${accessToken}`;
            response = await fetch(url, options);
        } else {
            throw new Error('Unable to refresh token');
        }
    }

    return response;
}
